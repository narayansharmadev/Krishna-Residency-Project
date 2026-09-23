import React, { useState } from 'react';
import { Sparkles, Palette, Calculator, MessageSquare, Bot, ArrowRight } from 'lucide-react';
import { AiInteriorVisualizer } from './AiInteriorVisualizer';
import { AiInvestmentAdvisor } from './AiInvestmentAdvisor';
import { Property } from '../data/properties';

interface AiSuiteSectionProps {
  onOpenAiConcierge: () => void;
  selectedPropertyForEmi: Property | null;
}

export const AiSuiteSection: React.FC<AiSuiteSectionProps> = ({
  onOpenAiConcierge,
  selectedPropertyForEmi,
}) => {
  const [activeTab, setActiveTab] = useState<'visualizer' | 'advisor'>('visualizer');

  return (
    <section id="ai-suite" className="py-20 bg-stone-950 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-emerald-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            AI Innovation Showcase Suite
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Playfair_Display',serif]">
            Intelligent Tools for High-Intent Buyers
          </h2>
          <p className="text-stone-300 text-sm sm:text-base">
            Cutting-edge AI capabilities built into Krishna Residency: chat 24/7 with the property concierge, visualize customized interior moodboards, and model financial growth in Jhotwara.
          </p>
        </div>

        {/* 3 AI Feature Hero Banner / Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: 24/7 AI Concierge */}
          <div 
            onClick={onOpenAiConcierge}
            className="p-6 rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-amber-500/50 transition-all cursor-pointer group shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 group-hover:scale-110 transition-transform">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Feature 1
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors font-['Playfair_Display',serif]">
                24/7 Krishna AI Concierge
              </h3>
              <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                Answers buyer queries instantly in English or Hindi regarding floor plans, Vastu, loan options, and auto-forwards qualified leads to WhatsApp.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs text-amber-400 font-bold group-hover:text-amber-300">
              <span>Launch Chat Assistant</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: AI Interior Visualizer */}
          <div 
            onClick={() => {
              setActiveTab('visualizer');
              const el = document.getElementById('ai-tab-view');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`p-6 rounded-2xl border transition-all cursor-pointer group shadow-xl flex flex-col justify-between ${
              activeTab === 'visualizer'
                ? 'bg-stone-900 border-amber-500/60 ring-1 ring-amber-500/40'
                : 'bg-stone-900/70 border-stone-800 hover:border-stone-700'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 group-hover:scale-110 transition-transform">
                  <Palette className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Feature 2
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors font-['Playfair_Display',serif]">
                AI Interior Moodboard
              </h3>
              <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                Choose living rooms or suites and watch AI generate custom color palettes, lighting schemes, and Rajasthani materials for Krishna Residency.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs text-amber-400 font-bold">
              <span>{activeTab === 'visualizer' ? 'Currently Active' : 'Explore Visualizer'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Smart EMI & Investment Advisor */}
          <div 
            onClick={() => {
              setActiveTab('advisor');
              const el = document.getElementById('ai-tab-view');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`p-6 rounded-2xl border transition-all cursor-pointer group shadow-xl flex flex-col justify-between ${
              activeTab === 'advisor'
                ? 'bg-stone-900 border-emerald-500/60 ring-1 ring-emerald-500/40'
                : 'bg-stone-900/70 border-stone-800 hover:border-stone-700'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                  <Calculator className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Feature 3
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors font-['Playfair_Display',serif]">
                Smart EMI &amp; Investment Advisor
              </h3>
              <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                Dynamic EMI computation with AI-driven capital appreciation forecast, tax reduction analysis, and rental yield estimations in Jhotwara.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs text-emerald-400 font-bold">
              <span>{activeTab === 'advisor' ? 'Currently Active' : 'Explore EMI Calculator'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Tab Content Display */}
        <div id="ai-tab-view">
          {activeTab === 'visualizer' ? (
            <AiInteriorVisualizer />
          ) : (
            <AiInvestmentAdvisor selectedProperty={selectedPropertyForEmi} />
          )}
        </div>
      </div>
    </section>
  );
};
