"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const heroImages = [
  "/ankara1.png",
  "/kampala1.png",
  "/ankara2.png"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative pt-20 pb-32 flex items-center justify-center min-h-[85vh] overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            alt="Hero Background"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-[50%_35%]"
          />
        </AnimatePresence>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/60 to-brand-black" />
        
        {/* Accents */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-pink/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-brand-darkPink/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 mt-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-xl"
        >
          Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-purple-400">African Elegance</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-3xl text-xl md:text-2xl text-gray-200 font-light drop-shadow-md"
        >
          Premium Ankara and Kampala tailored to perfection for the modern fashion connoisseur. Experience true craftsmanship.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center pt-8"
        >
          <Link 
            href="#gallery" 
            className="group flex items-center gap-2 bg-brand-pink text-white hover:bg-brand-darkPink px-10 py-5 rounded-full text-xl font-bold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(219,39,119,0.5)]"
          >
            Explore Designs <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
