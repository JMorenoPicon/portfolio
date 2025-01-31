import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image"; // ✅ Importación de next/image

const projects = [
  {
    title: "Project F1",
    description:
      "Aplicación desarrollada en 1º DAW que simula campeonatos y carreras de la Fórmula 1",
    technologies: ["Java", "MySQL", "MariaDB", "Eclipse"],
    image: "/projects/projectF1.png",
    link: "https://github.com/JMorenoPicon/ProjectF1",
  },
  {
    title: "Pet Finder",
    description:
      "Aplicación para adopción de mascotas y reporte de mascotas perdidas o encontradas.",
    technologies: ["Angular", "Bootstrap", "Node.js", "MongoDB"],
    image: "/projects/pet-finder.png",
    link: "https://github.com/JMorenoPicon/pet-finder",
  },
  {
    title: "Portfolio",
    description:
      "Portfolio personal desarrollado con Next.js y Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/projects/portfolio.png",
    link: "https://github.com/JMorenoPicon/portfolio",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-6 md:px-20 bg-darkBlue text-white">
      {/* Título */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        Proyectos Destacados
      </motion.h2>

      {/* Grid de proyectos */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 flex flex-col h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Imagen del proyecto con next/image */}
            <div className="w-full h-40 relative mb-4">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill" // ✅ Hace que la imagen se ajuste al contenedor
                objectFit="cover" // ✅ Recorta la imagen para que se vea bien sin deformarse
                className="rounded-lg"
              />
            </div>

            {/* Contenido de la tarjeta */}
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-blue-400">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
            </div>

            {/* Tecnologías utilizadas */}
            <div className="mt-auto flex flex-wrap gap-2 justify-start">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Botón alineado abajo */}
            <div className="mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-600 transition w-full text-center"
              >
                Ver en GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
