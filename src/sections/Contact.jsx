import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/krishna-tiwari-919827288/",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/krishna5261",
    label: "GitHub",
  },
  {
    icon: <FaEnvelope />,
    url: "mailto:krishnatiwari1652@gmail.com",
    label: "Email",
  },
  { icon: <FaPhone />, url: "tel:+917049236495", label: "Phone" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "6rem 2rem",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
          fontWeight: "bold",
        }}
      >
        Let&apos;s Connect
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            style={{
              fontSize: "2rem",
              color: "#333",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              width: "100px",
            }}
          >
            {s.icon}
            <span style={{ fontSize: "0.9rem" }}>{s.label}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
