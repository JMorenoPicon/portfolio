import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLocale } from "@/context/LocaleContext"; // Importa el contexto de traducción

const experienceData = {
  es: [
    {
      title: "Becario de Soporte Técnico",
      company: "Giesecke+Devrient",
      date: "Junio 2024 - Actualidad",
      description:
        "Gestión del panel de soporte, resolución de incidencias, documentación de tareas, escalado interno y seguimiento de tareas.",
    },
    {
      title: "Conductor VTC",
      company: "Cabify",
      date: "Febrero 2024 - Junio 2024",
      description: "Conductor de vehículo de flota VTC.",
    },
    {
      title: "Auxiliar de tienda",
      company: "Expendeduría Nº 56 Sevilla",
      date: "Julio 2021 - Noviembre 2023",
      description:
        "Venta al público, gestión de tienda y stock, reparación y recarga de máquinas expendedoras de tabaco.",
    },
    {
      title: "Auxiliar de tienda",
      company: "Grupo Zena, Domino's Pizza",
      date: "Junio 2017 - Agosto 2017",
      description: "Personal de cocina.",
    },
  ],
  en: [
    {
      title: "Technical Support Intern",
      company: "Giesecke+Devrient",
      date: "June 2024 - Present",
      description:
        "Manage support dashboard, troubleshooting, task resolution, task documentation, internal escalation, and task follow-up.",
    },
    {
      title: "VTC Driver",
      company: "Cabify",
      date: "February 2024 - June 2024",
      description: "Fleet vehicle driver for VTC service.",
    },
    {
      title: "Store Assistant",
      company: "Expendeduría Nº 56 Sevilla",
      date: "July 2021 - November 2023",
      description:
        "Customer service, store and stock management, maintenance and refill of tobacco vending machines.",
    },
    {
      title: "Store Assistant",
      company: "Grupo Zena, Domino's Pizza",
      date: "June 2017 - August 2017",
      description: "Kitchen staff.",
    },
  ],
};

export default function Experience() {
  const { translations, locale } = useLocale(); // Obtiene las traducciones según el idioma seleccionado
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
        {translations.experience.title}
      </motion.h2>

      {/* Timeline */}
      <motion.div
        className="max-w-4xl mx-auto relative"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full hidden md:block"></div>

        {experienceData[locale].map((exp, index) => (
          <div
            key={index}
            className={`mb-8 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Punto en la línea de tiempo */}
            <div className="w-4 h-4 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2 hidden md:block"></div>

            {/* Contenedor de experiencia */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full md:w-5/12">
              <h3 className="text-xl font-bold text-blue-400">{exp.title}</h3>
              <p className="text-gray-300">{exp.company}</p>
              <p className="text-sm text-gray-400">{exp.date}</p>
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
