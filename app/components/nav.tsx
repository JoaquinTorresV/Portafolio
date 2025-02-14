import Image from "next/image";
export default function Nav() {
    return (
        <ul className="flex justify-around items-center p-8 bg-gray-400 bg-opacity-50 text-black border-b-2 border-black fixed top-0 left-0 w-full z-50">
            <li className="ml-8">
                <Image src="/perfil.jpg" alt="logo" width={150} height={200} className="ml-8 rounded-full border-2 border-white " />
            </li>
            <div className="flex space-x-6">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="#proyectos">Proyectos</a>
            </li>
            <li>
                <a href="#about">Sobre Mi</a>
            </li>
            <li>
                <a href="#contact">Contacto</a>
            </li>
            </div>
        </ul> 
    );
}
