"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MessageCircle, Scissors } from "lucide-react";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredReverse, setIsHoveredReverse] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    if (selectedIndex !== null) {
      setIsImageLoading(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedIndex]);

  // Duplicated items for endless scrolling
  const baseItems = [
    { id: 1, src: "/ankara1.png", alt: "Modern Ankara Design", tag: "Ankara" },
    { id: 2, src: "/kampala1.png", alt: "Premium Kampala Design", tag: "Kampala" },
    { id: 3, src: "/ankara2.png", alt: "Vibrant Gown", tag: "Ankara" },
    { id: 4, src: "/kampala1.png", alt: "Chic Casual Wear", tag: "Kampala" },
    { id: 5, src: "/ankara3.png", alt: "Elegant Party Wear", tag: "Ankara" },
    { id: 6, src: "/ankara1.png", alt: "African Masterpiece", tag: "Ankara" },
  ];
  
  const items = [...baseItems, ...baseItems];

  const selectedImage = selectedIndex !== null ? baseItems[selectedIndex] : null;

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % baseItems.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex === 0 ? baseItems.length - 1 : selectedIndex - 1));
    }
  };

  return (
    <>
    <section id="gallery" className="py-20 relative overflow-hidden backdrop-blur-sm bg-brand-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Our Masterpieces</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of our finest designs blending traditional heritage with contemporary aesthetics.
          </p>
        </div>
      </div>

      <div className="relative w-full flex flex-col gap-12 overflow-hidden py-4">
        {/* Row 1 - Right to Left */}
        <div className="relative w-full flex overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none" />

          <div 
            className="flex gap-8 px-4 w-max animate-marquee"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
          >
            {items.map((item, index) => (
              <div 
                key={`row1-${item.id}-${index}`} 
                onClick={() => setSelectedIndex(index % baseItems.length)}
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
          </div>
        </div>

        {/* Row 2 - Left to Right */}
        <div className="relative w-full flex overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none" />

          <div 
            className="flex gap-8 px-4 w-max animate-marquee-reverse"
            onMouseEnter={() => setIsHoveredReverse(true)}
            onMouseLeave={() => setIsHoveredReverse(false)}
            style={{ animationPlayState: isHoveredReverse ? 'paused' : 'running' }}
          >
            {[...items].reverse().map((item, index) => (
              <div 
                key={`row2-${item.id}-${index}`} 
                onClick={() => setSelectedIndex(index % baseItems.length)}
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
          </div>
        </div>
      </div>

      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <button 
              onClick={() => setSelectedIndex(null)}
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
              <div className="relative aspect-[4/3] sm:aspect-video md:aspect-[3/4] lg:aspect-auto h-[70vh] lg:h-[80vh] w-full group">
                <Image 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  fill
                  className={`object-contain transition-opacity duration-300 z-10 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                  quality={100}
                  onLoad={() => setIsImageLoading(false)}
                />

                {isImageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center z-0 bg-black/50 backdrop-blur-sm">
                    <div className="relative flex items-center justify-center">
                      {/* Spinning pink ring */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="absolute w-20 h-20 rounded-full border-4 border-brand-pink/20 border-t-brand-pink shadow-[0_0_20px_rgba(219,39,119,0.5)]"
                      />
                      {/* Snipping scissors */}
                      <motion.div
                        animate={{ rotate: [-20, 20, -20] }}
                        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                      >
                        <Scissors className="w-8 h-8 text-brand-pink" />
                      </motion.div>
                    </div>
                  </div>
                )}
                
                <button 
                  onClick={showPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-black/80 hover:bg-brand-pink rounded-full backdrop-blur-sm transition-all z-10"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button 
                  onClick={showNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-black/80 hover:bg-brand-pink rounded-full backdrop-blur-sm transition-all z-10"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>
              <div className="absolute bottom-0 inset-x-0 z-20 p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-brand-pink text-white rounded-full text-xs font-bold tracking-wider uppercase mb-3">
                    {selectedImage.tag}
                  </span>
                  <h3 className="text-3xl font-extrabold text-white">{selectedImage.alt}</h3>
                </div>
                <a 
                  href={`https://wa.me/2348052024889?text=${encodeURIComponent(
                    `Hello CitadelGlamour! 👋\n\nI'm interested in ordering the following design:\n\n` +
                    `🎨 *Design:* ${selectedImage.alt}\n` +
                    `🏷️ *Style:* ${selectedImage.tag}\n` +
                    `🖼️ *Image:* ${typeof window !== 'undefined' ? window.location.origin : ''}${selectedImage.src}\n\n` +
                    `Please let me know the pricing and availability. Thank you!`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="whitespace-nowrap inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-transform hover:scale-105"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MessageCircle className="w-5 h-5" />
                  Order via WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
