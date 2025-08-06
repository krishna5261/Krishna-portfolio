import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import TiltCard from "../components/TiltCard";

const projects = [
  {
    name: "Productivity Tracker",
    link: "https://github.com/krishna5261/Productivity-Tracker",
    shortdesc: "A chrome extension that helps users to track their productivity by monitoring time spent on various websites",
    description:
      "A chrome extension that helps users track their productivity by monitoring time spent on various websites. It provides insights and suggestions to improve focus and efficiency. It also Blocks distracting sites during work hours.TECH STACK: React, Chrome APIs, CSS",
  },
  {
    name: "AI Voice Assistant",
    link: "https://github.com/krishna5261/ai-voice-assistant",
    shortdesc: "A voice-activated web assistant built with React that responds to spoken commands and perform Google searches",
    description:
      "A voice-activated web assistant built with React that responds to spoken commands. It can perform Google searches, fetch Wikipedia summaries, report time and date, and solve basic math expressions. TECH STACK: React, Web Speech API, CSS",
  },
  {
    name: "A real-time Chat Application",
    link: "https://github.com/krishna5261/Chat-App",
    shortdesc: "A real-time chat application that allows users to create accounts, join rooms, and send messages",
    description:
      "A real-time chat application that allows users to create accounts, join rooms, and send messages. TECH STACK: React, Node.js, Socket.io, Express,",
  },
  {
    name: "Personal Portfolio Website",
    link: "https://github.com/krishna5261/Krishna-portfolio",
    shortdesc: "A personal portfolio website showcasing my projects, education, skills, and contact information",
    description:
      "A personal portfolio website showcasing my projects, skills, and experience. It includes sections for about me, skills, projects, and contact information. TECH STACK: React, CSS, Framer Motion, and other libraries",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        padding: "8rem 2rem 2rem",
        position: "relative",
        textAlign: "center",
      }}
    >
      {/* Morphing blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
          fontWeight: "700",
          position: "relative",
          display: "inline-block",
          zIndex: 2,
        }}
        className="gradient-title"
      >
        Projects
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "2rem",
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <TiltCard style={cardStyle} className="project-card">
              <div onClick={() => setSelectedProject(p)}>
                <h3 style={titleStyle}>{p.name}</h3>
                <p style={descStyle}>
                  {p.shortdesc}.
                </p>
                <div style={{ color: "#555", fontSize: "0.9rem" }}>
                  Click here to know more.
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={modalOverlay}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{selectedProject.name}</h2>
              <p style={{ margin: "1rem 0" }}>{selectedProject.description}</p>
              <a
                href={selectedProject.link}
                target="_blank"
                style={buttonStyle}
              >
                <i
                  className="fa-brands fa-github"
                  style={{ marginRight: "8px" }}
                />
                View on GitHub
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const cardStyle = {
  background: "rgba(255,255,255,0.25)",
  backdropFilter: "blur(15px)",
  padding: "2rem",
  borderRadius: "16px",
  textAlign: "left",
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
};

const titleStyle = {
  fontSize: "1.5rem",
  marginBottom: "0.8rem",
};

const descStyle = {
  fontSize: "1rem",
  marginBottom: "1.5rem",
  color: "#444",
  lineHeight: 1.5,
};

const buttonStyle = {
  display: "inline-flex",
  alignItems: "center",
  padding: "0.6rem 1.2rem",
  background: "#f582ae",
  color: "#fff",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "500",
};

const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContent = {
  background: "white",
  padding: "2rem",
  borderRadius: "16px",
  maxWidth: "500px",
  width: "90%",
  textAlign: "center",
};
