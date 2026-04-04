"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<null | {id: number, src: string, alt: string, tag: string}>(null);

  // Duplicated items for endless scrolling
  const baseItems = [
    { id: 1, src: "/ankara-1.png", alt: "Modern Ankara Design", tag: "Ankara" },
    { id: 2, src: "/kampala-1.png", alt: "Premium Kampala Design", tag: "Kampala" },
    { id: 3, src: "/ankara_pink.png", alt: "Vibrant Pink Gown", tag: "Ankara" },
    { id: 4, src: "/kampala-1.png", alt: "Chic Casual Wear", tag: "Kampala" },
    { id: 5, src: "/ankara-1.png", alt: "Elegant Party Wear", tag: "Ankara" },
    { id: 6, src: "/ankara_pink.png", alt: "Pink Masterpiece", tag: "Ankara" },
  ];
  
  const items = [...baseItems, ...baseItems];

  return (
    <section id="gallery" className="py-20 relative overflow-hidden backdrop-blur-sm bg-brand-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Our Masterpieces</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of our finest designs blending traditional heritage with contemporary aesthetics.
          </p>
        </div>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Left/Right Fade */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex gap-8 px-4"
          whileHover={{ animationPlayState: "paused" }}
          animate={{ x: [0, "-50%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        >
          {items.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              onClick={() => setSelectedImage(item)}
              className="relative flex-none w-[300px] sm:w-[400px] aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group bg-brand-black shadow-lg hover:shadow-brand-pink/20 transition-all"
            >
              <Image 
                src={item.src} 
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <span className="inline-block px-3 py-1 bg-brand-pink/20 text-brand-pink border border-brand-pink/50 rounded-full text-xs font-semibold tracking-wider uppercase mb-2">
                  {item.tag}
                </span>
                <h3 className="text-xl font-bold text-white">{item.alt}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-white/10 rounded-full transition-colors z-50"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-brand-dark"
            >
              <div className="relative aspect-[4/3] sm:aspect-video md:aspect-[3/4] lg:aspect-auto h-[70vh] lg:h-[80vh] w-full">
                <Image 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  fill
                  className="object-contain bg-black/50"
                  quality={100}
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                <span className="inline-block px-4 py-1.5 bg-brand-pink text-white rounded-full text-xs font-bold tracking-wider uppercase mb-3">
                  {selectedImage.tag}
                </span>
                <h3 className="text-3xl font-extrabold text-white">{selectedImage.alt}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
