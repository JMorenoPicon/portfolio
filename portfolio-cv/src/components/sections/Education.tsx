import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    title: "CFGS Desarrollo de Aplicaciones Web",
    institution: "Instituto Tecnológico superior ADA (Sevilla España)",
    date: "2023 - 2025",
  },
  {
    title: "Grado en Ingeniería Electrónica Industrial (No finalizado)",
    institution: "Escuela Politécnica Superior de Ingeniería (Sevilla, España)",
    date: "2017 - 2022",
  },
  {
    title: "Bachillerato de Ciencias y Tecnología",
    institution: "IES Pino Montano (Sevilla, España)",
    date: "2014 - 2016",
  },
];

export default function Education() {
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
        Educación
      </motion.h2>

      {/* Timeline */}
      <motion.div
        className="max-w-4xl mx-auto relative"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full hidden md:block"></div>

        {education.map((edu, index) => (
          <div key={index} className={`mb-8 flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
            {/* Punto en la línea de tiempo */}
            <div className="w-4 h-4 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2 hidden md:block"></div>

            {/* Contenedor de educación */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full md:w-5/12">
              <h3 className="text-xl font-bold text-blue-400">{edu.title}</h3>
              <p className="text-gray-300">{edu.institution}</p>
              <p className="text-sm text-gray-400">{edu.date}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
