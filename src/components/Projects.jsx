import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <div className="border-b border-neutral-600 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        id="projects"
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="relative w-full lg:w-1/4"
            >
              <div
                className="relative group rounded overflow-hidden"
                style={{ width: "150px", height: "150px" }}
                onClick={() => setSelectedProject(project)}
              >
                <img
                  className="block w-full h-full object-cover"
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                />
                <div className="absolute inset-0 flex items-center cursor-pointer justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-semibold">
                    View Project
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <div className="flex justify-between items-center">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="relative inline-block text-lg font-light cursor-pointer"
                >
                  <FaGithub className="text-4xl mb-2 text-white hover:text-purple-800" />
                  {hoveredProject === index && (
                    <span className="absolute bottom-full mb-2 rounded-lg bg-gray-800 px-2 py-1 text-center text-sm text-white">
                      View Source Code
                    </span>
                  )}
                </a>
              </div>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div
            className="bg-neutral-800 rounded-lg p-8 w-11/12 max-w-5xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            style={{
              scrollbarWidth: "none", // Hide scrollbar for Firefox
              msOverflowStyle: "none", // Hide scrollbar for IE and Edge
            }}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-purple-800"
              onClick={closeModal}
            >
              ✖
            </button>
            <h2 className="text-2xl mb-4 font-semibold text-white">
              {selectedProject.title}
            </h2>
            <p className="text-neutral-400 mb-4">
              {selectedProject.fullDescription
                .split("\n")
                .map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
            </p>

            <div className="mb-8">
              {selectedProject.technologies.map((tech, index) => (
                <span
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>

            {selectedProject.demoVideo && (
              <div className="mb-4">
                <h3 className="text-lg font-medium text-white mb-2">
                  Demo Video
                </h3>
                <video
                  width="100%"
                  height="auto"
                  controls
                  src={selectedProject.demoVideo}
                  className="rounded-lg"
                  alt={`${selectedProject.title} demo`}
                />
              </div>
            )}

            <a
              href={selectedProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-800 underline"
            >
              View Source Code on GitHub
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
