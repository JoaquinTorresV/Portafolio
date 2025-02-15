export default function Nav() {
    return (
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 bg-opacity-50 backdrop-blur-md text-white px-8 py-3 rounded-full shadow-lg flex space-x-6 z-50">
        <a href="/" className="hover:text-blue-400 transition duration-300">Home</a>
        <a href="#proyectos" className="hover:text-blue-400 transition duration-300">Proyectos</a>
        <a href="#about" className="hover:text-blue-400 transition duration-300">Sobre Mí</a>
        <a href="#contact" className="hover:text-blue-400 transition duration-300">Contacto</a>
      </nav>
    );
  }
  