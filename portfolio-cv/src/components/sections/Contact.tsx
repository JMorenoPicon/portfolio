import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useLocale } from "@/context/LocaleContext"; // ✅ Importamos el contexto de idioma

export default function Contact() {
  const { translations } = useLocale(); // ✅ Obtiene las traducciones dinámicas
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario (API, EmailJS, etc.)
    alert(translations.contact.messageSent); // ✅ Mensaje traducido
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-darkBlue text-white">
      {/* Título */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {translations.contact.title}
      </motion.h2>

      {/* Mensaje */}
      <motion.p
        className="text-center text-lg text-gray-300 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {translations.contact.description}
      </motion.p>

      {/* Redes Sociales */}
      <motion.div
        className="flex justify-center gap-6 text-3xl mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a href="https://github.com/JMorenoPicon" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/javier-moreno-picón-5458ab272" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
          <FaLinkedin />
        </a>
        <a href="mailto:javier.moreno.picon@gmail.com" className="hover:text-blue-500 transition">
          <FaEnvelope />
        </a>
      </motion.div>

      {/* Botón de CV */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <a
          href="/CV JAVIER MORENO PICON.pdf"
          download
          className="px-6 py-3 bg-blue-500 text-white rounded-full text-lg font-semibold hover:bg-blue-600 transition shadow-lg"
        >
          📄 {translations.hero.buttonCv}
        </a>
      </motion.div>

      {/* Formulario de Contacto */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">{translations.contact.name}</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full mt-1 p-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">{translations.contact.email}</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mt-1 p-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300">{translations.contact.message}</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full mt-1 p-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition"
        >
          {translations.contact.sendMessage}
        </button>
      </motion.form>
    </section>
  );
}
