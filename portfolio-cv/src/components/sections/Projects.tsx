import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";

const projectsData = {
  es: [
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
  ],
  en: [
    {
      title: "Project F1",
      description:
        "Application developed in 1st DAW that simulates championships and Formula 1 races",
      technologies: ["Java", "MySQL", "MariaDB", "Eclipse"],
      image: "/projects/projectF1.png",
      link: "https://github.com/JMorenoPicon/ProjectF1",
    },
    {
      title: "Pet Finder",
      description:
        "Application for pet adoption and reporting lost or found pets.",
      technologies: ["Angular", "Bootstrap", "Node.js", "MongoDB"],
      image: "/projects/pet-finder.png",
      link: "https://github.com/JMorenoPicon/pet-finder",
    },
    {
      title: "Portfolio",
      description:
        "Personal portfolio developed with Next.js and Tailwind CSS.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "/projects/portfolio.png",
      link: "https://github.com/JMorenoPicon/portfolio",
    },
  ],
};

export default function Projects() {
  const { translations, locale } = useLocale();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-between py-20 px-6 md:px-20 bg-darkBlue text-white"
    >
      {/* Contenedor de contenido */}
      <div className="flex-grow">
        {/* Título */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {translations.projects.title}
        </motion.h2>

        {/* Grid de proyectos */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {projectsData[locale].map((project, index) => (
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
                  layout="fill"
                  objectFit="cover"
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
                  {translations.projects.githubButton}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
