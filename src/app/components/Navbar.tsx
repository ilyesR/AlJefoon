"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-12 flex justify-between items-center mix-blend-difference text-bone-white">
        <Link
          href="/"
          className="font-prata text-xl tracking-widest uppercase hover:opacity-70 transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          Al Jefoon
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-12 text-sm tracking-widest uppercase font-light">
          <Link href="/#collection" className="hover:opacity-50 transition-opacity">Collection</Link>
          <Link href="/services" className="hover:opacity-50 transition-opacity">Services</Link>
          <Link href="/#contact" className="hover:opacity-50 transition-opacity">Contact</Link>
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50"
          aria-label="Menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-7 h-[1.5px] bg-bone-white origin-center"
          />
          <motion.span
            animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.3 }}
            className="block w-7 h-[1.5px] bg-bone-white"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-7 h-[1.5px] bg-bone-white origin-center"
          />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-matte-charcoal flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-10">
              {[
                { label: "Collection", href: "/#collection" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/#contact" },
              ].map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-prata text-5xl text-bone-white hover:text-burnt-clay transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
