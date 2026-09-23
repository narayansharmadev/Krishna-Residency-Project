import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  MessageSquare, 
  Bot, 
  User, 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  RefreshCw,
  Building2
} from 'lucide-react';
import { OWNER_PHONE_DISPLAY, openWhatsApp } from '../utils/whatsapp';

interface Message {
  role: 'assistant' | 'user';
  text: string;
}

interface AiConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiConciergeModal: React.FC<AiConciergeModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: `Namaste! I am "Krishna AI", your 24/7 Property Concierge for Krishna Residency on Niwaru Road, Jhotwara, Jaipur. 
I can assist you with floor plans, 3 & 4 BHK pricing, 100% Vastu compliance details, bank loan pre-approvals, or alternative budget flats across Jaipur. How may I help you today?`,
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [leadSummary, setLeadSummary] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSend = async (customText?: string) => {
    const query = (customText || input).trim();
    if (!query || isLoading) return;

    const newMessages: Message[] = [...messages, { role: 'user', text: query }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai/concierge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages,
          userQuery: query,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setMessages([...newMessages, { role: 'assistant', text: data.reply }]);
        if (data.leadSummary) {
          setLeadSummary(data.leadSummary);
        }
      } else {
        setMessages([
          ...newMessages,
          {
            role: 'assistant',
            text: 'Namaste! Krishna Residency offers luxury 3 BHK from ₹58.5L and 4 BHK from ₹78.5L in Jhotwara, Jaipur with 100% Vastu and bank approvals. You can also connect directly with our sales director at +91 8905641356.',
          },
        ]);
      }
    } catch (error) {
      console.error('Concierge request failed:', error);
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          text: 'Namaste! Please feel free to call our sales desk directly at +91 8905641356 or connect on WhatsApp for immediate brochures.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForwardLeadWhatsApp = () => {
    const lastUserQuery = messages.filter(m => m.role === 'user').map(m => m.text).join(' | ');
    const text = `Hello Krishna Residency Team,

I chatted with Krishna AI Concierge on your website. Here is my inquiry summary:
${leadSummary ? `📋 Details: ${leadSummary}\n` : ''}
💬 Queries asked: "${lastUserQuery.slice(-200) || 'Interested in 3 & 4 BHK units at Jhotwara'}"

Please connect with me and schedule a site visit at your Niwaru Road site. Thank you!`;

    openWhatsApp(text);
  };

  const suggestionChips = [
    'What is the price of 3 BHK & 4 BHK?',
    'How is 100% Vastu compliance ensured?',
    'What is the distance to Jaipur Railway Station?',
    'Do you have budget options under 45 Lakhs?',
    'Can I get an 80% bank loan from SBI?',
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-stone-950 border border-stone-800 rounded-3xl shadow-2xl flex flex-col h-[85vh] max-h-[700px] overflow-hidden relative"
      >
        {/* Header */}
        <div className="bg-stone-900 px-6 py-4 border-b border-stone-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 font-bold shadow-md shadow-amber-500/20">
              <Sparkles className="w-5 h-5 text-stone-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white font-['Playfair_Display',serif]">
                  Krishna AI Concierge
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  24/7 Active
                </span>
              </div>
              <p className="text-[11px] text-stone-400">
                Official Assistant for Krishna Residency, Niwaru Rd, Jhotwara
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-stone-850 hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((msg, index) => {
            const isAi = msg.role === 'assistant';
            return (
              <div
                key={index}
                className={`flex gap-3 ${isAi ? 'justify-start' : 'justify-end'}`}
              >
                {isAi && (
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                    isAi
                      ? 'bg-stone-900 border border-stone-800 text-stone-200'
                      : 'bg-amber-500 text-stone-950 font-medium'
                  }`}
                >
                  {msg.text}
                </div>

                {!isAi && (
                  <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center text-stone-300 shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 justify-start items-center text-stone-400 text-xs">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <RefreshCw className="w-4 h-4 animate-spin" />
              </div>
              <span className="animate-pulse">Krishna AI is preparing your answer...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-stone-900/60 border-t border-stone-850 flex gap-2 overflow-x-auto no-scrollbar">
          {suggestionChips.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(chip)}
              className="text-[11px] whitespace-nowrap px-3 py-1.5 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 hover:border-amber-500/40 transition-all cursor-pointer shrink-0"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Lead Forward Banner (If lead summary exists or after user interactions) */}
        {messages.length > 2 && (
          <div className="px-4 py-2.5 bg-emerald-950/40 border-t border-emerald-900/60 flex items-center justify-between gap-3 text-xs">
            <span className="text-emerald-300 truncate">
              {leadSummary || 'Want to save this conversation and speak with the owner directly?'}
            </span>
            <button
              onClick={handleForwardLeadWhatsApp}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] flex items-center gap-1.5 shrink-0 cursor-pointer shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Forward to Owner WhatsApp</span>
            </button>
          </div>
        )}

        {/* Input Bar */}
        <div className="p-4 bg-stone-900 border-t border-stone-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Krishna Residency in English or Hindi..."
              className="flex-1 bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-stone-400 focus:border-amber-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold transition-all disabled:opacity-40 cursor-pointer shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
