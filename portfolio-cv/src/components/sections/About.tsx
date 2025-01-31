import Image from "next/image";
import { motion } from "framer-motion";
import { FaNodeJs, FaDocker, FaGit, FaJs, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNestjs, SiTypescript, SiPostman, SiEclipseide, SiMysql, SiAngular, SiFigma } from "react-icons/si";
import { useLocale } from "@/context/LocaleContext"; // Importa el contexto de traducción

const skills = [
  // 🟢 Backend
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "NestJS", icon: <SiNestjs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },

  // 🔵 Frontend
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Angular", icon: <SiAngular /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },

  // 🛠️ Herramientas y DevOps
  { name: "Docker", icon: <FaDocker /> },
  { name: "Git", icon: <FaGit /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Eclipse", icon: <SiEclipseide /> },
  { name: "Figma", icon: <SiFigma /> },  // 🎨 Figma añadido

  // 🔴 Otros Lenguajes
  { name: "Java", icon: <FaJava /> }
];

export default function About() {
  const { translations } = useLocale(); // Obtiene las traducciones según el idioma

  return (
    <section className="bg-darkBlue text-white py-20 px-6 md:px-20">
      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Foto Personal */}
        <motion.div
          className="relative w-60 h-60 md:w-80 md:h-80 rounded-full border-8 border-blue-500 shadow-xl overflow-hidden 
                     mb-8 md:mb-0 md:mr-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/mi-foto.jpg"
            alt={translations.hero.avatarAlt}
            width={300}
            height={300}
            className="rounded-full"
          />
        </motion.div>

        {/* Biografía */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">{translations.about.title}</h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            {translations.about.description}
          </p>
        </motion.div>
      </div>

      {/* Sección de Skills */}
      <div className="mt-16">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {translations.skills.title}
        </motion.h2>

        {/* Grid de Skills con React Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center 
                         transition transform hover:scale-110 hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-blue-400 text-5xl mb-4">{skill.icon}</div>
              <p className="text-white font-semibold text-lg">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
