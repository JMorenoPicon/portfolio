import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLocale } from "@/context/LocaleContext";

export default function Hero() {
  const { translations } = useLocale(); // Obtiene las traducciones actuales
  const roles = translations.hero.subtitle; // Obtiene los roles según el idioma seleccionado

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!roles || roles.length === 0) return; // Previene el error si roles está vacío

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [roles]);

  return (
    <section className="min-h-screen pt-20 md:pt-24 pb-20 md:pb-24 flex flex-col md:flex-row justify-center items-center px-6 md:px-20 bg-darkBlue">
      {/* Columna de la Imagen */}
      <div className="relative flex justify-center md:w-1/2">
        <motion.div
          className="relative w-60 h-60 md:w-80 md:h-80 rounded-full border-8 border-blue-500 shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/avatar.png"
            alt="Avatar de Javier"
            width={300}
            height={300}
            className="rounded-full"
          />
        </motion.div>
      </div>

      {/* Columna del Texto */}
      <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {translations.hero.title}
          <br />
          <span className="text-blue-400">{translations.hero.subtitle[0]}</span>
        </motion.h1>

        {/* Animación de cambio de roles */}
        <motion.p
          key={index}
          className="mt-4 text-lg md:text-2xl text-gray-300 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          {roles?.[index] ?? "Loading..."}
        </motion.p>

        {/* Descripción Personal */}
        <motion.p
          className="mt-4 text-md md:text-lg text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {translations.about.description}
        </motion.p>

        {/* Botones */}
        <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
          <motion.a
            href="/CV JAVIER MORENO PICON.pdf"
            download
            className="px-6 py-3 bg-blue-500 text-white rounded-full text-lg font-semibold hover:bg-blue-600 transition shadow-lg flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            📄 {translations.hero.buttonCv}
          </motion.a>

          <motion.a
            href="mailto:javier.moreno.picon@gmail.com"
            className="px-6 py-3 border border-blue-500 text-blue-500 rounded-full text-lg font-semibold hover:bg-blue-500 hover:text-white transition shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            {translations.hero.buttonContact}
          </motion.a>
        </div>

        {/* Iconos de redes sociales */}
        <div className="mt-6 flex justify-center md:justify-start gap-4 text-white text-2xl">
          <a href="https://github.com/JMorenoPicon" target="_blank">
            <FaGithub className="hover:text-blue-500 transition" />
          </a>
          <a href="https://linkedin.com/in/javier-moreno-picón-5458ab272" target="_blank">
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
