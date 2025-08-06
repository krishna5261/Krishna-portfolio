import AnimatedBackground from "./components/AnimatedBackground";
import Header from "./components/Header";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import ParticlesBackground from "./components/ParticleBackground";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
        position: "relative", // important for layering
      }}
    >
      <Header />
      <ParticlesBackground />
      <AnimatedBackground />
      <CustomCursor />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer
        style={{
          textAlign: "center",
          padding: "2rem",
          background: "rgba(255,255,255,0.05)",
          fontSize: "0.9rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        © {new Date().getFullYear()} Krishna Tiwari. All rights reserved.
      </footer>
    </div>
  );
}
