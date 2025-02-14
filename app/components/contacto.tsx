import { FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa'; // Importando los iconos de react-icons

export default function Contact() {
    return (
        <div id="contact" className="p-8">
            <h1 className="text-3xl font-semibold mb-6">Contacto</h1>

            {/* Sección de iconos de redes sociales */}
            <div className="mb-8">
                <p className="mb-4">¡Conéctemos en las redes sociales!</p>
                <div className="flex space-x-6">
                    <a href="https://www.instagram.com/j04ko.t/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={32} className="text-gray-800 hover:text-blue-600 transition duration-300" />
                    </a>
                    <a href="https://github.com/JoaquinTorresV" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={32} className="text-gray-800 hover:text-blue-600 transition duration-300" />
                    </a>
                    <a href="joaquintorresv2005@gmail.com">
                        <FaEnvelope size={32} className="text-gray-800 hover:text-blue-600 transition duration-300" />
                    </a>
                </div>
            </div>

            {/* Formulario de contacto */}
            <div>
                <p className="mb-4">¿Tienes alguna pregunta o mensaje? ¡Escríbeme!</p>
                <form action="mailto:tu_email@example.com" method="post" encType="text/plain" className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium">Nombre</label>
                        <input type="text" id="name" name="name" className="mt-1 p-3 w-full border rounded-md shadow-sm" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">Correo electrónico</label>
                        <input type="email" id="email" name="email" className="mt-1 p-3 w-full border rounded-md shadow-sm" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium">Mensaje</label>
                        <textarea id="message" name="message" className="mt-1 p-3 w-full border rounded-md shadow-sm" rows={4} required></textarea>
                    </div>
                    <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">Enviar</button>
                </form>
            </div>
        </div>
    );
}
