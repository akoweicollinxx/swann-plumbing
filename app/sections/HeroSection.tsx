'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] dark:bg-black bg-white text-black dark:text-white overflow-hidden flex items-center py-12 md:py-0">
      {/* Animated Gradient curved background */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 15, -10, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        className="
          absolute
          w-[140vw] h-[120vh] md:w-[50vw] md:h-[130vh]
          bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600
          rounded-full opacity-80 z-0 pointer-events-none
          top-auto bottom-[-100%] left-1/2 -translate-x-1/2
          md:top-[-20%] md:bottom-auto md:right-[-30%] md:left-[auto] md:translate-x-0
        "
      />

      {/* Content */}
      <div className="z-10 max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="max-w-xl text-center md:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
            West London&apos;s Local Plumbing, Heating <br className="hidden md:block" /> & Gas Specialists.
          </h1>
          <div className="flex justify-center md:justify-start">
            <button className="bg-purple-700 hover:bg-purple-800 transition-colors px-6 py-3 rounded-md font-semibold text-white">
              Book An Appointment
            </button>
          </div>
        </motion.div>

        {/* Animated Van */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          className="mt-10 md:mt-0 z-10"
        >
          <Image src="/bus.png" alt="desc" width={300} height={850} />
        </motion.div>
      </div>
    </section>
  );
}
