import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  // Using the requested number
  const phoneNumber = "2348052024889"; 
  const defaultMessage = "Hello CitadelGlamour! I would like to inquire about a custom design.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a 
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      {/* Tooltip */}
      <span className="absolute right-16 bg-white text-gray-900 text-sm px-3 py-1.5 rounded-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
        Chat with us!
      </span>
    </a>
  );
}
