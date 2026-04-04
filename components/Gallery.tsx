import Image from "next/image";

export default function Gallery() {
  const items = [
    { id: 1, src: "/ankara-1.png", alt: "Modern Ankara Design", tag: "Ankara" },
    { id: 2, src: "/kampala-1.png", alt: "Premium Kampala Design", tag: "Kampala" },
    { id: 3, src: "/ankara-1.png", alt: "Elegant Party Wear", tag: "Ankara" },
    { id: 4, src: "/kampala-1.png", alt: "Chic Casual Wear", tag: "Kampala" },
  ];

  return (
    <section id="gallery" className="py-20 bg-brand-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Masterpieces</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of our finest designs blending traditional heritage with contemporary aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div key={item.id} className="relative group rounded-2xl overflow-hidden aspect-[3/4] bg-brand-black">
              <Image 
                src={item.src} 
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <span className="inline-block px-3 py-1 bg-brand-pink/20 text-brand-pink border border-brand-pink/50 rounded-full text-xs font-semibold tracking-wider uppercase mb-3">
                  {item.tag}
                </span>
                <h3 className="text-2xl font-bold text-white">{item.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
