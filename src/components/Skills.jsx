import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
  ];

  return (
    <section className="py-20 px-6 bg-gray-900 text-white text-center">
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-10"
      >
        Skills
      </motion.h2>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.1 }}
            className="bg-white/10 px-5 py-2 rounded-full text-sm md:text-base shadow hover:bg-blue-500 transition"
          >
            {skill}
          </motion.span>
        ))}
      </div>

    </section>
  );
}