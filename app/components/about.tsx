export default function About() {
    return (
        <div id="about" className="p-8 flex justify-around items-start w-full max-w-screen-lg mx-auto gap-8">
            <div className="flex-1">
                <h1 className="text-3xl font-semibold mb-6">Sobre Mí</h1>
                <p className="text-lg">
                    <span>
                    ¡Hola! Soy Joaquin Torres, un estudiante de segundo año de la carrera de Ingeniería Civil Informática en la Universidad de Valparaíso.
                    </span>
                    <span> Mi interés por la tecnología es amplio, y me apasiona tanto el desarrollo frontend como el backend, así como la ciberseguridad.</span>
                    <span> Actualmente, estoy explorando un poco de todo para determinar qué área me apasiona más y en cuál quiero especializarme.</span>
                    <span> Llevo un año aprendiendo de manera autodidacta, complementando mis estudios en la universidad con recursos online, proyectos personales y práctica constante.</span>
                    <span> Mi objetivo es seguir creciendo como desarrollador, aplicando lo aprendido en proyectos reales, y eventualmente encontrar el campo</span>
                    <span> en el que pueda hacer la mayor diferencia. Estoy muy emocionado por lo que el futuro me depara.</span>
                </p>
            </div>
            <div className="flex-1">
                <h1 className="text-3xl font-semibold mb-6">Tecnologías</h1>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Frontend</h2>
                    <p className="mb-4">HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Bootstrap, Figma, Adobe XD</p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Backend</h2>
                    <p className="mb-4">Node.js, Express, MongoDB, Firebase, MySQL</p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Otros</h2>
                    <p className="mb-4">Git, GitHub, Terminal, Linux, Ciberseguridad, Python, Java</p>
                </div>
            </div>
        </div>
    );
}
