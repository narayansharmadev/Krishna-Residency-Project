import React, { useState } from 'react';
import { 
  Building2, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Menu, 
  X, 
  Sparkles, 
  Compass, 
  SlidersHorizontal 
} from 'lucide-react';
import { OWNER_PHONE, OWNER_PHONE_DISPLAY, openWhatsApp } from '../utils/whatsapp';

interface HeaderProps {
  onOpenAiConcierge: () => void;
  onOpenBookVisit: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAiConcierge, onOpenBookVisit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Residences', href: '#units' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Vastu & Amenities', href: '#amenities' },
    { name: 'Location & Map', href: '#location' },
    { name: 'Budget Properties', href: '#budget-finder' },
    { name: 'AI Suite', href: '#ai-suite' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-stone-950/85 backdrop-blur-md border-b border-stone-800 transition-all">
      {/* Top micro bar for phone & address quick look */}
      <div className="bg-stone-900/90 border-b border-stone-800/80 text-xs text-stone-300 py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 font-semibold border border-amber-500/20 text-[10px]">
              JDA Approved & Vastu
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-stone-400">
              <MapPin className="w-3 h-3 text-amber-500" />
              Saksham Builder and colonizer, Rajendra Path, Niwaru Rd, Jhotwara, Jaipur
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a 
              href={`tel:${OWNER_PHONE}`} 
              className="flex items-center gap-1.5 text-stone-200 hover:text-amber-400 font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-500" />
              <span>{OWNER_PHONE_DISPLAY}</span>
            </a>
            <button
              onClick={() => openWhatsApp('Hello Krishna Residency Team, I would like to inquire about unit availability and pricing.')}
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              WhatsApp Desk Active
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 font-bold shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Building2 className="w-6 h-6 text-stone-950" />
          </div>
          <div>
            <div className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-['Playfair_Display',serif]">
              Krishna Residency
            </div>
            <div className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold">
              By Saksham Builder &amp; Colonizer • Jhotwara
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-stone-300 hover:text-amber-400 transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenAiConcierge}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 text-xs font-semibold tracking-wide transition-all cursor-pointer shadow-sm hover:border-amber-400"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Krishna AI Concierge</span>
          </button>

          <button
            onClick={() => openWhatsApp('Hello! I want to inquire about Krishna Residency Jhotwara and schedule a site visit.')}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold tracking-wide shadow-md shadow-emerald-900/30 transition-all cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Us</span>
          </button>

          <button
            onClick={onOpenBookVisit}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 text-xs font-bold tracking-wide shadow-md shadow-amber-500/20 transition-all cursor-pointer"
          >
            Book Site Visit
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenAiConcierge}
            className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs"
            title="AI Concierge"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-950 border-b border-stone-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-300 hover:text-amber-400 py-2 text-sm font-medium border-b border-stone-900"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiConcierge();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold"
            >
              <Sparkles className="w-4 h-4" />
              <span>AI Concierge</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp('Hello! I would like to inquire about Krishna Residency on Niwaru Road.');
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBookVisit();
            }}
            className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold shadow-md"
          >
            Schedule Free Site Visit
          </button>
        </div>
      )}
    </header>
  );
};
