import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  Sparkles, 
  TrendingUp, 
  Percent, 
  Calendar, 
  Coins, 
  MessageSquare, 
  RefreshCw, 
  CheckCircle2, 
  Building,
  ShieldCheck
} from 'lucide-react';
import { Property, KRISHNA_RESIDENCY_UNITS } from '../data/properties';
import { openWhatsApp } from '../utils/whatsapp';

interface AiInvestmentAdvisorProps {
  selectedProperty?: Property | null;
}

interface AdvisorResult {
  verdict: string;
  minIncomeRecommended: string;
  microMarketOutlook: string;
  rentalYield: string;
  taxBenefits: string;
  expertRecommendation: string;
}

export const AiInvestmentAdvisor: React.FC<AiInvestmentAdvisorProps> = ({ selectedProperty }) => {
  const [propertyPrice, setPropertyPrice] = useState<number>(5850000); // 58.5 Lakhs
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [tenureYears, setTenureYears] = useState<number>(20);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Update when selectedProperty prop changes
  useEffect(() => {
    if (selectedProperty) {
      setPropertyPrice(selectedProperty.priceInLakhs * 100000);
    }
  }, [selectedProperty]);

  // Financial Calculations
  const downPaymentAmount = Math.round(propertyPrice * (downPaymentPercent / 100));
  const loanAmount = propertyPrice - downPaymentAmount;

  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const monthlyEMI = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const totalPayment = monthlyEMI * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  const [aiInsights, setAiInsights] = useState<AdvisorResult>({
    verdict: 'High-Growth Micro-market & Safe Capital Appreciation',
    minIncomeRecommended: `₹${Math.round(monthlyEMI * 2.3).toLocaleString('en-IN')} / month`,
    microMarketOutlook: 'Niwaru Road & Jhotwara corridor has appreciated 8-10% annually with the rapid expansion towards the Vaishali Nagar expressway and upcoming 200ft sector road connectivity.',
    rentalYield: 'Expected 4.2% - 4.8% gross rental yield (approx ₹22,000 - ₹28,000/month for a 3 BHK unit).',
    taxBenefits: 'Save up to ₹2,00,000 on home loan interest under Section 24(b) and up to ₹1,50,000 on principal repayment under Section 80C annually.',
    expertRecommendation: 'Bank financing from SBI / HDFC is pre-approved for Krishna Residency, offering competitive floating rates with minimal documentation.',
  });

  const handleFetchAiInsights = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/ai/investment-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          propertyPrice,
          downPayment: downPaymentAmount,
          tenureYears,
          interestRate,
          monthlyEMI,
          propertyName: selectedProperty ? selectedProperty.name : 'Krishna Residency, Jhotwara',
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setAiInsights(data);
      }
    } catch (err) {
      console.error('Advisor error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForwardToWhatsApp = () => {
    const text = `Hello Krishna Residency Team,

I calculated the EMI on your website for:
🏠 Property Value: ₹${(propertyPrice / 100000).toFixed(2)} Lakhs
💵 Down Payment: ₹${(downPaymentAmount / 100000).toFixed(2)} Lakhs (${downPaymentPercent}%)
🏦 Loan Amount: ₹${(loanAmount / 100000).toFixed(2)} Lakhs
📅 Tenure: ${tenureYears} Years @ ${interestRate}% p.a.
💳 Estimated Monthly EMI: ₹${monthlyEMI.toLocaleString('en-IN')} / month

Please arrange an official bank sanction check (SBI / HDFC) and schedule a site visit.`;

    openWhatsApp(text);
  };

  return (
    <div id="ai-advisor" className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold mb-2">
            <Calculator className="w-3.5 h-3.5" />
            Smart EMI &amp; Investment Advisor
          </div>
          <h3 className="text-2xl font-bold text-white font-['Playfair_Display',serif]">
            Calculate Outgoings &amp; Unlock Jaipur Investment Insights
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 mt-1">
            Simulate your monthly EMI and leverage AI to evaluate rental returns, capital appreciation, and tax benefits for Jhotwara properties.
          </p>
        </div>

        <button
          onClick={handleFetchAiInsights}
          disabled={isLoading}
          className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-all cursor-pointer shrink-0 disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin text-white" />
              <span>Analyzing Market...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Get AI Investment Insights</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-start">
        {/* Left 6 cols: Sliders */}
        <div className="lg:col-span-6 space-y-6 bg-stone-950/80 p-6 rounded-2xl border border-stone-850">
          {/* Property Price */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-stone-300 uppercase tracking-wider">
                Property Valuation
              </label>
              <span className="text-sm font-bold text-amber-400">
                ₹{(propertyPrice / 100000).toFixed(2)} Lakhs
              </span>
            </div>
            <input
              type="range"
              min={3000000}
              max={15000000}
              step={100000}
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-stone-500 mt-1">
              <span>₹30 L</span>
              <span>₹75 L</span>
              <span>₹1.50 Cr</span>
            </div>
          </div>

          {/* Down Payment */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-stone-300 uppercase tracking-wider">
                Down Payment ({downPaymentPercent}%)
              </label>
              <span className="text-sm font-bold text-emerald-400">
                ₹{(downPaymentAmount / 100000).toFixed(2)} Lakhs
              </span>
            </div>
            <input
              type="range"
              min={10}
              max={50}
              step={5}
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-stone-500 mt-1">
              <span>10% (Min)</span>
              <span>20% (Standard)</span>
              <span>50%</span>
            </div>
          </div>

          {/* Interest Rate & Tenure in 2 cols */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-stone-300 uppercase tracking-wider">
                  Interest Rate
                </label>
                <span className="text-xs font-bold text-white">
                  {interestRate}% p.a.
                </span>
              </div>
              <input
                type="range"
                min={7.5}
                max={11.0}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-stone-300 uppercase tracking-wider">
                  Loan Tenure
                </label>
                <span className="text-xs font-bold text-white">
                  {tenureYears} Years
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={30}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Loan Amount Summary */}
          <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-between">
            <span className="text-xs text-stone-400">Principal Loan Required:</span>
            <span className="text-base font-bold text-white">
              ₹{(loanAmount / 100000).toFixed(2)} Lakhs
            </span>
          </div>
        </div>

        {/* Right 6 cols: EMI Breakdown & AI Advisor Output */}
        <div className="lg:col-span-6 space-y-6">
          {/* Monthly EMI Hero Card */}
          <div className="bg-gradient-to-br from-stone-950 to-amber-950/30 p-6 rounded-2xl border border-amber-500/30 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                  Estimated Monthly EMI
                </span>
                <div className="text-3xl sm:text-4xl font-black text-amber-400 font-['Playfair_Display',serif] mt-1">
                  ₹{monthlyEMI.toLocaleString('en-IN')} <span className="text-xs font-normal text-stone-300">/ month</span>
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Coins className="w-8 h-8" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-5 mt-5 border-t border-stone-800/80 text-xs">
              <div>
                <span className="text-stone-400 block text-[11px]">Total Interest:</span>
                <strong className="text-white">₹{(totalInterest / 100000).toFixed(2)} Lakhs</strong>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">Total Outflow:</span>
                <strong className="text-white">₹{(totalPayment / 100000).toFixed(2)} Lakhs</strong>
              </div>
            </div>
          </div>

          {/* AI Advisor Intelligence Card */}
          <div className="bg-stone-950 border border-stone-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                <TrendingUp className="w-4 h-4" />
              </span>
              <h4 className="text-sm font-bold text-white font-['Playfair_Display',serif]">
                AI Growth &amp; Financial Analysis
              </h4>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-850">
                <span className="text-[10px] uppercase font-bold text-amber-400 block mb-0.5">
                  Micro-Market Verdict
                </span>
                <p className="text-stone-200 font-medium">{aiInsights.verdict}</p>
                <p className="text-stone-400 text-[11px] mt-1">{aiInsights.microMarketOutlook}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-stone-900 border border-stone-850">
                  <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-0.5">
                    Rental Yield
                  </span>
                  <p className="text-stone-300 text-[11px]">{aiInsights.rentalYield}</p>
                </div>

                <div className="p-3 rounded-xl bg-stone-900 border border-stone-850">
                  <span className="text-[10px] uppercase font-bold text-sky-400 block mb-0.5">
                    Tax Savings
                  </span>
                  <p className="text-stone-300 text-[11px]">{aiInsights.taxBenefits}</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-stone-900/60 border border-stone-850 text-[11px] text-stone-300">
                <strong className="text-amber-400">Recommended Monthly Income:</strong> {aiInsights.minIncomeRecommended}
              </div>
            </div>

            {/* Forward Action Button */}
            <button
              onClick={handleForwardToWhatsApp}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Forward EMI Plan &amp; Request Bank Offer via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
