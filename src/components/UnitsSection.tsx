import React, { useState } from 'react';
import { 
  Building2, 
  Bed, 
  Bath, 
  Maximize2, 
  Compass, 
  Check, 
  Download, 
  MessageSquare, 
  Calculator,
  Shield,
  Layers,
  Sparkles
} from 'lucide-react';
import { KRISHNA_RESIDENCY_UNITS, Property } from '../data/properties';
import { openWhatsApp } from '../utils/whatsapp';

interface UnitsSectionProps {
  onSelectUnitForEmi: (property: Property) => void;
  onOpenBookVisit: () => void;
}

export const UnitsSection: React.FC<UnitsSectionProps> = ({ onSelectUnitForEmi, onOpenBookVisit }) => {
  const [selectedUnitId, setSelectedUnitId] = useState(KRISHNA_RESIDENCY_UNITS[0].id);

  const currentUnit = KRISHNA_RESIDENCY_UNITS.find(u => u.id === selectedUnitId) || KRISHNA_RESIDENCY_UNITS[0];

  return (
    <section id="units" className="py-20 bg-stone-950 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
            Floor Plans &amp; Configurations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Playfair_Display',serif]">
            Architectural Masterpieces Crafted for Life
          </h2>
          <p className="text-stone-300 text-sm sm:text-base">
            Every apartment at Krishna Residency is crafted with expansive room dimensions, unhindered cross-ventilation, and strict Vastu Shastra principles.
          </p>
        </div>

        {/* Unit Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {KRISHNA_RESIDENCY_UNITS.map((unit) => {
            const isActive = unit.id === selectedUnitId;
            return (
              <button
                key={unit.id}
                onClick={() => setSelectedUnitId(unit.id)}
                className={`px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-lg shadow-amber-500/20 scale-102'
                    : 'bg-stone-900 text-stone-300 border-stone-800 hover:border-stone-700 hover:text-white'
                }`}
              >
                <Building2 className={`w-4 h-4 ${isActive ? 'text-stone-950' : 'text-amber-400'}`} />
                <span>{unit.bhk}</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                  isActive ? 'bg-stone-950/20 text-stone-950' : 'bg-stone-800 text-amber-400'
                }`}>
                  {unit.price}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Unit Showcase Card */}
        <div className="bg-stone-900/90 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Preview (Left 7 cols) */}
            <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[500px] overflow-hidden bg-stone-950 group">
              <img
                src={currentUnit.image}
                alt={currentUnit.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
              
              {/* Badges on Image */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-lg bg-stone-900/80 backdrop-blur-md text-amber-400 border border-stone-700 text-xs font-semibold">
                  {currentUnit.tag}
                </span>
                <span className="px-3 py-1 rounded-lg bg-emerald-950/80 backdrop-blur-md text-emerald-400 border border-emerald-700 text-xs font-semibold flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5" /> 100% Vastu Compliant
                </span>
              </div>

              {/* Bottom overlay with quick specs */}
              <div className="absolute bottom-4 left-4 right-4 bg-stone-950/80 backdrop-blur-md p-4 rounded-2xl border border-stone-800">
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <span className="text-stone-400 block text-[10px]">Super Built-up</span>
                    <strong className="text-white text-sm">{currentUnit.areaSqft} Sq.Ft</strong>
                  </div>
                  <div className="border-x border-stone-800">
                    <span className="text-stone-400 block text-[10px]">Carpet Area</span>
                    <strong className="text-white text-sm">{currentUnit.carpetAreaSqft || Math.round(currentUnit.areaSqft * 0.76)} Sq.Ft</strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px]">Balconies</span>
                    <strong className="text-white text-sm">{currentUnit.specs.balconies} Airy Balconies</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications & Inquiries (Right 5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                    {currentUnit.bhk}
                  </span>
                  <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    {currentUnit.specs.status}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Playfair_Display',serif]">
                  {currentUnit.name.replace('Krishna Residency – ', '')}
                </h3>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-amber-400 font-['Playfair_Display',serif]">
                    {currentUnit.price}
                  </span>
                  <span className="text-xs text-stone-400">All-Inclusive Base Price</span>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-2.5 my-6">
                  <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800/80 flex items-center gap-3">
                    <Bed className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-stone-400">Bedrooms</div>
                      <div className="text-xs font-bold text-white">{currentUnit.specs.bedrooms} Luxury Suites</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800/80 flex items-center gap-3">
                    <Bath className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-stone-400">Bathrooms</div>
                      <div className="text-xs font-bold text-white">{currentUnit.specs.bathrooms} Branded Baths</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800/80 flex items-center gap-3">
                    <Compass className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-stone-400">Orientation</div>
                      <div className="text-xs font-bold text-white">{currentUnit.specs.facing}</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800/80 flex items-center gap-3">
                    <Shield className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-stone-400">Car Parking</div>
                      <div className="text-xs font-bold text-white">{currentUnit.specs.parking}</div>
                    </div>
                  </div>
                </div>

                {/* Key Architectural Highlights */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-stone-300 uppercase tracking-wider block">
                    Exclusive Features
                  </span>
                  <ul className="space-y-2">
                    {currentUnit.highlights.slice(0, 4).map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-stone-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-4 border-t border-stone-800">
                <button
                  onClick={() => openWhatsApp(currentUnit.whatsappMessage)}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire for {currentUnit.bhk} on WhatsApp</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      onSelectUnitForEmi(currentUnit);
                      const emiSec = document.getElementById('ai-advisor');
                      if (emiSec) emiSec.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="py-2.5 px-3 rounded-xl bg-stone-950 hover:bg-stone-800 border border-stone-700 text-stone-300 hover:text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Calculator className="w-3.5 h-3.5 text-amber-400" />
                    <span>EMI &amp; ROI</span>
                  </button>

                  <button
                    onClick={onOpenBookVisit}
                    className="py-2.5 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Book Site Visit</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
