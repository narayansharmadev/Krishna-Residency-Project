import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  Clock, 
  ShieldCheck, 
  Check, 
  Copy, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { 
  OWNER_PHONE, 
  OWNER_PHONE_DISPLAY, 
  PROPERTY_ADDRESS, 
  GOOGLE_MAPS_LINK, 
  openWhatsApp 
} from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [unitType, setUnitType] = useState('3 BHK Royal Symphony');
  const [budget, setBudget] = useState('₹55L - ₹75L');
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  // Formatted message preview
  const formattedWhatsAppText = `Hello Krishna Residency Team,

I am submitting an inquiry from your official website:
👤 Name: ${name.trim() || '[My Name]'}
📱 Contact Phone: ${phone.trim() || '[My Phone]'}
🏢 Interested In: ${unitType}
💰 Budget Range: ${budget}
📝 Specific Query: ${query.trim() || 'Please share detailed floor plans, current availability, and arrange a site visit for this weekend.'}

Project: Krishna Residency by Saksham Builder and colonizer, Rajendra path, Niwaru Rd, Jhotwara, Jaipur, Rajasthan 302012.`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(formattedWhatsAppText);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedWhatsAppText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-stone-900 border-t border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider">
            Direct Sales &amp; Site Visits
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Playfair_Display',serif]">
            Connect with the Krishna Residency Desk
          </h2>
          <p className="text-stone-300 text-sm sm:text-base">
            Type your message or query below to chat directly with our project coordinators on WhatsApp. We provide instantaneous floor plans, payment schedules, and site visits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards & Project Office (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="bg-stone-950 border border-stone-800 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-['Playfair_Display',serif]">
                    Saksham Builder and colonizer
                  </h3>
                  <span className="text-xs text-amber-400">Niwaru Road, Jhotwara</span>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-stone-300 space-y-1 bg-stone-900/60 p-4 rounded-2xl border border-stone-850">
                <p className="font-semibold text-white">Saksham Builder and colonizer</p>
                <p className="text-amber-300 font-medium">Rajendra path, Niwaru Rd, Jhotwara,</p>
                <p>Jaipur, Rajasthan - 302012</p>
                <p className="text-[11px] text-stone-400 pt-1">Site: Plot 184–187, 21 South Colony (Krishna Residency)</p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Google Maps Pin</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(PROPERTY_ADDRESS);
                    alert('Address copied to clipboard!');
                  }}
                  className="p-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy Address"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Direct Phone & Hours Card */}
            <div className="bg-stone-950 border border-stone-800 rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-['Playfair_Display',serif]">
                    Sales &amp; Inquiry Hotline
                  </h3>
                  <span className="text-xs text-stone-400">Direct mobile &amp; WhatsApp</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`tel:${OWNER_PHONE}`}
                  className="w-full py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>{OWNER_PHONE_DISPLAY}</span>
                </a>

                <button
                  onClick={() => openWhatsApp('Hello! I would like to speak with a sales advisor about Krishna Residency.')}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Now</span>
                </button>
              </div>

              <div className="text-[11px] text-stone-400 flex items-center gap-2 pt-2 border-t border-stone-800">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Site Visit Hours: 9:00 AM – 7:30 PM (All 7 Days Open)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Query Form (7 cols) */}
          <div className="lg:col-span-7 bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2 font-['Playfair_Display',serif]">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  Send Inquiry via WhatsApp
                </h3>
                <p className="text-xs text-stone-400 mt-0.5">
                  Fill in your requirements to generate a clean, structured WhatsApp message.
                </p>
              </div>
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                Fast Response
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Your Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    WhatsApp Mobile Number:
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Interested Configuration:
                  </label>
                  <select
                    value={unitType}
                    onChange={(e) => setUnitType(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-white cursor-pointer"
                  >
                    <option value="3 BHK Royal Symphony (₹58.5L)">3 BHK Royal Symphony (₹58.50 Lakhs)</option>
                    <option value="4 BHK Imperial Grandeur (₹78.5L)">4 BHK Imperial Grandeur (₹78.50 Lakhs)</option>
                    <option value="Skyview Penthouse Suite (₹1.15 Cr)">Skyview Penthouse Suite (₹1.15 Cr)</option>
                    <option value="Budget Jaipur Partner Property (Under ₹45L)">Budget Partner Property (Under ₹45L)</option>
                    <option value="Ready Possession Flat in Jhotwara">Ready Possession Flat in Jhotwara</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Budget Bracket:
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-white cursor-pointer"
                  >
                    <option value="Under ₹45 Lakhs">Under ₹45 Lakhs</option>
                    <option value="₹55L - ₹75 Lakhs">₹55 Lakhs – ₹75 Lakhs</option>
                    <option value="₹75L - ₹1.20 Crore">₹75 Lakhs – ₹1.20 Crore</option>
                    <option value="₹1.20 Crore+ (Luxury/Villa)">₹1.20 Crore+ (Luxury / Villas)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                  Your Query or Site Visit Request:
                </label>
                <textarea
                  rows={3}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g. Please share the 3 BHK layout PDF, check SBI loan eligibility, and confirm if site visit is possible on Sunday afternoon."
                  className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl p-3 text-xs text-white placeholder-stone-500 resize-none transition-all"
                />
              </div>

              {/* Message Live Preview Box */}
              <div className="p-3.5 rounded-2xl bg-stone-900/90 border border-stone-850 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-stone-400">
                  <span className="flex items-center gap-1 font-semibold text-emerald-400">
                    <Check className="w-3.5 h-3.5" /> WhatsApp Message Preview
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="text-stone-400 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied!' : 'Copy Text'}</span>
                  </button>
                </div>
                <pre className="text-[11px] text-stone-300 font-sans whitespace-pre-wrap line-clamp-4 bg-stone-950 p-2.5 rounded-xl border border-stone-850">
                  {formattedWhatsAppText}
                </pre>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Query via WhatsApp to +91 89056 41356</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
