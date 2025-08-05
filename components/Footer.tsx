'use client';

import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid gap-6 md:grid-cols-3 text-sm">
        {/* Column 1: Logo/Info */}
        <div>
          <h3 className="text-lg font-bold text-black dark:text-white mb-2">
            Swann Plumbing & Heating
          </h3>
          <p>Reliable, professional plumbing & heating services based in the UK.</p>
          <div className="flex gap-4 mt-4 text-purple-700">
            <Facebook className="hover:text-purple-900 cursor-pointer" size={20} />
            <Instagram className="hover:text-purple-900 cursor-pointer" size={20} />
            <Mail className="hover:text-purple-900 cursor-pointer" size={20} />
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-semibold text-black dark:text-white mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-purple-700">Home</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-purple-700">Services</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-purple-700">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-purple-700">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="font-semibold text-black dark:text-white mb-2">Contact</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Phone size={16} /> <span>+44 123 456 7890</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> <span>info@swannplumbing.co.uk</span>
            </li>
            <li>Luton, UK</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-zinc-500 mt-8">
        © {new Date().getFullYear()} Swann Plumbing & Heating. All rights reserved.
      </div>
    </motion.footer>
  );
}
