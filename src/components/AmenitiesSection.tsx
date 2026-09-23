import React from 'react';
import { 
  AMENITIES_LIST 
} from '../data/properties';
import { 
  ArrowUpDown, 
  Compass, 
  ShieldCheck, 
  Car, 
  Trees, 
  Droplets, 
  Building2, 
  Zap, 
  Sun,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

const iconMap: Record<string, React.ReactNode> = {
  ArrowUpDown: <ArrowUpDown className="w-6 h-6 text-amber-400" />,
  Compass: <Compass className="w-6 h-6 text-emerald-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-400" />,
  Car: <Car className="w-6 h-6 text-amber-400" />,
  Trees: <Trees className="w-6 h-6 text-emerald-400" />,
  Droplets: <Droplets className="w-6 h-6 text-amber-400" />,
  Building2: <Building2 className="w-6 h-6 text-amber-400" />,
  Zap: <Zap className="w-6 h-6 text-amber-400" />,
};

export const AmenitiesSection: React.FC = () => {
  return (
    <section id="amenities" className="py-20 bg-stone-950 border-t border-stone-800 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider">
            Amenities &amp; Vastu Harmony
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Playfair_Display',serif]">
            Every Comfort Thoughtfully Engineered
          </h2>
          <p className="text-stone-300 text-sm sm:text-base">
            From automated rescue elevators to 100% Vastu Shastra orientation, Krishna Residency offers a peaceful, secure, and future-ready lifestyle for your family in Jhotwara.
          </p>
        </div>

        {/* Vastu Shastra Spotlight Banner */}
        <div className="mb-14 bg-gradient-to-r from-stone-900 via-stone-900/90 to-amber-950/40 border border-amber-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Compass className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white font-['Playfair_Display',serif]">
                    100% Vastu Shastra Certified Layouts
                  </h3>
                  <span className="text-xs text-amber-400 font-medium">Harmonized for prosperity, wellness, and peace</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Our architects collaborated with seasoned Jaipur Vastu consultants to balance all five natural elements (Panchatatva) across each unit at Krishna Residency:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-stone-950/80 border border-stone-800 p-3 rounded-xl">
                  <div className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider">North-East (Ishanya)</div>
                  <div className="text-xs font-semibold text-white mt-1">Dedicated Sacred Mandir &amp; Sunlight Foyer</div>
                </div>
                <div className="bg-stone-950/80 border border-stone-800 p-3 rounded-xl">
                  <div className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">South-East (Agneya)</div>
                  <div className="text-xs font-semibold text-white mt-1">Gourmet Modular Kitchen with Natural Duct</div>
                </div>
                <div className="bg-stone-950/80 border border-stone-800 p-3 rounded-xl">
                  <div className="text-[10px] text-sky-400 uppercase font-bold tracking-wider">South-West (Nairutya)</div>
                  <div className="text-xs font-semibold text-white mt-1">Master Bedroom for Stability &amp; Grounding</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center text-center p-6 bg-stone-950/90 rounded-2xl border border-stone-800">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3 animate-spin-slow">
                <Sun className="w-8 h-8" />
              </div>
              <h4 className="text-sm font-bold text-white">East-Facing Morning Light</h4>
              <p className="text-[11px] text-stone-400 mt-1 mb-4">
                Abundant natural luminescence through extra-wide balconies reduces energy costs and elevates everyday mood.
              </p>
              <button
                onClick={() => openWhatsApp('Hello! Please share the Vastu compliance certificate and directional layout plans for Krishna Residency.')}
                className="w-full py-2.5 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-semibold transition-all cursor-pointer"
              >
                Inquire Vastu Details &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* 8 Signature Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES_LIST.map((item, index) => (
            <div
              key={index}
              className="bg-stone-900/80 border border-stone-800 rounded-2xl p-6 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 group-hover:scale-110 transition-transform">
                  {iconMap[item.icon] || <Sparkles className="w-6 h-6 text-amber-400" />}
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-stone-800 text-stone-300 border border-stone-700">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
