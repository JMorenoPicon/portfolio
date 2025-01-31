import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-gray-900 text-white py-4 px-6 flex justify-between items-center z-50">
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-400">Javier Moreno</h1>

      {/* Menú hamburguesa (para móviles) */}
      <div className="md:hidden relative">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menú móvil (aparece en la parte superior derecha) */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-10 right-0 bg-gray-800 text-white shadow-lg rounded-md py-3 px-6 w-48 flex flex-col items-start space-y-3"
          >
            <Link href="/" className="block hover:text-blue-400">Inicio</Link>
            <Link href="/about" className="block hover:text-blue-400">Sobre mí</Link>
            <Link href="/projects" className="block hover:text-blue-400">Proyectos</Link>
            <Link href="/contact" className="block hover:text-blue-400">Contacto</Link>
          </motion.div>
        )}
      </div>

      {/* Links de navegación (Desktop) */}
      <ul className="hidden md:flex space-x-8">
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/about">Sobre mí</Link></li>
        <li><Link href="/projects">Proyectos</Link></li>
        <li><Link href="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
}
