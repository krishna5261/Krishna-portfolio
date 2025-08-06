import { motion } from "framer-motion";
import TiltCard from "../components/TiltCard";

const skillIcons = {
  "Competitive Programming": "fa-solid fa-chess-knight",
  DSA: "fa-solid fa-code",
  "Web Development": "fa-solid fa-globe",
  "Data Science": "fa-solid fa-chart-line",
  C: "fa-solid fa-c",
  "C++": "fa-solid fa-code",
  Python: "fa-brands fa-python",
  "MERN Stack": "fa-brands fa-react",
  NumPy: "fa-solid fa-calculator",
  Pandas: "fa-solid fa-database",
  Matplotlib: "fa-solid fa-chart-pie",
  Seaborn: "fa-solid fa-water",
  "Material UI": "fa-solid fa-palette",
  Bootstrap: "fa-brands fa-bootstrap",
  "Chakra UI": "fa-solid fa-star",
  SQL: "fa-solid fa-database",
  Git: "fa-brands fa-git-alt",
};

const generalSkills = [
  "Competitive Programming",
  "DSA",
  "Web Development",
  "Data Science",
];

const techSkills = [
  "C",
  "C++",
  "Python",
  "MERN Stack",
  "NumPy",
  "Pandas",
  "Matplotlib",
  "Seaborn",
  "Material UI",
  "Bootstrap",
  "Chakra UI",
  "SQL",
  "Git",
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
        padding: "8rem 2rem 2rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
          fontWeight: "700",
          position: "relative",
          display: "inline-block",
        }}
        className="gradient-title"
      >
        Skills
      </motion.h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <SkillCard title="General Skills" skills={generalSkills} />
        <SkillCard title="Technical Skills" skills={techSkills} />
      </div>
    </section>
  );
}

function SkillCard({ title, skills }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <TiltCard
        style={{
          padding: "2rem",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.3)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          textAlign: "left",
          minHeight: "250px", // Ensures both cards have equal minimum height
        }}
      >
        <h3
          style={{
            marginBottom: "1rem",
            fontSize: "1.5rem",
            fontWeight: "600",
            position: "relative",
            display: "inline-block",
          }}
          className="gradient-title"
        >
          {title}
        </h3>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.8rem",
          }}
        >
          {skills.map((s, index) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              style={badgeStyle}
            >
              <i
                className={skillIcons[s] || "fa-solid fa-circle"}
                style={{
                  marginRight: "8px",
                  fontSize: "1rem",
                  color: "#f582ae",
                }}
              ></i>
              {s}
            </motion.div>
          ))}
        </div>
      </TiltCard>
    </motion.div>
  );
}

const badgeStyle = {
  display: "inline-flex",
  alignItems: "center",
  padding: "0.5rem 1rem",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.8)",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  fontSize: "0.95rem",
  cursor: "default",
  transition: "transform 0.2s ease",
};
