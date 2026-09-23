import React from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  ExternalLink,
  Sparkles,
  Compass
} from 'lucide-react';
import { 
  OWNER_PHONE, 
  OWNER_PHONE_DISPLAY, 
  PROPERTY_ADDRESS, 
  GOOGLE_MAPS_LINK, 
  openWhatsApp 
} from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 border-t border-stone-850 pt-16 pb-12 text-stone-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 font-bold shadow-md shadow-amber-500/20">
                <Building2 className="w-6 h-6 text-stone-950" />
              </div>
              <div>
                <span className="text-lg font-bold text-white font-['Playfair_Display',serif] block">
                  Krishna Residency
                </span>
                <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider">
                  Jhotwara • Jaipur
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Premium 3 &amp; 4 BHK residential apartments on Niwaru Road, Jhotwara, Jaipur. 100% Vastu Shastra compliant, JDA approved, and equipped with modern automated elevators and stilt parking.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-stone-900 border border-stone-800 text-[10px] text-emerald-400 font-semibold">
                JDA Approved
              </span>
              <span className="px-2.5 py-1 rounded bg-stone-900 border border-stone-800 text-[10px] text-amber-400 font-semibold">
                100% Vastu
              </span>
              <span className="px-2.5 py-1 rounded bg-stone-900 border border-stone-800 text-[10px] text-stone-300 font-semibold">
                80% Bank Loan
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Explore Project
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#units" className="hover:text-amber-400 transition-colors">3 BHK Royal Symphony</a>
              </li>
              <li>
                <a href="#units" className="hover:text-amber-400 transition-colors">4 BHK Imperial Grandeur</a>
              </li>
              <li>
                <a href="#units" className="hover:text-amber-400 transition-colors">Skyview Penthouse Suite</a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-amber-400 transition-colors">Vastu Guidelines &amp; Amenities</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">Photo Showcase Gallery</a>
              </li>
              <li>
                <a href="#budget-finder" className="hover:text-amber-400 transition-colors">Jaipur Budget Property Finder</a>
              </li>
            </ul>
          </div>

          {/* AI Showcase */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> AI Innovation Suite
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#ai-suite" className="hover:text-amber-400 transition-colors">24/7 Krishna AI Concierge</a>
              </li>
              <li>
                <a href="#ai-suite" className="hover:text-amber-400 transition-colors">AI Space &amp; Moodboard Visualizer</a>
              </li>
              <li>
                <a href="#ai-suite" className="hover:text-amber-400 transition-colors">Smart EMI &amp; Investment Advisor</a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">Google Map &amp; Commute Radii</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">WhatsApp Instant Query Desk</a>
              </li>
            </ul>
          </div>

          {/* Project Site Address & Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Site Address &amp; Hotline
            </h4>
            <div className="space-y-2 text-stone-300 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Saksham Builder and colonizer, Rajendra path, Niwaru Rd, Jhotwara, Jaipur, Rajasthan 302012 (Site: Plot 184–187, 21 South Colony)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${OWNER_PHONE}`} className="hover:text-amber-400 font-bold">
                  {OWNER_PHONE_DISPLAY}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <button
                  onClick={() => openWhatsApp('Hello Krishna Residency Team, I would like to inquire about your project.')}
                  className="text-emerald-400 hover:underline font-semibold cursor-pointer"
                >
                  Chat on WhatsApp: +91 89056 41356
                </button>
              </p>
            </div>

            <div className="pt-2">
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold"
              >
                <span>Google Maps Location</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <p>© {new Date().getFullYear()} Krishna Residency, Jhotwara, Jaipur. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-stone-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              RERA Compliant &amp; Bank Verified
            </span>
            <span className="text-stone-600">•</span>
            <span className="text-amber-400 font-medium">Digital Showcase Portfolio Edition</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
