import { useRef, useState, useLayoutEffect, type ReactNode } from "react";

export default function SvgAutoViewbox({ padding, children }: { padding: number, children: ReactNode }) {
  const ref = useRef<SVGGElement>(null);
  const [viewBox, setViewBox] = useState("0 0 0 0");

  useLayoutEffect(() => {
    if (ref.current) {
      const bbox = ref.current.getBBox();
      const rect = [
        bbox.x - padding,
        bbox.y - padding,
        Math.max(bbox.width, 1) + padding * 2,
        Math.max(bbox.height, 1) + padding * 2];
      setViewBox(rect.join(' '));
    }
  }, [children]);

  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox={viewBox}>
      <g ref={ref}>
        {children}
      </g>
    </svg>
  )
}