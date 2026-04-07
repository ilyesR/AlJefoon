"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="min-h-screen overflow-hidden bg-bone-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-matte-charcoal/40 z-10" />
          <Image
            src="/images/hero-marquee.jpg"
            alt="White Marquee Tent"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="relative z-10 text-center text-bone-white px-4 mt-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-light"
          >
            Events, Fabrication & Tensile Structures
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-prata text-5xl md:text-8xl lg:text-9xl tracking-tight max-w-6xl mx-auto leading-[0.9]"
          >
            YOUR VISION,
            <br />
            OUR EXECUTION.
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-bone-white z-10 animate-bounce"
        >
          <ChevronDown className="w-6 h-6 opacity-50" />
        </motion.div>
      </section>

      {/* Intro / Manifesto */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        <div className="md:w-1/3">
          <h2 className="font-prata text-3xl md:text-4xl">Space as a<br/>Statement.</h2>
        </div>
        <div className="md:w-2/3 text-lg md:text-xl font-light leading-relaxed text-matte-charcoal/80">
          <p>
            We design and deploy monumental structures and prestigious arrangements. 
            Stripped of the superfluous, we focus on material, form, and purpose to create immersive and timeless environments.
          </p>
        </div>
      </section>

      {/* Collection Gallery */}
      <section id="collection" className="py-24 bg-bleached-sand">
        <div className="px-6 md:px-12 mb-16 flex justify-between items-end">
          <h2 className="font-prata text-5xl md:text-7xl">Collection</h2>
          <span className="text-sm tracking-widest uppercase hidden md:block">Visual Catalog</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 px-6 md:px-12">
          {/* Item 1 */}
          <div className="group relative aspect-[4/5] overflow-hidden bg-matte-charcoal">
            <Image
              src="/images/cocktail-tables.jpg"
              alt="Cocktail Tables"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-charcoal/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-bone-white">
              <h3 className="font-prata text-base md:text-2xl mb-1 md:mb-2">Cocktail Tables</h3>
              <p className="text-xs md:text-sm font-light tracking-wider">Reception & Elegance</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="group relative aspect-[4/5] overflow-hidden bg-matte-charcoal">
            <Image
              src="/images/chiavari-chairs.jpg"
              alt="Chairs Banquet & Chiavari"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-charcoal/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-bone-white">
              <h3 className="font-prata text-base md:text-2xl mb-1 md:mb-2">Chiavari Chairs</h3>
              <p className="text-xs md:text-sm font-light tracking-wider">Banquet & Wedding</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="group relative aspect-[4/5] overflow-hidden bg-matte-charcoal">
            <Image
              src="/images/chafing-dishes.png"
              alt="Buffet Setup"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-charcoal/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-bone-white">
              <h3 className="font-prata text-base md:text-2xl mb-1 md:mb-2">Buffet Setup</h3>
              <p className="text-xs md:text-sm font-light tracking-wider">Professional Layout</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="group relative aspect-[4/5] overflow-hidden bg-matte-charcoal">
            <Image
              src="/images/crockery-cutlery.jpg"
              alt="Crockery & Cutlery"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-charcoal/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-bone-white">
              <h3 className="font-prata text-base md:text-2xl mb-1 md:mb-2">Crockery & Cutlery</h3>
              <p className="text-xs md:text-sm font-light tracking-wider">High Quality Details</p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="group relative aspect-[4/5] overflow-hidden bg-matte-charcoal">
            <Image
              src="/images/banquet-setup.png"
              alt="Banquet Setup"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-charcoal/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-bone-white">
              <h3 className="font-prata text-base md:text-2xl mb-1 md:mb-2">Banquet Setup</h3>
              <p className="text-xs md:text-sm font-light tracking-wider">Overview</p>
            </div>
          </div>

          {/* Item 6 */}
          <div className="group relative aspect-[4/5] overflow-hidden bg-matte-charcoal">
            <Image
              src="/images/Generated Image March 28, 2026 - 2_16PM.jpg"
              alt="Fabrication"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-charcoal/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-bone-white">
              <h3 className="font-prata text-base md:text-2xl mb-1 md:mb-2">Fabrication</h3>
              <p className="text-xs md:text-sm font-light tracking-wider">Custom Work</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Fabrication */}
      <section id="services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="font-prata text-5xl md:text-7xl mb-12">Services &<br/>Fabrication</h2>
            <div className="space-y-8">
              <div className="border-t border-matte-charcoal/20 pt-8">
                <h3 className="font-prata text-2xl mb-3">Custom Fabrication</h3>
                <p className="font-light text-matte-charcoal/70">Architectural metal or textile structures, designed as pure volumes.</p>
              </div>
              <div className="border-t border-matte-charcoal/20 pt-8">
                <h3 className="font-prata text-2xl mb-3">Arabic Tents (Majlis)</h3>
                <p className="font-light text-matte-charcoal/70">Traditional tents reinterpreted with colorful interior fabrics and radical geometric patterns.</p>
              </div>
              <div className="border-t border-matte-charcoal/20 pt-8">
                <h3 className="font-prata text-2xl mb-3">PVC / Marquee Tents</h3>
                <p className="font-light text-matte-charcoal/70">Large, modern white monolithic structures for exceptional outdoor events.</p>
              </div>
              <div className="border-t border-matte-charcoal/20 pt-8">
                <h3 className="font-prata text-2xl mb-3">Parking Shades</h3>
                <p className="font-light text-matte-charcoal/70">Tensile sails and parking structures with a minimalist and functional design.</p>
              </div>
              <div className="border-t border-matte-charcoal/20 pt-8">
                <h3 className="font-prata text-2xl mb-3">Red Carpet & Entrance</h3>
                <p className="font-light text-matte-charcoal/70">Prestigious entrance arrangements, creating a strong spatial transition.</p>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-[3/4] lg:aspect-auto h-full">
            <Image
              src="/images/arabic-majlis.jpg"
              alt="Arabic Majlis Tent"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Equipements */}
      <section className="py-32 bg-matte-charcoal text-bone-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-prata text-4xl md:text-5xl mb-16 text-center">Equipment & Accessories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-sm tracking-widest uppercase mb-6 text-burnt-clay">Furniture</h3>
              <ul className="space-y-4 font-light opacity-80">
                <li>Single Seat Sofas</li>
                <li>DJ Tables</li>
                <li>Contemporary Seating</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm tracking-widest uppercase mb-6 text-burnt-clay">Decoration</h3>
              <ul className="space-y-4 font-light opacity-80">
                <li>Decorative Backdrops</li>
                <li>Ice Box Containers</li>
                <li>Scenographic Elements</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm tracking-widest uppercase mb-6 text-burnt-clay">Logistics & Safety</h3>
              <ul className="space-y-4 font-light opacity-80">
                <li>Traffic Cones</li>
                <li>Police Barriers</li>
                <li>Crowd Control Stanchions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm tracking-widest uppercase mb-6 text-burnt-clay">Comfort</h3>
              <ul className="space-y-4 font-light opacity-80">
                <li>Outdoor Coolers</li>
                <li>Outdoor Burners</li>
                <li>Chafing Dishes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer & Contact */}
      <footer id="contact" className="py-24 px-6 md:px-12 bg-bone-white border-t border-matte-charcoal/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-prata text-5xl md:text-7xl mb-8">Let's Create<br/>Something<br/>Amazing.</h2>
            <p className="font-light text-xl mb-12">Contact us today for a free consultation.</p>
            
            <button className="group flex items-center gap-4 text-sm tracking-widest uppercase border border-matte-charcoal px-8 py-4 hover:bg-matte-charcoal hover:text-bone-white transition-colors">
              Request a quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          
          <div className="flex flex-col justify-end space-y-8 font-light text-lg">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 mt-1 text-burnt-clay" />
              <div>
                <p>058 1045322</p>
                <p>058 1045317</p>
                <p>050 5150434</p>
                <p>050 5150431</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-burnt-clay" />
              <a href="mailto:aljefoontens@gmail.com" className="hover:text-burnt-clay transition-colors">
                aljefoontens@gmail.com
              </a>
            </div>
            
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 mt-1 text-burnt-clay" />
              <p className="max-w-xs">
                Muweilah Commercial 15,<br/>
                Armada Building, Warehouse 6.
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-matte-charcoal/10 flex flex-col md:flex-row justify-between items-center text-sm font-light opacity-60">
          <p>© 2026 Al Jefoon Tents. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">Architectural & Radical Design</p>
        </div>
      </footer>
    </main>
  );
}
