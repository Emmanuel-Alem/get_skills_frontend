// components/landing_page/OurTeamSection.tsx
import Image from "next/image";

export default function OurTeamSection() {
  return (
    <section id="team" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 font-londrina">Meet With Our Creative Dedicated Team</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
        </p>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="/Wondwosen Asegid.jpg" // Replace with your image path
              alt="Olivia Andrium"
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Wondwosen Asegid</h3>
            <p className="text-gray-400">Project Manager</p>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="/Wondwosen Asegid.jpg" // Replace with your image path
              alt="Jemse Kemorun"
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Wondwosen Asegid</h3>
            <p className="text-gray-400">Frontend Developer</p>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center">
            <Image
              src="/Wondwosen Asegid.jpg" // Replace with your image path
              alt="Avi Pestarica"
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Wondwosen Asegid</h3>
            <p className="text-gray-400">Product Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
}