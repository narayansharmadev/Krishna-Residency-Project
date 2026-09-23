import React, { useState } from 'react';
import { 
  Sparkles, 
  Palette, 
  Layers, 
  Lightbulb, 
  Compass, 
  Check, 
  Copy, 
  MessageSquare, 
  RefreshCw,
  Home
} from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface MoodboardResult {
  title: string;
  concept: string;
  colors: Array<{ name: string; hex: string }>;
  materials: string[];
  lighting: string;
  vastuTip: string;
  jaipurTouch: string;
}

export const AiInteriorVisualizer: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState('Grand Living Room');
  const [selectedStyle, setSelectedStyle] = useState('Jaipur Heritage Sandstone & Jali');
  const [buyerNotes, setBuyerNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const rooms = [
    { 
      name: 'Grand Living Room', 
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80',
      description: 'Double balcony access with Italian vitrified tiles and Vastu East sunlight.'
    },
    { 
      name: 'Master Bedroom Suite', 
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80',
      description: 'Nairutya corner sanctuary with private dressing room and ensuite bathroom.'
    },
    { 
      name: 'Skywalk Terrace Gazebo', 
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
      description: 'Panoramic open rooftop overlooking the Jaipur Aravalli ridges.'
    },
    { 
      name: 'Gourmet Modular Kitchen', 
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80',
      description: 'Agneya corner with granite counters, chimney duct, and soft-close cabinets.'
    },
    { 
      name: 'Sacred Ishanya Mandir', 
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=900&q=80',
      description: 'North-East pure white marble niche with peaceful morning illumination.'
    }
  ];

  const styles = [
    { id: 'heritage', label: 'Jaipur Heritage Sandstone & Jali', badge: 'Signature Heritage' },
    { id: 'contemporary', label: 'Minimalist Contemporary', badge: 'Modern Chic' },
    { id: 'earth-brass', label: 'Warm Earth & Brushed Brass', badge: 'Cozy Luxury' },
    { id: 'scandinavian', label: 'Scandinavian Zen & Light Teak', badge: 'Airy & Calm' },
    { id: 'royal-luxury', label: 'Royal Rajasthani Opulence', badge: 'Palatial Vibe' },
  ];

  const currentRoomData = rooms.find(r => r.name === selectedRoom) || rooms[0];

  const [moodboard, setMoodboard] = useState<MoodboardResult>({
    title: 'Jaipur Sandstone & Ambient Contemporary Living',
    concept: 'Harmonious fusion of handcrafted Rajasthani textures with Italian vitrified finishes, elevating natural light across the spacious living hall of Krishna Residency.',
    colors: [
      { name: 'Jaipur Sandstone Warmth', hex: '#D4A373' },
      { name: 'Imperial Chantilly Ivory', hex: '#FAF9F6' },
      { name: 'Brushed Champagne Brass', hex: '#C5A059' },
      { name: 'Deep Slate Accent', hex: '#2B2D42' },
    ],
    materials: [
      'Italian Glazed Vitrified Tiles (800x1600mm)',
      'Acoustic Fluted Oak Wall Paneling',
      'Brushed Brass Inlay Profiles',
      'Handcrafted Jodhpur Stone Jali Screens'
    ],
    lighting: 'Concealed LED cove lighting (3000K Warm White) paired with a magnetic low-voltage track spotlight and statement brass pendant.',
    vastuTip: 'Keeps the North-East Ishanya zone light and clutter-free, allowing positive solar cosmic energy to flow through the balcony into the living core.',
    jaipurTouch: 'Backlit geometric Jharokha motif screen separating the foyer entrance from the formal lounge.',
  });

  const handleGenerateMoodboard = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/ai/interior-moodboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          room: selectedRoom,
          style: selectedStyle,
          preferences: buyerNotes,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setMoodboard(data);
      }
    } catch (err) {
      console.error('Moodboard generation failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handleShareMoodboardWhatsApp = () => {
    const text = `Hello Krishna Residency Team,

I used the AI Interior Space Visualizer on your website and loved this design concept for my future home:
🛋️ Room: ${selectedRoom}
🎨 Style: ${selectedStyle}
✨ Concept: "${moodboard.title}"
🏷️ Colors: ${moodboard.colors.map(c => `${c.name} (${c.hex})`).join(', ')}
💡 Lighting: ${moodboard.lighting}
🪷 Vastu Tip: ${moodboard.vastuTip}

Can we discuss customized interior finishes for Krishna Residency during my site visit?`;

    openWhatsApp(text);
  };

  return (
    <div id="ai-moodboard" className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            AI Interior Moodboard &amp; Visualizer
          </div>
          <h3 className="text-2xl font-bold text-white font-['Playfair_Display',serif]">
            Picture Your Dream Sanctuary at Krishna Residency
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 mt-1">
            Choose your space and preferred aesthetic. Our AI instantly produces tailored color palettes, material specifications, and Vastu decor tips.
          </p>
        </div>

        <button
          onClick={handleGenerateMoodboard}
          disabled={isLoading}
          className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer shrink-0 disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin text-stone-950" />
              <span>Generating AI Concept...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-stone-950" />
              <span>Generate AI Moodboard</span>
            </>
          )}
        </button>
      </div>

      {/* Selectors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-start">
        {/* Left Side: Space & Style Controls (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Room Selection */}
          <div>
            <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2.5">
              1. Choose Apartment Room:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {rooms.map((r) => (
                <button
                  key={r.name}
                  onClick={() => setSelectedRoom(r.name)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex items-center gap-2.5 ${
                    selectedRoom === r.name
                      ? 'bg-amber-500/20 text-white border-amber-500/60 font-semibold'
                      : 'bg-stone-950 text-stone-400 border-stone-850 hover:text-stone-200'
                  }`}
                >
                  <Home className={`w-4 h-4 shrink-0 ${selectedRoom === r.name ? 'text-amber-400' : 'text-stone-500'}`} />
                  <span className="text-xs truncate">{r.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Aesthetic Style Selection */}
          <div>
            <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2.5">
              2. Choose Aesthetic Theme:
            </label>
            <div className="space-y-2">
              {styles.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedStyle(s.label)}
                  className={`w-full p-3 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between text-xs ${
                    selectedStyle === s.label
                      ? 'bg-amber-500 text-stone-950 font-bold border-amber-400 shadow-md'
                      : 'bg-stone-950 text-stone-300 border-stone-850 hover:bg-stone-850'
                  }`}
                >
                  <span>{s.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    selectedStyle === s.label ? 'bg-stone-950/20 text-stone-950' : 'bg-stone-800 text-amber-400'
                  }`}>
                    {s.badge}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Notes */}
          <div>
            <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-1.5">
              3. Custom Preferences (Optional):
            </label>
            <input
              type="text"
              value={buyerNotes}
              onChange={(e) => setBuyerNotes(e.target.value)}
              placeholder="e.g. Warm lighting, indoor plants, child-friendly layout"
              className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-stone-500 focus:border-amber-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Right Side: Visual Mockup & AI Generated Results (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Spatial Render Card */}
          <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 shadow-xl group">
            <img
              src={currentRoomData.image}
              alt={currentRoomData.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
            
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-lg bg-stone-950/80 backdrop-blur-md text-amber-400 border border-amber-500/30 text-xs font-bold">
                {selectedRoom}
              </span>
              <span className="px-3 py-1 rounded-lg bg-stone-950/80 backdrop-blur-md text-stone-200 border border-stone-700 text-xs font-medium">
                {selectedStyle}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs text-stone-300 bg-stone-950/85 backdrop-blur-md p-3 rounded-xl border border-stone-800">
                {currentRoomData.description}
              </p>
            </div>
          </div>

          {/* AI Moodboard Specs Card */}
          <div className="bg-stone-950 border border-stone-800 rounded-2xl p-6 space-y-5">
            <div>
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                AI Design Concept
              </span>
              <h4 className="text-lg font-bold text-white font-['Playfair_Display',serif]">
                {moodboard.title}
              </h4>
              <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                {moodboard.concept}
              </p>
            </div>

            {/* Color Palette Chips */}
            <div>
              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-2">
                Color Palette &amp; Paint Codes
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {moodboard.colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => copyHex(c.hex)}
                    className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 hover:border-stone-700 text-left transition-all cursor-pointer group"
                  >
                    <div
                      className="w-full h-8 rounded-lg mb-2 border border-white/10 shadow-inner"
                      style={{ backgroundColor: c.hex }}
                    />
                    <div className="text-[11px] font-semibold text-white truncate">{c.name}</div>
                    <div className="text-[10px] text-stone-400 font-mono flex items-center justify-between mt-0.5">
                      <span>{c.hex}</span>
                      {copiedHex === c.hex ? (
                        <Check className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Materials & Lighting */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-stone-900/80 border border-stone-800">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                  <Layers className="w-3.5 h-3.5" /> Recommended Materials
                </span>
                <ul className="space-y-1 text-xs text-stone-300">
                  {moodboard.materials.map((m, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                      <span className="truncate">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-900/80 border border-stone-800">
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                  <Lightbulb className="w-3.5 h-3.5" /> Lighting Scheme
                </span>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {moodboard.lighting}
                </p>
              </div>
            </div>

            {/* Vastu & Jaipur Accent */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                <Compass className="w-4 h-4" />
                <span>Vastu &amp; Jaipur Heritage Insight:</span>
              </div>
              <p className="text-stone-300 text-[11px]">
                {moodboard.vastuTip}
              </p>
              <p className="text-stone-400 text-[11px] italic">
                Jaipur Touch: {moodboard.jaipurTouch}
              </p>
            </div>

            {/* Forward Moodboard Action */}
            <button
              onClick={handleShareMoodboardWhatsApp}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Share this AI Moodboard with Owner on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
