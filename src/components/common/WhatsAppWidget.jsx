import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppWidget = () => {
  const phoneNumber = "2347089057979";
  const defaultMessage = encodeURIComponent(
    "Hello Viva Constructs Limited! I would like to request a quotation / consultation for a project."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Viva Constructs Limited"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1EBE57] text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center border-2 border-white group"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#25D366]" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold font-['Montserrat'] pl-0 group-hover:pl-2">
        Chat on WhatsApp
      </span>
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-ping" />
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
    </a>
  );
};
