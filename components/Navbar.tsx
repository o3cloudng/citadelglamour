"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-brand-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image src="/new_logo_cropped.jpeg" alt="CitadelGlamour Logo" width={44} height={44} className="rounded-full border border-brand-pink/40 shadow-[0_0_10px_rgba(219,39,119,0.5)] object-cover" />
              <span className="text-2xl font-bold tracking-tight text-white hidden sm:block">
                Citadel<span className="text-brand-pink">Glamour</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#gallery" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Designs
              </Link>
              <Link href="#location" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Location
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
              <Link href="#contact" className="bg-brand-pink text-white hover:bg-brand-darkPink px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_15px_rgba(219,39,119,0.5)]">
                Hire Us
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-dark border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#gallery" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Designs
            </Link>
            <Link href="#location" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Location
            </Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="text-brand-pink hover:text-brand-darkPink block px-3 py-2 rounded-md text-base font-bold">
              Hire Us
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
