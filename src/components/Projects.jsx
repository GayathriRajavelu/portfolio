import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Kanban Board",
      description: "Task management app with drag-and-drop and localStorage.",
      image: "/kanban.png",
      live: "https://kanbanapplication1.netlify.app/",
      github: "https://github.com/GayathriRajavelu/app-kanban",
    },
    {
      title: "Notes App",
      description: "Notes app with search, filters, and persistence.",
      image: "/notes.png",
      live: "https://notesappreact1.netlify.app/",
      github: "https://github.com/GayathriRajavelu/notes-app",
    },
    {
      title: "Recipe Platform",
      description: "Recipe sharing app with ratings and meal planning.",
      image: "/recipe.png",
      live: "https://recipeplatform1.netlify.app/",
      github: "https://github.com/GayathriRajavelu/recipesharing-Frontend",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-black text-white">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative group rounded-2xl overflow-hidden"
          >
            {/* Glow Background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>

            {/* Card */}
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
              
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="border px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                  >
                    Code
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}