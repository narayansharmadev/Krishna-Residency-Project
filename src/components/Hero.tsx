import React, { useState } from 'react';
import { 
  Building, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Send,
  Compass,
  ShieldCheck,
  Percent
} from 'lucide-react';
import { OWNER_PHONE, OWNER_PHONE_DISPLAY, openWhatsApp, GOOGLE_MAPS_LINK } from '../utils/whatsapp';

interface HeroProps {
  onOpenAiConcierge: () => void;
  onOpenBookVisit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAiConcierge, onOpenBookVisit }) => {
  const [quickQuery, setQuickQuery] = useState('');

  const handleQuickSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const query = quickQuery.trim() || 'Hello! I am inquiring about Krishna Residency apartments on Niwaru Road, Jhotwara.';
    openWhatsApp(`Inquiry from Website:\n"${query}"\nPlease provide floor plans and pricing details.`);
    setQuickQuery('');
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-stone-950 pt-8 pb-16">
      {/* Background Image with Architectural Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Krishna Residency Jhotwara Jaipur Elevation"
          className="w-full h-full object-cover object-center brightness-40 scale-105 transform motion-safe:animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
        {/* Left Column: Core Value Proposition */}
        <div className="flex-1 space-y-6 max-w-2xl">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide backdrop-blur-sm shadow-inner">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span>JDA Approved • Ready & Near Possession Units</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-['Playfair_Display',serif]">
            Where Royalty Meets Modern Luxury in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">Jhotwara, Jaipur</span>
          </h1>

          {/* Address and Description */}
          <div className="space-y-3">
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
              Experience thoughtfully designed <strong>3 &amp; 4 BHK Royal Residences</strong> crafted with 100% Vastu compliance, high-speed automated elevators, covered stilt parking, and private sunrise balconies.
            </p>

            <a 
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-amber-400/90 hover:text-amber-300 bg-stone-900/80 px-3.5 py-2 rounded-xl border border-stone-800 backdrop-blur-sm transition-all hover:border-amber-500/40 group"
            >
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
              <span>Saksham Builder and colonizer, Rajendra Path, Niwaru Rd, Jhotwara, Jaipur</span>
              <span className="underline ml-1 font-semibold text-xs text-amber-300">View Pin on Google Maps &rarr;</span>
            </a>
          </div>

          {/* Quick Metrics Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-stone-900/80 border border-stone-800/80 p-3 rounded-xl backdrop-blur-sm text-left">
              <div className="text-xs text-stone-400">Starting Price</div>
              <div className="text-lg font-bold text-amber-400 font-['Playfair_Display',serif]">₹58.50 Lakhs</div>
              <div className="text-[10px] text-stone-400">3 BHK Luxury</div>
            </div>
            <div className="bg-stone-900/80 border border-stone-800/80 p-3 rounded-xl backdrop-blur-sm text-left">
              <div className="text-xs text-stone-400">Unit Sizes</div>
              <div className="text-lg font-bold text-white">1,550 – 2,850</div>
              <div className="text-[10px] text-stone-400">Super Built-up Sq.Ft</div>
            </div>
            <div className="bg-stone-900/80 border border-stone-800/80 p-3 rounded-xl backdrop-blur-sm text-left">
              <div className="text-xs text-stone-400">Vastu Science</div>
              <div className="text-lg font-bold text-emerald-400 flex items-center gap-1">
                <Compass className="w-4 h-4" /> 100%
              </div>
              <div className="text-[10px] text-stone-400">North-East Facing</div>
            </div>
            <div className="bg-stone-900/80 border border-stone-800/80 p-3 rounded-xl backdrop-blur-sm text-left">
              <div className="text-xs text-stone-400">Bank Financing</div>
              <div className="text-lg font-bold text-white flex items-center gap-1">
                <Percent className="w-4 h-4 text-amber-400" /> Up to 85%
              </div>
              <div className="text-[10px] text-stone-400">SBI / HDFC / ICICI</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
            <button
              onClick={() => openWhatsApp('Hello! I would like to inquire about Krishna Residency on Niwaru Road and see the available 3 & 4 BHK units.')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-xl shadow-emerald-900/30 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </button>

            <a
              href={`tel:${OWNER_PHONE}`}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 font-medium text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call: {OWNER_PHONE_DISPLAY}</span>
            </a>

            <button
              onClick={onOpenAiConcierge}
              className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-semibold text-sm transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Ask Krishna AI</span>
            </button>
          </div>
        </div>

        {/* Right Column: Direct Quick Inquiry Card with WhatsApp Send */}
        <div className="w-full lg:w-[420px] shrink-0">
          <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-3 border-b border-stone-800 mb-4">
              <div>
                <h2 className="text-base font-bold text-white flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  Quick WhatsApp Inquiry
                </h2>
                <p className="text-xs text-stone-400">Direct response from Krishna Residency Desk</p>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Online
              </span>
            </div>

            <form onSubmit={handleQuickSendWhatsApp} className="space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">
                  What would you like to know or request?
                </label>
                <textarea
                  rows={3}
                  value={quickQuery}
                  onChange={(e) => setQuickQuery(e.target.value)}
                  placeholder="e.g. Please share 3 BHK brochure, current price, and schedule a site visit for this weekend."
                  className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl p-3 text-xs text-white placeholder-stone-400 resize-none transition-all"
                />
              </div>

              {/* Quick Prompt Chips */}
              <div className="space-y-1.5">
                <span className="text-[11px] text-stone-400">Popular queries:</span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    '3 BHK Price & Floor Plan',
                    '4 BHK Penthouse Details',
                    'Book Site Visit Tomorrow',
                    'Bank Loan Eligibility',
                  ].map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => setQuickQuery(`I would like to inquire about: ${chip} at Krishna Residency.`)}
                      className="text-[10px] px-2 py-1 rounded-lg bg-stone-800 hover:bg-stone-750 text-stone-300 border border-stone-750 hover:border-amber-500/40 transition-all cursor-pointer"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Query via WhatsApp to +91 89056 41356</span>
              </button>

              <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> No spam guarantee
                </span>
                <button
                  type="button"
                  onClick={onOpenBookVisit}
                  className="text-amber-400 hover:text-amber-300 underline font-medium"
                >
                  Or schedule a visit &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
