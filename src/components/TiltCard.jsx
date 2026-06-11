import { useRef } from "react";

/**
 * 3D tilt wrapper. Rotates toward the cursor and exposes a moving
 * glare highlight via CSS custom properties (--mx / --my).
 */
export default function TiltCard({
  children,
  className = "",
  max = 12,
  scale = 1.03,
  glare = true,
  ...rest
}) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (0.5 - py) * max * 2;
    const ry = (px - 0.5) * max * 2;
    el.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
    el.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
    el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
    el.style.setProperty("--scale", scale);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--scale", "1");
  };

  return (
    <div
      ref={ref}
      className={`tilt ${glare ? "tilt-glare" : ""} ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      {...rest}
    >
      <div className="tilt-inner">{children}</div>
    </div>
  );
}
