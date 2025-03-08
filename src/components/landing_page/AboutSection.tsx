// components/landing_page/AboutSection.tsx
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image */}
          <div className="flex justify-center">
            <Image
              src="/business-colleagues-watching-content-laptop.jpg" // Replace with your image path
              alt="About Us"
              width={500}
              height={350}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-gray-400 mb-6">
              At GetSkills, we are passionate about empowering learners to achieve their goals. Our mission is to provide high-quality, accessible education to everyone, everywhere.
            </p>
            <p className="text-gray-400 mb-6">
              Whether you are looking to advance your career, learn a new skill, or explore your passion, our expertly crafted courses are designed to help you succeed.
            </p>
            <button className="bg-blue-600 px-6 py-3 rounded text-lg hover:bg-blue-700 transition-colors">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}