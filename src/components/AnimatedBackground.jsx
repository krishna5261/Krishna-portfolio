import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  const offset = (factor) => ({
    x: (mousePos.x - window.innerWidth / 2) * factor,
    y: (mousePos.y - window.innerHeight / 2) * factor,
  });

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1, // background stays behind all sections
        background: "linear-gradient(135deg, #fef6e4 0%, #f3d2c1 100%)",
        overflow: "hidden",
      }}
    >
      <Blob color="#8bd3dd" size={300} factor={0.02} top="15%" left="20%" />
      <Blob color="#f582ae" size={350} factor={0.015} top="60%" left="65%" />
      <Blob color="#a3c4f3" size={280} factor={0.01} top="30%" left="75%" />
      <Blob color="#f5d0c5" size={250} factor={0.025} top="70%" left="20%" />
    </div>
  );

  function Blob({ color, size, factor, top, left }) {
    return (
      <motion.div
        style={blobStyle(color, size, top, left)}
        animate={{
          ...offset(factor),
          scale: [1, 1.1], // two keyframes only
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
    );
  }

  function blobStyle(color, size, top = "10%", left = "20%") {
    return {
      position: "absolute",
      top,
      left,
      width: size,
      height: size,
      borderRadius: "50%",
      background: color,
      filter: "blur(100px)",
      willChange: "transform",
    };
  }
}
