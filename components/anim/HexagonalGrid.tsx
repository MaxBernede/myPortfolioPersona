import { useState, useEffect } from "react";

export default function HexagonalGrid() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="fixed inset-0 opacity-5 pointer-events-none" />;

  return (
    <div className="fixed inset-0 opacity-5 pointer-events-none">
      <svg width="100%" height="100%" className="animate-slow-rotate">
        <defs>
          <pattern
            id="hexagons"
            x="0"
            y="0"
            width="60"
            height="52"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="30,2 50,15 50,37 30,50 10,37 10,15"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" className="text-cyan-400" />
      </svg>
    </div>
  );
}
