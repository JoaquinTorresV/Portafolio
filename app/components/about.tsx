import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaPython, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiFirebase, SiLinux, SiFigma } from "react-icons/si";

export default function About() {
  return (
    <div id="about" className="flex flex-col items-center justify-center py-12 px-6 bg-gray-100">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        {/* Sección de Sobre Mí */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Sobre Mí</h1>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          ¡Hola! Soy <span className="font-semibold">Joaquin Torres</span>, estudiante de segundo año de Ingeniería Civil Informática en la Universidad de Valparaíso. Me apasiona tanto el desarrollo
          <span className="text-blue-500 font-semibold"> frontend</span> como el <span className="text-green-500 font-semibold">backend</span>, además de la <span className="text-red-500 font-semibold">ciberseguridad</span>. Llevo más de un año aprendiendo de manera autodidacta y en la universidad, trabajando en proyectos personales para mejorar mis habilidades.
        </p>

        {/* Sección de Tecnologías */}
        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-4">Tecnologías</h2>

          {/* Frontend */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Frontend</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <FaHtml5 size={40} className="text-orange-500" />
              <FaCss3Alt size={40} className="text-blue-500" />
              <FaJs size={40} className="text-yellow-400" />
              <FaReact size={40} className="text-blue-400" />
              <SiNextdotjs size={40} className="text-black" />
              <SiTailwindcss size={40} className="text-teal-500" />
              <SiFigma size={40} className="text-purple-500" />
            </div>
          </div>

          {/* Backend */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Backend</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <FaNodeJs size={40} className="text-green-500" />
              <SiMongodb size={40} className="text-green-600" />
              <SiMysql size={40} className="text-blue-600" />
              <SiFirebase size={40} className="text-yellow-500" />
              <FaDatabase size={40} className="text-gray-600" />
            </div>
          </div>

          {/* Otros */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Otros</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <FaGitAlt size={40} className="text-orange-600" />
              <SiLinux size={40} className="text-black" />
              <FaPython size={40} className="text-blue-500" />
              <FaJava size={40} className="text-red-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
