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

      {/* Menú hamburguesa para móviles */}
      <div className="md:hidden relative">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        {/* Menú móvil (se abre debajo del icono de menú) */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full right-0 bg-gray-800 text-white shadow-lg rounded-md py-3 px-6 w-48 flex flex-col space-y-3"
          >
            <Link href="/" className="block hover:text-blue-400" onClick={() => setMenuOpen(false)}>Inicio</Link>
            <Link href="/about" className="block hover:text-blue-400" onClick={() => setMenuOpen(false)}>Sobre mí</Link>
            <Link href="/projects" className="block hover:text-blue-400" onClick={() => setMenuOpen(false)}>Proyectos</Link>
            <Link href="/contact" className="block hover:text-blue-400" onClick={() => setMenuOpen(false)}>Contacto</Link>
          </motion.div>
        )}
      </div>

      {/* Links de navegación (Desktop) */}
      <ul className="hidden md:flex space-x-8">
        <li><Link href="/" className="hover:text-blue-400">Inicio</Link></li>
        <li><Link href="/about" className="hover:text-blue-400">Sobre mí</Link></li>
        <li><Link href="/projects" className="hover:text-blue-400">Proyectos</Link></li>
        <li><Link href="/contact" className="hover:text-blue-400">Contacto</Link></li>
      </ul>
    </nav>
  );
}
