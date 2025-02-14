import Image from "next/image";

export default function Proyectos() {
    return (
        <div id="proyectos" className="p-9 ">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl font-semibold mb-6 text-black">Mis Proyectos</h1>
                <p className="mb-6 text-gray-700">Estos son los proyectos que he realizado. ¡Pronto los mostraré aquí!</p>
                
                {/* Grid de proyectos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Proyecto 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                        <div className="h-48 bg-gray-300 mb-4 rounded-lg"></div> {/* Ajusta la altura */}
                        <h2 className="text-xl font-semibold text-black">Proyecto 1</h2>
                        <p className="text-gray-600">Descripción del proyecto 1.</p>
                    </div>

                    {/* Proyecto 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                        <div className="h-48 bg-gray-300 mb-4 rounded-lg"></div> {/* Ajusta la altura */}
                        <h2 className="text-xl font-semibold text-black">Proyecto 2</h2>
                        <p className="text-gray-600">Descripción del proyecto 2.</p>
                    </div>

                    {/* Proyecto 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                        <div className="h-48 bg-gray-300 mb-4 rounded-lg"></div> {/* Ajusta la altura */}
                        <h2 className="text-xl font-semibold text-black">Proyecto 3</h2>
                        <p className="text-gray-600">Descripción del proyecto 3.</p>
                    </div>

                    {/* Proyecto 4 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                        <div className="h-48 bg-gray-300 mb-4 rounded-lg"></div> {/* Ajusta la altura */}
                        <h2 className="text-xl font-semibold text-black">Proyecto 4</h2>
                        <p className="text-gray-600">Descripción del proyecto 4.</p>
                    </div>

                    {/* Proyecto 5 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                        <div className="h-48 bg-gray-300 mb-4 rounded-lg"></div> {/* Ajusta la altura */}
                        <h2 className="text-xl font-semibold text-black">Proyecto 5</h2>
                        <p className="text-gray-600">Descripción del proyecto 5.</p>
                    </div>

                    {/* Proyecto 6 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                        <div className="h-48 bg-gray-300 mb-4 rounded-lg"></div> {/* Ajusta la altura */}
                        <h2 className="text-xl font-semibold text-black">Proyecto 6</h2>
                        <p className="text-gray-600">Descripción del proyecto 6.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
