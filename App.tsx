
import React from 'react';

// Reusable component for menu items to keep the code clean
interface MenuItemProps {
  name: string;
  description: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
    <h3 className="text-xl font-bold text-amber-500 mb-2">{name}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 sm:p-6 lg:p-8">
      <main className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800/50 rounded-2xl shadow-2xl overflow-hidden">
        <header className="bg-cover bg-center h-48" style={{ backgroundImage: "url('https://picsum.photos/1200/400?grayscale&blur=2')" }}>
          <div className="flex items-center justify-center h-full w-full bg-black bg-opacity-50">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                <span className="text-amber-400">Big Diddy</span> Burger
              </h1>
              <p className="text-lg text-gray-300 mt-2">Maqueta Estática del Menú</p>
            </div>
          </div>
        </header>

        <div className="p-6 sm:p-10">
          <section id="descripcion" className="mb-12">
            <h2 className="text-3xl font-bold border-b-4 border-amber-400 pb-2 mb-6 text-gray-800 dark:text-white">
              🍔 Descripción del Proyecto
            </h2>
            <p className="text-lg leading-relaxed">
              Este proyecto es una maqueta estática (mockup) desarrollada con el objetivo de presentar el diseño de un menú para la hamburguesería ficticia <strong className="font-semibold text-amber-500">"Big Diddy Burger"</strong>. La página ha sido creada utilizando tecnologías web modernas para asegurar una presentación visualmente atractiva y una estructura de código limpia y mantenible.
            </p>
          </section>

          <section id="menu" className="mb-12">
            <h2 className="text-3xl font-bold border-b-4 border-amber-400 pb-2 mb-8 text-gray-800 dark:text-white">
              📜 Nuestro Menú
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <MenuItem
                name="The Diddy Classic"
                description="Hamburguesa de res con queso cheddar, lechuga, tomate, pepinillos y la salsa secreta “Diddy Sauce”."
              />
              <MenuItem
                name="Smokehouse Beast"
                description="Doble carne, tocino ahumado, cebolla caramelizada y salsa BBQ artesanal."
              />
              <MenuItem
                name="Spicy Tex-Mex"
                description="Hamburguesa picante con jalapeños, queso pepper jack y guacamole fresco."
              />
              <MenuItem
                name="Big Veggie Bang"
                description="Opción vegetariana con hamburguesa de garbanzos, hummus y vegetales asados."
              />
              <MenuItem
                name="Sweet Bacon Melt"
                description="Pan brioche con carne, tocino glaseado con miel y queso suizo derretido."
              />
            </div>
          </section>

          <section id="extras" className="mb-12">
            <h2 className="text-3xl font-bold border-b-4 border-amber-400 pb-2 mb-6 text-gray-800 dark:text-white">
             🍟 Extras y Bebidas
            </h2>
            <ul className="space-y-4 text-lg list-disc list-inside">
              <li>Papas fritas clásicas o con queso cheddar y tocino.</li>
              <li>Batidos artesanales de vainilla, chocolate o fresa.</li>
              <li>Limonadas naturales y cerveza artesanal local.</li>
            </ul>
          </section>

          <section id="tecnologias">
            <h2 className="text-3xl font-bold border-b-4 border-amber-400 pb-2 mb-6 text-gray-800 dark:text-white">
              💻 Tecnologías Utilizadas
            </h2>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-sm font-medium me-2 px-3 py-1.5 rounded-full">React</span>
              <span className="bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300 text-sm font-medium me-2 px-3 py-1.5 rounded-full">Tailwind CSS</span>
              <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 text-sm font-medium me-2 px-3 py-1.5 rounded-full">TypeScript</span>
              <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-sm font-medium me-2 px-3 py-1.5 rounded-full">HTML5</span>
            </div>
          </section>
        </div>

        <footer className="text-center py-6 bg-gray-200 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">&copy; 2024 Big Diddy Burger. Todos los derechos reservados (ficticios).</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
