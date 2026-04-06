"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Scissors } from "lucide-react";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the loader after the page finishes initial client-side hydration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
           initial={{ opacity: 1 }}
           exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
           className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-black"
        >
          <div className="relative">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { repeat: Infinity, duration: 2, ease: "linear" },
                scale: { repeat: Infinity, duration: 1, ease: "easeInOut" }
              }}
              className="w-24 h-24 rounded-full border-4 border-brand-pink/20 border-t-brand-pink shadow-[0_0_20px_rgba(219,39,119,0.5)]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: [-20, 20, -20] }}
                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
              >
                <Scissors className="w-10 h-10 text-brand-pink" />
              </motion.div>
            </div>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-2xl font-bold tracking-widest text-white"
          >
            Citadel<span className="text-brand-pink">Glamour</span>
          </motion.h2>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
