import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import { OWNER_PHONE_DISPLAY, openWhatsApp, PROPERTY_ADDRESS } from '../utils/whatsapp';

interface BookVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookVisitModal: React.FC<BookVisitModalProps> = ({ isOpen, onClose }) => {
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [visitTime, setVisitTime] = useState('11:00 AM');
  const [preferredUnit, setPreferredUnit] = useState('3 BHK Royal Symphony (₹58.5L)');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Krishna Residency Team,

I would like to book a site visit:
👤 Name: ${visitorName.trim() || 'Prospective Buyer'}
📱 Phone: ${visitorPhone.trim() || 'Provided'}
📅 Preferred Date: ${visitDate || 'This Weekend'}
⏰ Preferred Time: ${visitTime}
🏢 Preferred Unit: ${preferredUnit}
📍 Destination: Plot 184–187, Rajendra Path, 21 South Colony, Niwaru Road, Jhotwara, Jaipur.

Please confirm the appointment and send the gate entry pass to my WhatsApp.`;

    openWhatsApp(message);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-stone-950 border border-stone-800 rounded-3xl shadow-2xl overflow-hidden relative"
      >
        {/* Header */}
        <div className="bg-stone-900 px-6 py-5 border-b border-stone-800 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
              VIP Site Viewing
            </span>
            <h3 className="text-lg font-bold text-white font-['Playfair_Display',serif]">
              Schedule Free Site Visit
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-stone-850 hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-start gap-2">
            <MapPin className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
            <div>
              <strong>Site Address:</strong> Plot 184–187, Rajendra Path, 21 South Colony, Niwaru Road, Jhotwara, Jaipur. Free dedicated parking provided on site.
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1">
                Your Full Name:
              </label>
              <input
                type="text"
                required
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                placeholder="e.g. Amit Verma"
                className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1">
                Your WhatsApp Number:
              </label>
              <input
                type="tel"
                required
                value={visitorPhone}
                onChange={(e) => setVisitorPhone(e.target.value)}
                placeholder="e.g. 9876543210"
                className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-stone-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Preferred Date:
                </label>
                <input
                  type="date"
                  required
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Preferred Time:
                </label>
                <select
                  value={visitTime}
                  onChange={(e) => setVisitTime(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 rounded-xl px-3 py-2 text-xs text-white"
                >
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="04:30 PM">04:30 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1">
                Unit to Inspect:
              </label>
              <select
                value={preferredUnit}
                onChange={(e) => setPreferredUnit(e.target.value)}
                className="w-full bg-stone-900 border border-stone-800 focus:border-amber-500 rounded-xl px-3 py-2 text-xs text-white"
              >
                <option value="3 BHK Royal Symphony (₹58.5L)">3 BHK Royal Symphony (₹58.5L)</option>
                <option value="4 BHK Imperial Grandeur (₹78.5L)">4 BHK Imperial Grandeur (₹78.5L)</option>
                <option value="Skyview Penthouse Suite (₹1.15 Cr)">Skyview Penthouse Suite (₹1.15 Cr)</option>
                <option value="All Configurations">All Configurations</option>
              </select>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Confirm &amp; Book via WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
