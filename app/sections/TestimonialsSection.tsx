'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    quote: `The team was on time, tidy, and really knowledgeable — they helped us choose the right fixtures and got the job done ahead of schedule. Would absolutely recommend them to anyone looking for quality plumbing work.`,
    author: 'Jill Charman',
  },
  {
    quote: `From the initial consultation to the final handover, the service was outstanding. The system works flawlessly, and we’re already seeing savings on our energy bills. Great communication throughout the whole process!`,
    author: 'Mark Davies',
  },
  {
    quote: `Excellent service from start to finish. They explained everything clearly, and the pricing was fair. Will definitely use again.`,
    author: 'Angela Brady',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-200 dark:bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-2xl text-black dark:text-white md:text-3xl font-semibold mb-4 leading-snug">
            We take pride in long lasting <br /> relationships with customers
          </h2>
          <p className="text-black dark:text-white mb-6">
            See what our clients are saying on Google & Which Trusted Traders
          </p>
          <div className="flex items-center space-x-6">
            {/* Which */}
            <div className="flex items-center space-x-2">
              <img src="/Google.webp" alt="Which logo" className="h-6" />
              <div>
                <p className="text-yellow-400">★★★★★</p>
                <p className="text-sm text-gray-400">71 Reviews</p>
              </div>
            </div>
            {/* Google */}
            <div className="flex items-center space-x-2">
              <img src="/Google.webp" alt="Google logo" className="h-6" />
              <div>
                <p className="text-yellow-400">★★★★★</p>
                <p className="text-sm text-gray-400">78 Reviews</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Carousel with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="w-full"
        >
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="w-full"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative bg-purple-700 text-white rounded-2xl p-8 sm:p-10 min-h-[260px] shadow-lg">
                  <span className="absolute text-5xl opacity-30 top-4 left-6">“</span>
                  <p className="text-base sm:text-lg leading-relaxed mb-6 mt-2 sm:mt-6 z-10 relative">
                    {t.quote}
                  </p>
                  <div className="text-right text-sm italic mt-4 z-10 relative">
                    — {t.author}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
