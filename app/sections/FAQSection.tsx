'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'Are You Gas Safe Registered?',
    answer:
      'Yes, you can also check TDC Plumbing & Heating registration on the Gas Safe website.',
  },
  {
    question: 'Do you have a call-out charge?',
    answer: 'We do not charge for call-outs under normal circumstances.',
  },
  {
    question: 'Why are my heating pipes noisy?',
    answer:
      'Noisy pipes can result from trapped air or high water pressure in the system.',
  },
  {
    question: 'Why is my radiator cold at the top and hot at the bottom?',
    answer:
      'This usually indicates trapped air in the radiator, which may need bleeding.',
  },
  {
    question: 'What Are Your Terms And Conditions?',
    answer:
      'Our terms and conditions can be found on our website or provided upon request.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full px-4 py-12 bg-white dark:bg-zinc-900">
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-black dark:text-white">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="border-b dark:border-zinc-700 pb-4"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="flex items-center justify-between w-full text-left focus:outline-none"
                  >
                    <span
                      className={`text-base font-medium ${
                        isOpen ? 'text-purple-700' : 'text-zinc-900 dark:text-zinc-200'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span className="ml-4 text-purple-700">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  {isOpen && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 text-sm text-zinc-700 dark:text-zinc-300"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Boiler Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="w-full"
        >
          <Image
            src="/boil.png"
            alt="Boiler"
            width={500}
            height={600}
            className="mx-auto max-w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
