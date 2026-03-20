import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Hi, I'm <span className="text-blue-500">Gayathri Rajavelu</span>
      </motion.h1>

      {/* Role */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg md:text-2xl text-gray-400 mb-4"
      >
        Full Stack Developer | React | Node.js
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="max-w-2xl text-gray-300 mb-8"
      >
        I build responsive and user-friendly web applications using modern technologies.
        Passionate about creating clean UI, solving real-world problems, and continuously
        learning new skills in full stack development.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex gap-4"
      >
       
       <a
          href="/resume.pdf"
          download="Gayathri_Rajavelu_Resume.pdf"
          className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition shadow-lg"
        >
          Download Resume ⬇️
        </a>

        <a
          href="#projects"
          className="border border-gray-400 px-6 py-3 rounded-xl hover:bg-gray-700 transition"
        >
          View Projects
        </a>
      </motion.div>

    </section>
  );
}