// app/about/page.tsx

import React from 'react';

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold text-gray-900 dark:text-white text-center mb-6">
          About Swann Plumbing & Heating
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-10">
          Trusted plumbing and heating experts serving Luton and surrounding areas across the UK.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Who We Are
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Swann Plumbing and Heating is a family-run business based in Luton, United Kingdom, with over 15 years of experience in the plumbing and heating industry.
              Our mission is to deliver honest, reliable, and top-quality service to every home and business we work with.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              What We Do
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              From emergency plumbing repairs to full central heating installations, our team of certified engineers is here to help.
              We specialize in bathroom fittings, boiler servicing, radiator installations, smart thermostat setups, and more.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Why Choose Us
            </h2>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Fully insured and Gas Safe registered engineers</li>
              <li>24/7 emergency call-out service</li>
              <li>Competitive pricing with transparent quotes</li>
              <li>Over 100+ satisfied clients across Luton and Bedfordshire</li>
              <li>Clean, professional, and friendly service</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
