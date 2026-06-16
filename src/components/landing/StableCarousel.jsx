import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * StableCarousel — clone-loop, index-based, no CSS keyframes.
 *
 * How the loop works:
 *   cloned = [last N items] + [all items] + [first N items]
 *   We animate between real positions (offset by N).
 *   When we land on a clone we instantly jump to the real counterpart.
 */
export default function StableCarousel({
  items = [],
  renderItem,
  slidesPerView = 1,
  gap = 20,
  autoplayDelay = 3000,
  showArrows = true,
  showDots = true,
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [current, setCurrent] = useState(0);
  const isAnimating = useRef(false);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  const n = items.length;

  // Responsive slidesPerView
  const spv = (() => {
    if (typeof slidesPerView === "number") return slidesPerView;
    if (width < 640) return slidesPerView.mobile ?? 1;
    if (width < 1024) return slidesPerView.tablet ?? 2;
    return slidesPerView.desktop ?? 3;
  })();

  const spvInt = Math.max(1, Math.floor(spv));
  const slideW = width > 0 ? (width - gap * (spv - 1)) / spv : 0;
  const step = slideW + gap;

  // Build cloned array with buffer = spvInt items on each side
  const buf = Math.min(spvInt, n);
  const cloned = n > 0
    ? [...items.slice(n - buf), ...items, ...items.slice(0, buf + 1)]
    : [];
  // real index i maps to cloned position (i + buf)

  // Measure container
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([e]) => setWidth(e.contentRect.width));
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Apply transform imperatively (bypasses React re-render lag)
  const setTransform = (clonePos, animate) => {
    if (!trackRef.current || step <= 0) return;
    trackRef.current.style.transition = animate ? "transform 0.5s ease" : "none";
    trackRef.current.style.transform = `translateX(${-(clonePos * step)}px)`;
  };

  // Keep track in sync on resize or current change
  useEffect(() => {
    if (step <= 0) return;
    setTransform(current + buf, false);
  }, [step, current, buf]); // eslint-disable-line

  // Navigate to a real index (with animation)
  const goTo = useCallback((nextReal, animate = true) => {
    if (isAnimating.current) return;
    isAnimating.current = animate;
    setCurrent(nextReal);
    setTransform(nextReal + buf, animate);
    if (!animate) isAnimating.current = false;
  }, [buf, step]); // eslint-disable-line

  const goNext = useCallback(() => {
    if (isAnimating.current) return;
    const next = (current + 1) % n;
    // If we're going past the last real item, animate to the clone then jump
    if (current === n - 1) {
      // animate to first clone (position n + buf)
      isAnimating.current = true;
      setTransform(n + buf, true);
      setCurrent(0);
    } else {
      isAnimating.current = true;
      setTransform(next + buf, true);
      setCurrent(next);
    }
  }, [current, n, buf, step]); // eslint-disable-line

  const goPrev = useCallback(() => {
    if (isAnimating.current) return;
    if (current === 0) {
      // animate to last clone (position -1 = buf-1)
      isAnimating.current = true;
      setTransform(buf - 1, true);
      setCurrent(n - 1);
    } else {
      isAnimating.current = true;
      setTransform(current - 1 + buf, true);
      setCurrent(current - 1);
    }
  }, [current, n, buf, step]); // eslint-disable-line

  // After animation: snap to real position if we went through a clone
  const onTransitionEnd = useCallback(() => {
    isAnimating.current = false;
    // Always snap to the exact real position (eliminates drift)
    setTransform(current + buf, false);
  }, [current, buf, step]); // eslint-disable-line

  // Autoplay
  useEffect(() => {
    if (!autoplayDelay || paused || n <= spvInt) return;
    const t = setInterval(goNext, autoplayDelay);
    return () => clearInterval(t);
  }, [autoplayDelay, paused, goNext, n, spvInt]);

  // Touch swipe
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; setPaused(true); };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? goNext() : goPrev();
    touchStartX.current = null;
    setTimeout(() => setPaused(false), 1500);
  };

  if (n === 0) return null;

  // Fallback scrollable row before width is measured
  if (slideW <= 0) {
    return (
      <div
        ref={containerRef}
        style={{ overflowX: "auto", display: "flex", gap: `${gap}px`, WebkitOverflowScrolling: "touch", paddingBottom: "4px" }}
      >
        {items.map((item, i) => (
          <div key={i} style={{ flex: "0 0 auto", minWidth: "240px" }}>
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", width: "100%" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        style={{ overflow: "hidden", width: "100%" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          onTransitionEnd={onTransitionEnd}
          style={{ display: "flex", gap: `${gap}px`, userSelect: "none", willChange: "transform" }}
        >
          {cloned.map((item, i) => {
            const realIdx = ((i - buf) % n + n) % n;
            return (
              <div
                key={i}
                style={{ flex: `0 0 ${slideW}px`, width: `${slideW}px`, minWidth: `${slideW}px` }}
              >
                {renderItem(item, realIdx)}
              </div>
            );
          })}
        </div>
      </div>

      {showArrows && n > spvInt && (
        <>
          <button onClick={goPrev} aria-label="הקודם" style={arrowStyle("right")}>
            <ChevronRight size={18} />
          </button>
          <button onClick={goNext} aria-label="הבא" style={arrowStyle("left")}>
            <ChevronLeft size={18} />
          </button>
        </>
      )}

      {showDots && n > 1 && (
        <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "18px" }}>
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`עבור לפריט ${i + 1}`}
              style={{
                width: i === current ? "20px" : "7px", height: "7px",
                borderRadius: "4px", padding: 0, border: "none", cursor: "pointer",
                background: i === current ? "#a78bfa" : "rgba(255,255,255,0.18)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function arrowStyle(side) {
  return {
    position: "absolute", top: "40%", [side]: "-18px",
    transform: "translateY(-50%)",
    width: "36px", height: "36px", borderRadius: "50%",
    background: "rgba(124,58,237,0.8)",
    border: "1px solid rgba(167,139,250,0.5)",
    color: "#fff", display: "flex", alignItems: "center",
    justifyContent: "center", cursor: "pointer", zIndex: 10,
    backdropFilter: "blur(8px)", padding: 0, flexShrink: 0,
  };
}