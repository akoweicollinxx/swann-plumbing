'use client';

import { ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  return (
    <>
      {/* Services Section */}
      <section className="py-20 dark:bg-black bg-white text-black dark:text-white text-center">
        {/* Heading */}
        <div className="max-w-3xl mx-auto px-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Reliable, Professional, Affordable.
          </h2>
          <p className="text-gray-600">
            High quality plumbing and heating services in Luton and surrounding areas,
            providing a friendly service for all your plumbing and heating needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="dark:bg-black bg-white shadow-lg dark:shadow-[0_10px_15px_rgba(255,255,255,0.5)] rounded-xl p-6 flex flex-col items-center text-center space-y-4">
            <img src="/radiator.PNG" alt="Boiler Installations" className="w-12 h-12" />
            <h3 className="font-semibold text-lg">Plumbing & Heating</h3>
            <p className="text-gray-600">
              We offer comprehensive plumbing and heating services designed to keep your home running smoothly and efficiently — all year round.
            </p>
          </div>

          {/* Card 2 */}
          <div className="dark:bg-black bg-white shadow-lg dark:shadow-[0_10px_15px_rgba(255,255,255,0.5)] rounded-xl p-6 flex flex-col items-center text-center space-y-4">
            <img src="/pipe.PNG" alt="Boiler Installations" className="w-12 h-12" />
            <h3 className="font-semibold text-lg">Bathrooms domestic & commercial New Build</h3>
            <p className="text-gray-600">
              Our solutions are built for durability, hygiene, and compliance with all current regulations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="dark:bg-black bg-white shadow-lg dark:shadow-[0_10px_15px_rgba(255,255,255,0.5)] rounded-xl p-6 flex flex-col items-center text-center space-y-4">
            <img src="/air-source.PNG" alt="Boiler Installations" className="w-12 h-12" />
            <h3 className="font-semibold text-lg">ASHP Installation</h3>
            <p className="text-gray-600">
              Whether you&apos;re upgrading your home, developing a new property, or improving commercial energy performance, we provide tailored ASHP solutions to meet your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative bg-cover bg-center py-20 px-4 text-white" style={{ backgroundImage: 'url("/stove.JPG")' }}>
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don&apos;t get left in the cold!</h2>
          <p className="text-gray-300 mb-6">
            We sometimes run special offers and discounts on boiler installations and checkups. <br />
            Book an appointment today to find out more.
          </p>
          <button
              type="submit"
              className="bg-purple-700 hover:bg-purple-800 cursor-pointer transition-colors text-white px-6 py-2 rounded-md"
            >
              Book An Appointment
            </button>
        </div>
      </section>
    </>
  );
}
