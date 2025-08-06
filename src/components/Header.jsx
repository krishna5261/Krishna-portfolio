import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const socials = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/krishna-tiwari-919827288/",
  },
  { icon: <FaGithub />, url: "https://github.com/krishna5261" },
  { icon: <FaEnvelope />, url: "mailto:krishnatiwari1652@gmail.com" },
];

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide header on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastScrollY && currentY > 100);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.4 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        zIndex: 50,
      }}
    >
      {/* Left navigation */}
      <nav style={{ display: "flex", gap: "2rem", fontWeight: "600" }}>
        {navLinks.map((link, i) => (
          <motion.span
            key={i}
            whileHover={{ scale: 1.1, y: -2 }}
            style={{ cursor: "pointer" }}
            onClick={() => scrollToSection(link.id)}
          >
            {link.name}
          </motion.span>
        ))}
      </nav>

      {/* Right social icons */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div style={{ display: "flex", gap: "1rem" }}>
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              style={{
                fontSize: "1.3rem",
                color: "#333",
                textDecoration: "none",
              }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
