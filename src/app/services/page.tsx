"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

const servicesList = [
  { title: "Red Carpet Entrance", category: "Entrance", aspect: "aspect-[3/4]", img: "/images/red-carpet.png" },
  { title: "Parking Shades", category: "Structures", aspect: "aspect-[4/3]", img: "/images/parking-shades.png" },
  { title: "Chafing Dishes", category: "Catering", aspect: "aspect-[4/5]", img: "/images/chafing-dishes.png" },
  { title: "PVC Tents", category: "Tents", aspect: "aspect-square", img: "/images/pvc-tents.png" },
  { title: "Arabic Tents", category: "Tents", aspect: "aspect-[3/4]", img: "/images/arabic-tents.png" },
  { title: "Outdoor Coolers", category: "Equipment", aspect: "aspect-[4/3]", img: "/images/outdoor-coolers.png" },
  { title: "Traffic Cones", category: "Logistics", aspect: "aspect-square", img: "/images/traffic-cones.png" },
  { title: "Outdoor Burners", category: "Equipment", aspect: "aspect-[4/5]", img: "/images/outdoor-burners.png" },
  { title: "Police Barriers", category: "Security", aspect: "aspect-[3/4]", img: "/images/police-barriers.png" },
  { title: "Crowd Control Stanchions", category: "Security", aspect: "aspect-[4/3]", img: "/images/crowd-control.png" },
  { title: "Single Seat Sofas", category: "Furniture", aspect: "aspect-square", img: "/images/single-seat-sofas.png" },
  { title: "Marquee Tents", category: "Tents", aspect: "aspect-[4/5]", img: "/images/marquee-tents.png" },
  { title: "Ice Box Containers", category: "Catering", aspect: "aspect-[3/4]", img: "/images/icebox-containers.png" },
  { title: "DJ Tables", category: "Entertainment", aspect: "aspect-[4/3]", img: "/images/dj-tables.png" },
  { title: "Backdrops", category: "Decoration", aspect: "aspect-square", img: "/images/backdrops.png" },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-bone-white text-matte-charcoal">
      <Navbar />

      {/* Header Section */}
      <section className="pt-48 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-light opacity-60">
            Comprehensive Inventory
          </p>
          <h1 className="font-prata text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] mb-12">
            SERVICES &<br />
            EQUIPMENT.
          </h1>
          <p className="max-w-2xl text-lg md:text-xl font-light leading-relaxed opacity-80">
            From monumental marquee tents to meticulous crowd control stanchions, our architectural approach extends to every functional detail of your event. Discover our full range of professional equipment.
          </p>
        </motion.div>
      </section>

      {/* Aesthetic Masonry Gallery */}
      <section className="px-6 md:px-12 pb-32 max-w-[1400px] mx-auto">
        <div className="columns-2 md:columns-2 lg:columns-3 gap-3 md:gap-6 space-y-3 md:space-y-6">
          {servicesList.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden bg-matte-charcoal break-inside-avoid ${service.aspect}`}
            >
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-charcoal/90 via-matte-charcoal/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
              
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-bone-white">
                <p className="text-xs font-light tracking-[0.1em] md:tracking-[0.2em] uppercase mb-1 md:mb-2 opacity-70">
                  {service.category}
                </p>
                <h3 className="font-prata text-base md:text-2xl lg:text-3xl">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer & Contact */}
      <footer id="contact" className="py-24 px-6 md:px-12 bg-matte-charcoal text-bone-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-prata text-5xl md:text-7xl mb-8">Let's Create<br/>Something<br/>Amazing.</h2>
            <p className="font-light text-xl mb-12 opacity-80">Contact us today for a free consultation.</p>
            
            <button className="group flex items-center gap-4 text-sm tracking-widest uppercase border border-bone-white px-8 py-4 hover:bg-bone-white hover:text-matte-charcoal transition-colors">
              Request a quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          
          <div className="flex flex-col justify-end space-y-8 font-light text-lg opacity-80">
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
        
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-bone-white/20 flex flex-col md:flex-row justify-between items-center text-sm font-light opacity-60">
          <p>© 2026 Al Jefoon Tents. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">Architectural & Radical Design</p>
        </div>
      </footer>
    </main>
  );
}
