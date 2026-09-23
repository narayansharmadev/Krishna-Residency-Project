import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/properties';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = ['All', 'Architecture', 'Interiors', 'Kitchen', 'Bedrooms', 'Balconies', 'Terrace'];

  const filteredItems = activeCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-stone-900 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
            Visual Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Playfair_Display',serif]">
            A Glimpse into Refined Living
          </h2>
          <p className="text-stone-300 text-sm sm:text-base">
            Take a visual tour through Krishna Residency’s grand facade, sun-drenched living halls, modular kitchens, and the skyview rooftop gazebo.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-stone-950/70 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveImageIndex(idx)}
              className="group relative h-72 rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 cursor-pointer shadow-lg hover:border-amber-500/50 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Badge */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-stone-950/80 backdrop-blur-sm border border-stone-700 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Eye className="w-4 h-4" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImageIndex !== null && (
          <div 
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-stone-950 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveImageIndex(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-stone-900/80 text-stone-300 hover:text-white border border-stone-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Nav Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-stone-900/80 text-white hover:bg-amber-500 hover:text-stone-950 border border-stone-700 cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-stone-900/80 text-white hover:bg-amber-500 hover:text-stone-950 border border-stone-700 cursor-pointer transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="relative h-[65vh] w-full bg-black">
                <img
                  src={GALLERY_ITEMS[activeImageIndex].image}
                  alt={GALLERY_ITEMS[activeImageIndex].title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Caption & WhatsApp Action */}
              <div className="p-6 bg-stone-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-stone-800">
                <div>
                  <span className="text-xs uppercase font-bold text-amber-400">
                    {GALLERY_ITEMS[activeImageIndex].category}
                  </span>
                  <h3 className="text-lg font-bold text-white font-['Playfair_Display',serif]">
                    {GALLERY_ITEMS[activeImageIndex].title}
                  </h3>
                  <p className="text-xs text-stone-300 max-w-xl">
                    {GALLERY_ITEMS[activeImageIndex].description}
                  </p>
                </div>

                <button
                  onClick={() => openWhatsApp(`Hello! I saw the photo "${GALLERY_ITEMS[activeImageIndex].title}" on the Krishna Residency website. Could you send more high-res photos and video walkthrough?`)}
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shrink-0 cursor-pointer shadow-md"
                >
                  Request Photos on WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
