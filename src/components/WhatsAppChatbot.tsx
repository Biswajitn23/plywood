import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const whatsappNumber = "917677181818";
    const whatsappMessage = "Hello! I'd like to inquire about your products.";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-32 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Open WhatsApp chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-32 left-6 z-40 w-80 max-w-[calc(100vw-32px)] bg-white rounded-lg shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Plywood Home</h3>
              <p className="text-xs text-green-100">Usually replies instantly</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-green-600 rounded-full p-1 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            <p className="text-gray-700 text-sm">
              👋 Hi there! How can we help you today? Feel free to ask us about our products, services, or anything else!
            </p>

            {/* Quick Message Button */}
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Start Chat
            </Button>

            {/* Contact Info */}
            <div className="border-t pt-4 text-xs text-gray-600 space-y-2">
              <p>📞 <span className="font-semibold">+91 7677181818</span></p>
              <p>⏰ <span>Mon - Sat: 9:00 AM - 6:00 PM</span></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChatbot;
