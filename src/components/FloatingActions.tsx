import React, { useState, useEffect } from 'react';
import { MessageSquare, Sparkles, ArrowUp, Phone } from 'lucide-react';
import { OWNER_PHONE, OWNER_PHONE_DISPLAY, openWhatsApp } from '../utils/whatsapp';

interface FloatingActionsProps {
  onOpenAiConcierge: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenAiConcierge }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700 shadow-xl transition-all cursor-pointer hover:-translate-y-0.5"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* AI Concierge Trigger */}
      <button
        onClick={onOpenAiConcierge}
        className="group flex items-center gap-2 pl-3.5 pr-4 py-2.5 rounded-full bg-stone-900/90 hover:bg-stone-850 border border-amber-500/40 text-amber-300 shadow-xl shadow-black/50 transition-all cursor-pointer hover:scale-105"
        title="Chat with Krishna AI"
      >
        <div className="w-7 h-7 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
          <Sparkles className="w-4 h-4 animate-pulse" />
        </div>
        <div className="text-left hidden sm:block">
          <div className="text-[11px] font-bold text-white leading-tight">Ask Krishna AI</div>
          <div className="text-[9px] text-amber-400/90 leading-tight">24/7 Concierge</div>
        </div>
      </button>

      {/* Primary WhatsApp Quick Chat Button */}
      <button
        onClick={() => openWhatsApp('Hello Krishna Residency Team! I am browsing your website and would like immediate assistance.')}
        className="group flex items-center gap-2 pl-3.5 pr-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-2xl shadow-emerald-950/80 transition-all cursor-pointer hover:scale-105"
        title="WhatsApp +91 89046 41356"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 ring-2 ring-emerald-600 animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 ring-2 ring-emerald-600"></span>
        </div>
        <div className="text-left">
          <div className="text-xs font-bold leading-tight">WhatsApp Us</div>
          <div className="text-[9px] text-emerald-100 font-medium leading-tight">8904641356</div>
        </div>
      </button>
    </div>
  );
};
