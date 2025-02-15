import { FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-96 p-8 rounded-lg shadow-lg bg-white">
        <h1 className="text-3xl font-semibold mb-6 text-center" id="contact">Contacto</h1>

        {/* Sección de iconos de redes sociales */}
        <div className="mb-6 text-center">
          <p className="mb-4 text-gray-600">¡Conéctemos en las redes sociales!</p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/j04ko.t/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={32} className="text-gray-800 hover:text-pink-500 transition duration-300" />
            </a>
            <a href="https://github.com/JoaquinTorresV" target="_blank" rel="noopener noreferrer">
              <FaGithub size={32} className="text-gray-800 hover:text-gray-700 transition duration-300" />
            </a>
            <a href="mailto:joaquintorresv2005@gmail.com">
              <FaEnvelope size={32} className="text-gray-800 hover:text-red-500 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div>
          <p className="mb-4 text-gray-600 text-center">¿Tienes alguna pregunta o mensaje? ¡Escríbeme!</p>
          <form action="mailto:tu_email@example.com" method="post" encType="text/plain" className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-3 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-3 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                className="mt-1 p-3 w-full border rounded-md shadow-sm focus:ring focus:ring-blue-300"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
