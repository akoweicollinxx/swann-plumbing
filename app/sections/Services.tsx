'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function ServicesSection() {
  const services = [
    {
      img: '/radiator.png',
      title: 'Plumbing & Heating',
      desc: 'We offer comprehensive plumbing and heating services designed to keep your home running smoothly and efficiently — all year round.',
    },
    {
      img: '/pipe.png',
      title: 'Bathrooms Domestic & Commercial New Build',
      desc: 'Our solutions are built for durability, hygiene, and compliance with all current regulations.',
    },
    {
      img: '/air-source.png',
      title: 'ASHP Installation',
      desc: 'Whether you are upgrading your home, developing a new property, or improving commercial energy performance, we provide tailored ASHP solutions to meet your needs.',
    },
  ];

  return (
    <section className="py-20 dark:bg-black bg-white text-black dark:text-white text-center">
      {/* Animated Heading */}
      <motion.div
        className="max-w-3xl mx-auto px-4 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Reliable, Professional, Affordable.
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          High quality plumbing and heating services in Luton and surrounding areas,
          providing a friendly service for all your plumbing and heating needs.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="dark:bg-black bg-white shadow-lg dark:shadow-[0_10px_15px_rgba(255,255,255,0.5)] rounded-xl p-6 flex flex-col items-center text-center space-y-4"
          >
            <Image
              src={service.img}
              alt={service.title}
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
            <h3 className="font-semibold text-lg">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
