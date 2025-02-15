import { Montserrat } from "next/font/google";
import Image from "next/image";

// Configurar Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat", // Definir variable para usar en Tailwind
});

export default function HomePage() {
  return (
    <div className={`${montserrat.variable} flex flex-col md:flex-row justify-center items-center p-8 h-screen w-full text-gray-900`}>
      {/* Texto de presentación */}
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-lg">
        <p className="text-5xl md:text-6xl font-bold mb-4">👋 ¡Hola!</p>
        <h1 className="text-2xl md:text-3xl font-semibold leading-relaxed">
          Soy{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
            Joaquin Torres
          </span>, estudiante de{" "}
          <span className="text-blue-600">Ingeniería Civil en Informática</span>.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Apasionado por la programación y el desarrollo de soluciones tecnológicas.
        </p>
      </div>

      {/* Imagen de perfil */}
      <div className="mt-8 md:mt-0 md:ml-12 flex justify-center">
        <Image
          src="/img1.jpg" // Asegúrate de que la ruta sea correcta
          alt="Perfil de Joaquin Torres"
          width={280}
          height={280}
          className="rounded-full border-4 border-gray-800 shadow-lg"
        />
      </div>
    </div>
  );
}
