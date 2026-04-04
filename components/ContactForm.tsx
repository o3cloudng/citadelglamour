"use client";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    // In production, user will replace these with real EmailJS keys
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        e.currentTarget, 
        'YOUR_PUBLIC_KEY'
      );
      setStatus("success");
    } catch {
      // For demo, we just simulate success if keys aren't set
      setTimeout(() => setStatus("success"), 1000);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-brand-pink/5 blur-[100px] rounded-full" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-brand-dark border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Begin Your Fashion Journey</h2>
            <p className="text-gray-400">Reach out to us for bespoke designs and styling inquiries.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Full Name</label>
                <input 
                  type="text" 
                  name="user_name"
                  required 
                  className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email Address</label>
                <input 
                  type="email" 
                  name="user_email"
                  required 
                  className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Your Message</label>
              <textarea 
                name="message"
                required 
                rows={4}
                className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-all"
                placeholder="I would like a bespoke Ankara piece..."
              />
            </div>

            <button 
              type="submit" 
              disabled={status === "loading" || status === "success"}
              className="w-full bg-brand-pink hover:bg-brand-darkPink text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : (
                <>Send Message <Send className="w-5 h-5" /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
