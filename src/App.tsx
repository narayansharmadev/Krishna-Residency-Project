import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { UnitsSection } from './components/UnitsSection';
import { GallerySection } from './components/GallerySection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { LocationSection } from './components/LocationSection';
import { BudgetPropertyExplorer } from './components/BudgetPropertyExplorer';
import { AiSuiteSection } from './components/AiSuiteSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { AiConciergeModal } from './components/AiConciergeModal';
import { BookVisitModal } from './components/BookVisitModal';
import { Property } from './data/properties';

export default function App() {
  const [isAiConciergeOpen, setIsAiConciergeOpen] = useState(false);
  const [isBookVisitOpen, setIsBookVisitOpen] = useState(false);
  const [selectedPropertyForEmi, setSelectedPropertyForEmi] = useState<Property | null>(null);

  const handleSelectUnitForEmi = (property: Property) => {
    setSelectedPropertyForEmi(property);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col selection:bg-amber-500 selection:text-stone-950 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Sticky Header */}
      <Header
        onOpenAiConcierge={() => setIsAiConciergeOpen(true)}
        onOpenBookVisit={() => setIsBookVisitOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section with Quick WhatsApp Inquiry Box */}
        <Hero
          onOpenAiConcierge={() => setIsAiConciergeOpen(true)}
          onOpenBookVisit={() => setIsBookVisitOpen(true)}
        />

        {/* 2. Units & Residences (3 BHK, 4 BHK, Penthouse) */}
        <UnitsSection
          onSelectUnitForEmi={handleSelectUnitForEmi}
          onOpenBookVisit={() => setIsBookVisitOpen(true)}
        />

        {/* 3. Visual Gallery Showcase with Lightbox */}
        <GallerySection />

        {/* 4. Vastu Shastra & 8 Signature Amenities */}
        <AmenitiesSection />

        {/* 5. Google Map & Location Hub (Exact Niwaru Road Jhotwara Address) */}
        <LocationSection />

        {/* 6. Budget Property Explorer (Jaipur Partner Options & WhatsApp Forwarding) */}
        <BudgetPropertyExplorer />

        {/* 7. AI Innovation Suite (Concierge + Interior Moodboard + EMI Advisor) */}
        <AiSuiteSection
          onOpenAiConcierge={() => setIsAiConciergeOpen(true)}
          selectedPropertyForEmi={selectedPropertyForEmi}
        />

        {/* 8. Direct Contact & WhatsApp Inquiry Box */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons (WhatsApp + AI Concierge) */}
      <FloatingActions
        onOpenAiConcierge={() => setIsAiConciergeOpen(true)}
      />

      {/* AI Concierge Dialog */}
      <AiConciergeModal
        isOpen={isAiConciergeOpen}
        onClose={() => setIsAiConciergeOpen(false)}
      />

      {/* VIP Site Visit Booking Dialog */}
      <BookVisitModal
        isOpen={isBookVisitOpen}
        onClose={() => setIsBookVisitOpen(false)}
      />
    </div>
  );
}
