import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

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
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(false); // close menu after click on mobile
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

      <nav
        className="nav-desktop"
        style={{
          display: "flex",
          gap: "2rem",
          fontWeight: "600",
        }}
      >
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


      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div className="socials" style={{ display: "flex", gap: "1rem" }}>
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

        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ cursor: "pointer" }}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>
      </div>

      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="nav-mobile"
          style={{
            position: "absolute",
            top: "64px",
            right: "1rem",
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(10px)",
            borderRadius: "8px",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            fontWeight: "600",
          }}
        >
          {navLinks.map((link, i) => (
            <span
              key={i}
              whileHover={{ scale: 1.1, x: 6, color: "#0077ff"}}
              whileTap={{ scale: 0.95 }}
              style={{ cursor: "pointer" }}
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </span>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}

