import { BarChart, Layers, LayoutDashboard, FactoryIcon, FastForwardIcon, FanIcon } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Features</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. 
          Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
        </p>

        <div className="grid grid-cols-1 px-4 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
          <BarChart className="w-12 h-12 text-gray-300 mb-4 transform transition-transform duration-300 hover:scale-125 hover:text-blue-400" />
          <h3 className="text-xl font-semibold">Crafted for SaaS Business</h3>
            <p className="text-gray-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
          <Layers className="w-12 h-12 text-gray-300 mb-4 transform transition-transform duration-300 hover:scale-125 hover:text-green-400" />
          <h3 className="text-xl font-semibold">High-quality Design</h3>
            <p className="text-gray-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
          <LayoutDashboard className="w-12 h-12 text-gray-300 mb-4 transform transition-transform duration-300 hover:scale-125 hover:text-red-400" />
          <h3 className="text-xl font-semibold">UI Components and Pages</h3>
            <p className="text-gray-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
          <FactoryIcon className="w-12 h-12 text-gray-300 mb-4 transform transition-transform duration-300 hover:scale-125 hover:text-blue-400" />
          <h3 className="text-xl font-semibold">Crafted for SaaS Business</h3>
            <p className="text-gray-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col items-center text-center">
          <FastForwardIcon className="w-12 h-12 text-gray-300 mb-4 transform transition-transform duration-300 hover:scale-125 hover:text-green-400" />
          <h3 className="text-xl font-semibold">High-quality Design</h3>
            <p className="text-gray-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="flex flex-col items-center text-center">
          <FanIcon className="w-12 h-12 text-gray-300 mb-4 transform transition-transform duration-300 hover:scale-125 hover:text-red-400" />
          <h3 className="text-xl font-semibold">UI Components and Pages</h3>
            <p className="text-gray-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
