import React from 'react';

export default function LocationMap() {
  return (
    <section id="location" className="py-20 relative overflow-hidden backdrop-blur-sm bg-brand-dark/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Visit Our Store</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Find us in Alogi, Abeokuta for a personalized fitting and tailoring experience.
          </p>
        </div>
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(219,39,119,0.3)] relative border border-white/10 group">
          <iframe
            src="https://maps.google.com/maps?q=Alogi,%20Abeokuta&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10"></div>
        </div>
      </div>
    </section>
  );
}
