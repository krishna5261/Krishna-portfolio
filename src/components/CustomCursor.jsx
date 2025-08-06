import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        pointerEvents: "none",
        background:
          "radial-gradient(circle at center, rgba(245,130,174,0.6), rgba(139,211,221,0.3))",
        transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
        zIndex: 9999,
        transition: "transform 0.05s linear",
      }}
    />
  );
}
