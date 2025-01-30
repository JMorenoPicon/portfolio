import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 bg-gray-900 text-white">
      <h1 className="text-lg font-bold">Mi Portfolio</h1>
      <div className="space-x-4">
        <Link href="/">Inicio</Link>
        <Link href="/about">Sobre mí</Link>
        <Link href="/projects">Proyectos</Link>
        <Link href="/contact">Contacto</Link>
      </div>
    </nav>
  );
}
