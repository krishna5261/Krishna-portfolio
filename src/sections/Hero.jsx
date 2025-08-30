import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [5, -5]);
  const rotateY = useTransform(x, [-50, 50], [-5, 5]);

  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - bounds.left - bounds.width / 2;
    const mouseY = e.clientY - bounds.top - bounds.height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        zIndex: 1,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "left",
        padding: "2rem",
        flexWrap: "wrap",
        gap: "2rem",
        overflow: "hidden",
      }}
    >
      {/* Left: Text Section */}
      <div style={{ flex: "1 1 300px", maxWidth: "600px" }}>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            color: "#222",
          }}
        >
          Hi, I'm <span style={{ color: "#f582ae" }}>Krishna Tiwari</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          style={{
            fontSize: "1.5rem",
            lineHeight: 1.6,
            marginTop: "1rem",
            color: "#333",
          }}
        >
          I build impactful web apps, analyze data, and create elegant designs.
        </motion.p>

        <motion.a
          href="/Krishna_Tiwari_resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            marginTop: "2rem",
            display: "inline-block",
            background: "linear-gradient(90deg, #f582ae, #8bd3dd)",
            padding: "0.8rem 2rem",
            borderRadius: "30px",
            color: "#fff",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Download Resume
        </motion.a>
      </div>

      {/* Right: Parallax Image Section */}
      <motion.div
        style={{
          flex: "1 1 250px",
          maxWidth: "300px",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow:
            "0 0 0 6px rgba(245, 130, 174, 0.2), 0 8px 20px rgba(0, 0, 0, 0.15)",
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
      >
        <img
          src="/images/K_photo.jpg"
          alt="Krishna Tiwari"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "20px",
            transition: "transform 0.3s ease-out",
          }}
        />
      </motion.div>
    </section>
  );
}

