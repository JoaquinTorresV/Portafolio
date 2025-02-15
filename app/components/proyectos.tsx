import Image from "next/image";

export default function Proyectos() {
  return (
    <div id="proyectos" className="p-9 bg-gray-100">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-center text-black">Mis Proyectos</h1>
        <p className="mb-6 text-center text-gray-700 max-w-2xl mx-auto">
          Estos son los proyectos que he realizado. ¡Pronto los mostraré aquí!
        </p>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Proyecto 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all">
            <div className="h-48 bg-gray-300 mb-4 rounded-lg">
              <Image
                src="/path/to/your-image.jpg" // Aquí debes agregar las imágenes que se usarán
                alt="Imagen Proyecto 1"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold text-black">Proyecto 1</h2>
            <p className="text-gray-600 mt-2">Descripción breve sobre el proyecto 1.</p>
          </div>

          {/* Proyecto 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all">
            <div className="h-48 bg-gray-300 mb-4 rounded-lg">
              <Image
                src="/path/to/your-image.jpg"
                alt="Imagen Proyecto 2"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold text-black">Proyecto 2</h2>
            <p className="text-gray-600 mt-2">Descripción breve sobre el proyecto 2.</p>
          </div>

          {/* Proyecto 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all">
            <div className="h-48 bg-gray-300 mb-4 rounded-lg">
              <Image
                src="/path/to/your-image.jpg"
                alt="Imagen Proyecto 3"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold text-black">Proyecto 3</h2>
            <p className="text-gray-600 mt-2">Descripción breve sobre el proyecto 3.</p>
          </div>

          {/* Proyecto 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all">
            <div className="h-48 bg-gray-300 mb-4 rounded-lg">
              <Image
                src="/path/to/your-image.jpg"
                alt="Imagen Proyecto 4"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold text-black">Proyecto 4</h2>
            <p className="text-gray-600 mt-2">Descripción breve sobre el proyecto 4.</p>
          </div>

          {/* Proyecto 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all">
            <div className="h-48 bg-gray-300 mb-4 rounded-lg">
              <Image
                src="/path/to/your-image.jpg"
                alt="Imagen Proyecto 5"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold text-black">Proyecto 5</h2>
            <p className="text-gray-600 mt-2">Descripción breve sobre el proyecto 5.</p>
          </div>

          {/* Proyecto 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all">
            <div className="h-48 bg-gray-300 mb-4 rounded-lg">
              <Image
                src="/path/to/your-image.jpg"
                alt="Imagen Proyecto 6"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold text-black">Proyecto 6</h2>
            <p className="text-gray-600 mt-2">Descripción breve sobre el proyecto 6.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
