import React, { useState } from 'react';
import { ALL_PROPERTIES, Property } from '../data/properties';
import { 
  Building2, 
  MapPin, 
  Filter, 
  Bed, 
  Maximize2, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const BudgetPropertyExplorer: React.FC = () => {
  const [budgetFilter, setBudgetFilter] = useState<string>('all');
  const [locationFilter, setLocationFilter] = useState<string>('all');
  const [clientPhoneInput, setClientPhoneInput] = useState<string>('');
  const [selectedPropertyForForward, setSelectedPropertyForForward] = useState<Property | null>(null);

  interface BudgetTier {
    id: string;
    label: string;
    min?: number;
    max?: number;
  }

  const budgetTiers: BudgetTier[] = [
    { id: 'all', label: 'All Budgets' },
    { id: 'under-45', label: 'Under ₹45 Lakhs', min: 0, max: 45 },
    { id: '45-75', label: '₹45L – ₹75 Lakhs', min: 45, max: 75 },
    { id: '75-120', label: '₹75L – ₹1.20 Cr', min: 75, max: 120 },
    { id: 'above-120', label: '₹1.20 Cr+ (Villas)', min: 120, max: 9999 },
  ];

  const localities = [
    { id: 'all', label: 'All Jaipur Areas' },
    { id: 'jhotwara', label: 'Jhotwara (Krishna Residency)' },
    { id: 'vaishali', label: 'Vaishali Nagar' },
    { id: 'mansarovar', label: 'Mansarovar' },
    { id: 'jagatpura', label: 'Jagatpura' },
    { id: 'kalwar', label: 'Kalwar Road' },
    { id: 'sirsi', label: 'Sirsi Road' },
    { id: 'ajmer', label: 'Ajmer Road' },
  ];

  const filteredProperties = ALL_PROPERTIES.filter((prop) => {
    // Budget check
    if (budgetFilter !== 'all') {
      const tier = budgetTiers.find(b => b.id === budgetFilter);
      if (tier && tier.min !== undefined && tier.max !== undefined) {
        if (prop.priceInLakhs < tier.min || prop.priceInLakhs > tier.max) {
          return false;
        }
      }
    }

    // Locality check
    if (locationFilter !== 'all') {
      const loc = prop.location.toLowerCase();
      if (!loc.includes(locationFilter.toLowerCase())) {
        return false;
      }
    }

    return true;
  });

  const handleForwardPropertyToWhatsApp = (property: Property) => {
    const phoneNote = clientPhoneInput.trim() ? `\nMy Contact Number: ${clientPhoneInput.trim()}` : '';
    const message = `Hello Krishna Residency Team,

I reviewed the property options on your website matching my budget and selected:
🏢 Property: ${property.name}
📍 Location: ${property.location}
💰 Price: ${property.price}
📐 Configuration: ${property.bhk} (${property.areaSqft} Sq.Ft)
${phoneNote}

Please forward the complete brochure, floor plan PDF, and current availability to my WhatsApp. Thank you!`;

    openWhatsApp(message);
  };

  return (
    <section id="budget-finder" className="py-20 bg-stone-950 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
            Client Budget Finder
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Playfair_Display',serif]">
            Find the Perfect Home for Any Budget in Jaipur
          </h2>
          <p className="text-stone-300 text-sm sm:text-base">
            Exploring beyond Krishna Residency or have a specific price range? Filter by budget and locality to view our verified options and instantly forward details to WhatsApp.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-stone-900/90 border border-stone-800 rounded-3xl p-6 sm:p-8 mb-10 shadow-xl backdrop-blur-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stone-800">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                Filter by Budget &amp; Locality
              </span>
            </div>
            <span className="text-xs text-stone-400">
              Showing <strong className="text-amber-400">{filteredProperties.length}</strong> verified options
            </span>
          </div>

          {/* Budget Buttons */}
          <div>
            <label className="block text-xs font-semibold text-stone-400 mb-2 uppercase tracking-wider">
              1. Select Your Budget Bracket:
            </label>
            <div className="flex flex-wrap gap-2">
              {budgetTiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setBudgetFilter(tier.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    budgetFilter === tier.id
                      ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/20'
                      : 'bg-stone-950 text-stone-300 hover:text-white hover:bg-stone-850 border border-stone-800'
                  }`}
                >
                  {tier.label}
                </button>
              ))}
            </div>
          </div>

          {/* Locality Buttons */}
          <div>
            <label className="block text-xs font-semibold text-stone-400 mb-2 uppercase tracking-wider">
              2. Select Preferred Jaipur Locality:
            </label>
            <div className="flex flex-wrap gap-2">
              {localities.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setLocationFilter(loc.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    locationFilter === loc.id
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 font-bold'
                      : 'bg-stone-950 text-stone-400 hover:text-stone-200 border border-stone-850'
                  }`}
                >
                  {loc.label}
                </button>
              ))}
            </div>
          </div>

          {/* Optional phone number pre-fill for forwarding */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <span className="text-xs text-stone-400 shrink-0">
              Your Phone / WhatsApp (Optional for fast response):
            </span>
            <input
              type="tel"
              value={clientPhoneInput}
              onChange={(e) => setClientPhoneInput(e.target.value)}
              placeholder="e.g. 9876543210"
              className="w-full sm:w-64 bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white placeholder-stone-400 focus:border-amber-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl ${
                property.isFlagship
                  ? 'bg-gradient-to-b from-stone-900 to-amber-950/20 border-amber-500/40 ring-1 ring-amber-500/20'
                  : 'bg-stone-900/80 border-stone-800 hover:border-stone-700'
              }`}
            >
              {/* Image & Badges */}
              <div className="relative h-52 overflow-hidden bg-stone-950 group">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />

                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {property.isFlagship ? (
                    <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-stone-950 font-bold text-[10px] shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Flagship Project
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur-md text-stone-300 border border-stone-700 text-[10px] font-medium">
                      Jaipur Partner Verified
                    </span>
                  )}
                  <span className="px-2 py-1 rounded-lg bg-stone-950/80 backdrop-blur-md text-amber-300 text-[10px] font-semibold">
                    {property.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xl font-extrabold text-amber-400 font-['Playfair_Display',serif]">
                    {property.price}
                  </span>
                  <span className="text-[11px] text-stone-300 bg-stone-950/80 px-2 py-0.5 rounded-md backdrop-blur-sm">
                    {property.areaSqft} Sq.Ft
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="line-clamp-1">{property.location}</span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {property.name}
                  </h3>

                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded-lg bg-stone-950 border border-stone-850 flex items-center gap-2">
                      <Bed className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-stone-300">{property.bhk}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-stone-950 border border-stone-850 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-stone-300">{property.specs.status}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="mt-3 space-y-1.5 text-[11px] text-stone-400">
                    {property.highlights.slice(0, 2).map((hl, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-500 font-bold">•</span>
                        <span className="line-clamp-1">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-3 border-t border-stone-800">
                  <button
                    onClick={() => handleForwardPropertyToWhatsApp(property)}
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-950/40 transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Forward Details to WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-16 bg-stone-900/50 rounded-3xl border border-stone-800">
            <Building2 className="w-12 h-12 text-stone-500 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white">No properties found in this specific filter</h3>
            <p className="text-xs text-stone-400 mt-1 mb-4">Try clearing budget or locality filters to explore all options.</p>
            <button
              onClick={() => { setBudgetFilter('all'); setLocationFilter('all'); }}
              className="px-4 py-2 rounded-xl bg-amber-500 text-stone-950 text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
