import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-900 text-white"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 leading-relaxed max-w-3xl mx-auto"
        >
          I am a passionate and dedicated Full Stack Developer with hands-on experience 
          in building modern, responsive web applications using technologies like React, 
          Node.js, Express, and MongoDB. I enjoy transforming ideas into real-world 
          solutions and creating user-friendly, efficient, and scalable applications.
          <br /><br />
          With a strong foundation in frontend and backend development, I continuously 
          strive to improve my skills, explore new technologies, and deliver high-quality 
          projects. My goal is to contribute to innovative teams and build impactful 
          digital experiences.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Frontend
            </h3>
            <p className="text-gray-300">
              Building responsive and interactive UI using React, Tailwind CSS, and JavaScript.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Backend
            </h3>
            <p className="text-gray-300">
              Developing scalable APIs and server-side logic using Node.js and Express.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Database
            </h3>
            <p className="text-gray-300">
              Managing data efficiently with MongoDB and implementing CRUD operations.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}