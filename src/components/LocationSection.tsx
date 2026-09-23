import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  ExternalLink, 
  Navigation, 
  MessageSquare, 
  Copy, 
  Check, 
  Train, 
  Plane, 
  Building, 
  GraduationCap, 
  HeartPulse, 
  Clock 
} from 'lucide-react';
import { 
  OWNER_PHONE, 
  OWNER_PHONE_DISPLAY, 
  PROPERTY_ADDRESS, 
  EXACT_MAP_ADDRESS,
  BUILDER_NAME,
  GOOGLE_MAPS_LINK, 
  GOOGLE_MAPS_EMBED_URL,
  openWhatsApp 
} from '../utils/whatsapp';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(EXACT_MAP_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const nearbyLandmarks = [
    {
      name: 'Jhotwara Main Circle / Market',
      distance: '1.2 km',
      time: '3 mins',
      icon: <Building className="w-4 h-4 text-amber-400" />,
      desc: 'Local bazaar, retail banks, daily supermarkets & clinics',
    },
    {
      name: 'Vaishali Nagar & Amrapali Plaza',
      distance: '6.5 km',
      time: '12 mins',
      icon: <Navigation className="w-4 h-4 text-sky-400" />,
      desc: 'Jaipur premier shopping, cafes, multiplexes & brand stores',
    },
    {
      name: 'Jaipur Railway Junction',
      distance: '8.5 km',
      time: '15 mins',
      icon: <Train className="w-4 h-4 text-emerald-400" />,
      desc: 'Major North Western Railway junction & metro connectivity',
    },
    {
      name: 'Sindhi Camp Inter-State Bus Terminal',
      distance: '10.0 km',
      time: '18 mins',
      icon: <Clock className="w-4 h-4 text-amber-400" />,
      desc: 'Seamless intercity bus routes across Delhi, Udaipur, Gujarat',
    },
    {
      name: 'Podar World School & MPS',
      distance: '3.0 km',
      time: '7 mins',
      icon: <GraduationCap className="w-4 h-4 text-indigo-400" />,
      desc: 'Premier CBSE & international schools within close transit',
    },
    {
      name: 'Jaipur International Airport (JAI)',
      distance: '22.0 km',
      time: '35 mins',
      icon: <Plane className="w-4 h-4 text-rose-400" />,
      desc: 'Quick access via elevated corridor and upcoming ring roads',
    },
  ];

  return (
    <section id="location" className="py-20 bg-stone-900 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
            Prime Jhotwara Location
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Playfair_Display',serif]">
            Connected to Everything in Jaipur
          </h2>
          <p className="text-stone-300 text-sm sm:text-base">
            Situated on Rajendra Path, 21 South Colony, just moments off Niwaru Road in Jhotwara. Enjoy peaceful residential solitude with immediate highway and metro access.
          </p>
        </div>

        {/* Address & Quick Actions Bar */}
        <div className="bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 mb-10 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                Google Maps Verified Site &amp; Builder Office
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                {BUILDER_NAME}
              </h3>
              <p className="text-sm font-semibold text-amber-300">
                Rajendra path, Niwaru Rd, Jhotwara, Jaipur, Rajasthan 302012
              </p>
              <p className="text-xs text-stone-400">
                Project Site: Plot NO. 184, 185, 186, 187, 21 South Colony (Krishna Residency)
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <button
                onClick={handleCopyAddress}
                className="flex-1 sm:flex-initial py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-stone-400" />}
                <span>{copied ? 'Location Copied!' : 'Copy Maps Address'}</span>
              </button>

              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${OWNER_PHONE}`}
                className="flex-1 sm:flex-initial py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-850 border border-stone-700 text-amber-400 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call {OWNER_PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Map & Proximities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Google Map Embed (7 cols) */}
          <div className="lg:col-span-7 bg-stone-950 rounded-3xl border border-stone-800 p-2 shadow-2xl overflow-hidden relative">
            <div className="relative w-full h-[440px] rounded-2xl overflow-hidden bg-stone-900">
              {/* Embedded Google Map iframe with exact query pin */}
              <iframe
                title="Saksham Builder and colonizer Google Maps Location Jhotwara Jaipur"
                src={GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Pin Card on top of map */}
              <div className="absolute top-4 left-4 max-w-xs bg-stone-950/95 backdrop-blur-md p-3.5 rounded-2xl border border-amber-500/30 shadow-2xl">
                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-xl bg-amber-500 text-stone-950 font-bold shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-amber-400 block">
                      Google Maps Location
                    </span>
                    <h4 className="text-xs font-bold text-white font-['Playfair_Display',serif]">
                      {BUILDER_NAME}
                    </h4>
                    <p className="text-[10px] text-stone-300 mt-0.5 leading-snug">
                      Rajendra path, Niwaru Rd, Jhotwara, Jaipur 302012
                    </p>
                    <p className="text-[9px] text-stone-400 mt-0.5">
                      Krishna Residency Site Office (Plot 184–187)
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <a
                        href={GOOGLE_MAPS_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-bold text-amber-400 hover:underline flex items-center gap-1"
                      >
                        Navigate Live &rarr;
                      </a>
                      <span className="text-stone-600">•</span>
                      <a
                        href={`tel:${OWNER_PHONE}`}
                        className="text-[10px] font-medium text-stone-400 hover:text-white"
                      >
                        {OWNER_PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Live Location Button */}
              <div className="absolute bottom-4 right-4">
                <button
                  onClick={() => openWhatsApp('Hello! Please send me the live Google Maps pin and driving directions to Saksham Builder and colonizer on Rajendra Path, Niwaru Road, Jhotwara.')}
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 shadow-xl shadow-black/80 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Pin to WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

          {/* Key Distances & Landmarks (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-stone-800">
              <h3 className="text-base font-bold text-white font-['Playfair_Display',serif]">
                Commute &amp; Proximity Times
              </h3>
              <span className="text-xs text-amber-400 font-semibold">from Project Gate</span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {nearbyLandmarks.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-stone-950/80 border border-stone-800 hover:border-amber-500/30 transition-all flex items-start justify-between gap-3 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-stone-900 border border-stone-800 group-hover:scale-110 transition-transform shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-stone-400 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-bold text-amber-400 block">{item.time}</span>
                    <span className="text-[10px] text-stone-500">{item.distance}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => openWhatsApp('Hello! I would like to schedule a site visit at Krishna Residency. What are the best driving routes from my location?')}
                className="w-full py-3 rounded-xl bg-stone-950 hover:bg-stone-800 border border-stone-800 hover:border-stone-700 text-stone-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                <span>Get Customized Driving Directions via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
