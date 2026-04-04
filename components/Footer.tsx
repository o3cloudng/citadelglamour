import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white hover:text-brand-pink transition-colors">
              Citadel<span className="text-brand-pink">Glamour</span>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Elevating African fashion with premium Ankara and Kampala designs tailored just for you.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#gallery" className="text-gray-400 hover:text-brand-pink transition-colors">Designs</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-brand-pink transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-brand-pink transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-brand-pink hover:bg-white/10 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-brand-pink hover:bg-white/10 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} CitadelGlamour. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-gray-600">Designed with passion.</p>
        </div>
      </div>
    </footer>
  );
}
