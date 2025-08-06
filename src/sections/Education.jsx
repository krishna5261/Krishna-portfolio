import { motion } from "framer-motion";

const timeline = [
  { year: "2023", title: "B.Tech in Computer Science", desc: "XYZ University" },
  { year: "2019", title: "High School", desc: "ABC School" },
];

export default function Education() {
  return (
    <section
        id="education"
      style={{
        position: "relative",
        padding: "6rem 2rem",
        maxWidth: "800px",
        margin: "0 auto",
        zIndex: 1,
      }}
    >
      <h2 className="heading">Education</h2>
      <div
        style={{
          marginTop: "2rem",
          borderLeft: "2px solid #ccc",
          paddingLeft: "2rem",
        }}
      >
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: "2rem" }}
          >
            <h3>
              {item.year} - {item.title}
            </h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
