import { motion } from "framer-motion";
import { FaLaptopCode, FaLightbulb, FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";

const milestones = [
  {
    year: "2022 – 2026",
    title: "B.Tech in Information Technology",
    desc: "Madhav Institute of Technology and Science, Gwalior",
  },
  {
    year: "2019 – 2021",
    title: "Higher Secondary",
    desc: "Saint John's Higher Secondary School, Gwalior",
  },
  { year: "2018 - 2019",
    title: "High School",
    desc: "Saint John's Higher Secondary School, Gwalior",}
];

const funFacts = [
  { icon: <FaLaptopCode />, text: "Competitive Programmer" },
  { icon: <FaLightbulb />, text: "Always learning new tech" },
  { icon: <FaHeart />, text: "Love building meaningful projects" },
];

export default function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const offset = (factor) => ({
    x: (mousePos.x - window.innerWidth / 2) * factor,
    y: (mousePos.y - window.innerHeight / 2) * factor,
  });

  return (
    <section
      id="about"
      style={{
        padding: "8rem 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Animated Doodles */}
      {[
        {
          src: "/images/doodle-star.svg",
          factor: 0.02,
          style: { top: "5%", left: "8%", width: "80px" },
        },
        {
          src: "/images/doodle-zigzag.svg",
          factor: 0.015,
          style: { bottom: "10%", right: "8%", width: "140px" },
        },
        {
          src: "/images/doodle-arrow.svg",
          factor: 0.01,
          style: { top: "15%", right: "20%", width: "90px" },
        },
        {
          src: "/images/doodle-circle.svg",
          factor: 0.025,
          style: { bottom: "20%", left: "15%", width: "100px" },
        },
      ].map((doodle, i) => (
        <motion.img
          key={i}
          src={doodle.src}
          alt=""
          animate={offset(doodle.factor)}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          style={{
            position: "absolute",
            zIndex: -1,
            opacity: 0.15,
            pointerEvents: "none",
            ...doodle.style,
          }}
        />
      ))}

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          fontSize: "2.8rem",
          fontWeight: "800",
          marginBottom: "4rem",
          fontFamily: "'Shadows Into Light', cursive",
          color: "#333",
        }}
      >
        About Me
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
        }}
      >
        {/* Timeline */}
        <div
          style={{
            borderLeft: "2px solid rgba(0,0,0,0.1)",
            paddingLeft: "2rem",
          }}
        >
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ marginBottom: "2rem", position: "relative" }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-33px",
                  top: "5px",
                  width: "15px",
                  height: "15px",
                  background: "#f582ae",
                  borderRadius: "50%",
                }}
              />
              <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.2rem" }}>
                {m.year}
              </h3>
              <h4 style={{ margin: "0 0 0.3rem 0" }}>{m.title}</h4>
              <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.5 }}>
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            padding: "2rem",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ marginBottom: "1.5rem" }}>A little about me</h3>
          <p
            style={{ marginBottom: "2rem", fontSize: "1rem", lineHeight: 1.6 }}
          >
            I'm Krishna Tiwari, A final-year B.Tech student passionate about
            problem-solving, web development, data science, and creating
            impactful solutions.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1rem",
            }}
          >
            {funFacts.map((fact, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  fontSize: "1rem",
                }}
              >
                <span style={{ fontSize: "1.5rem", color: "#f582ae" }}>
                  {fact.icon}
                </span>
                {fact.text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile responsiveness */}
      <style>
        {`
          @media (max-width: 768px) {
            #about > div {
              display: flex !important;
              flex-direction: column !important;
            }
            #about {
              padding: 6rem 1.5rem !important;
            }
          }
        `}
      </style>
    </section>
  );
}



