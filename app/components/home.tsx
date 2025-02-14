import Image from "next/image";

export default function HomePage() {
    return (
        <div className="flex justify-evenly items-center p-9 h-screen w-full">
            <div className="h-96 w-96 p-5 flex flex-col justify-center items-start">
                <p className="my-8 flex flex-col items-start text-lg">
                    <span className="text-4xl mb-4">👋</span>
                    <span>¡Hola! Soy Joaquin Torres,</span>
                    <span>estudiante de <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-xl font-semibold">Ingeniería Civil en Informática</span>.</span>
                    <span>Apasionado por la programación</span>
                    <span>y el desarrollo de soluciones tecnológicas.</span>
                </p>
            </div>
            <div className="object-center h-96 w-96 p-5"> 
                <Image 
                    src="/img1.jpg"  // Asegúrate de que la ruta sea correcta
                    alt="perfil"
                    width={300}
                    height={300}
                    className="rounded-full border-4 border-black" // Borde redondeado y negro
                />
            </div>
        </div>
    );
}
