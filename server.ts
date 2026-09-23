import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Gemini Client
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

const PROPERTY_KNOWLEDGE = `
Property Name: Krishna Residency
Developer & Site Office: Saksham Builder and colonizer
Google Maps Listing Address: Saksham Builder and colonizer, Rajendra path, Niwaru Rd, Jhotwara, Jaipur, Rajasthan 302012
Site Location: Plot NO. 184, 185, 186, 187, Rajendra path, 21 south colony, Niwaru Road, Jhotwara, Jaipur, Rajasthan 302012
Official Google Maps Link: https://maps.app.goo.gl/mfKSySFvJUa6c6pu6
Contact Phone & WhatsApp: +91 8905641356 / 8905641356

Units & Configurations:
1. 3 BHK Royal Symphony (Super Built-up: 1,550 sq.ft | Carpet: 1,180 sq.ft):
   - Price: Starting at ₹58.5 Lakhs
   - 3 Bedrooms, 3 Bathrooms, 2 Wide Balconies, Separate Pooja Niche (North-East Vastu), Modular Kitchen with Chimney point.
2. 4 BHK Imperial Grandeur (Super Built-up: 2,180 sq.ft | Carpet: 1,650 sq.ft):
   - Price: Starting at ₹78.5 Lakhs
   - 4 Spacious Bedrooms, 4 En-suite Bathrooms, Dresser Room, 3 Balconies, Italian Glazed Vitrified Tiles, Drawing + Dining Grand Hall.
3. Sky Penthouse Suite (Super Built-up: 2,850 sq.ft):
   - Price: Starting at ₹1.15 Cr
   - Double-height living, Private open sky deck/terrace, Jacuzzi provision, 4 Master Suites + Servant room.

Key Amenities & Features:
- JDA Approved & RERA compliant development
- 100% Vastu-compliant layout (Ishanya North-East Pooja, Agneya South-East Kitchen, Nairutya South-West Master Bedroom)
- Automatic High-Speed Elevators with ARD (Automatic Rescue Device)
- 3-Tier Security with 24/7 CCTV surveillance and Video Door Phone
- Covered Dedicated Stilt Parking with EV Charging provisions
- Rooftop Landscaped Garden, Gazebo, Yoga Deck, and Walking Track
- 24/7 Sweet Boring Water + PHED Line + Rainwater Harvesting
- Earthquake Resistant RCC Frame Structure (Zone II compliant)
- Bank Loan Approved by SBI, HDFC, ICICI, PNB (Up to 80%-85% financing)

Location Distances:
- Niwaru Road Market / Daily Needs: 2 minutes walking (200m)
- Jhotwara Main Circle: 3-5 minutes (1.2 km)
- Vaishali Nagar Hub & Amrapali Plaza: 12 minutes (6.5 km)
- Jaipur Railway Junction: 15-18 minutes (8.5 km)
- Sindhi Camp Central Bus Stand: 18-20 minutes (10 km)
- Jaipur International Airport (Sanganer): 35-40 minutes (22 km)
- Nearby Schools: Podar World School, MPS, St. Anselm's (within 3-5 km)
- Hospitals: Kanwatiya Govt Hospital, Sparsh Hospital (within 2-4 km)

Partner Jaipur Properties for Other Budgets:
- Krishna Heights (Vaishali Nagar West): 3 BHK Luxury, ₹85L - ₹1.1 Cr
- Pink City Smart Homes (Kalwar Road): 2 BHK & 3 BHK Budget, ₹32L - ₹42L
- Royal Palms (Mansarovar Ext.): 3 & 4 BHK, ₹68L - ₹95L
- Green Meadows (Jagatpura Near Airport): 3 BHK Premium, ₹75L - ₹1.25 Cr
- Aravalli View Luxury Villas (Ajmer Road): 4 BHK Independent Villa, ₹1.45 Cr
`;

// 1. AI Concierge Endpoint
app.post('/api/ai/concierge', async (req, res) => {
  try {
    const { messages, userQuery } = req.body;
    const promptText = userQuery || (messages && messages[messages.length - 1]?.text) || 'Hello';

    if (!ai) {
      return res.json({
        reply: `Namaste! Welcome to Krishna Residency, Jhotwara, Jaipur. 
We offer premium 3 BHK (from ₹58.5 Lakhs) and 4 BHK (from ₹78.5 Lakhs) apartments on Niwaru Road, 100% Vastu compliant and bank approved.
You can reach our sales desk directly at +91 8905641356 or visit us at Plot 184-187, Rajendra Path, 21 South Colony. How can I assist you with floor plans or a site visit?`,
        leadSummary: null,
      });
    }

    const conversationHistory = Array.isArray(messages)
      ? messages.slice(-5).map((m: { role: string; text: string }) => `${m.role === 'user' ? 'Buyer' : 'Concierge'}: ${m.text}`).join('\n')
      : '';

    const systemInstruction = `You are "Krishna AI", the warm, professional, and knowledgeable 24/7 Property Concierge for "Krishna Residency" located in Niwaru Road, Jhotwara, Jaipur.
Your tone is welcoming, polite (using courteous Rajasthani/Indian hospitality: "Namaste", "Ji", etc.), and highly informed.
You answer in the language the user asks in (English, Hindi, or Hinglish).
Use this authoritative property data:
${PROPERTY_KNOWLEDGE}

Instructions:
1. Always address questions accurately regarding Krishna Residency's pricing, 3/4 BHK specs, Vastu features, bank loans, and location advantages.
2. If the user asks for properties in other Jaipur localities (Vaishali Nagar, Mansarovar, Jagatpura, Kalwar Road) or different budgets, reference the partner properties.
3. Invite them to schedule a site visit or send their query directly to owner's WhatsApp at +91 8905641356.
4. Keep responses concise (120-180 words), organized with bullet points where helpful.
5. If the user mentions their name, preferred BHK, budget, or visit date, compile a brief 1-line lead summary at the end after "LEAD_SUMMARY: [details]".`;

    const fullPrompt = `${conversationHistory ? `Previous Conversation:\n${conversationHistory}\n\n` : ''}User Question: ${promptText}\n\nAnswer:`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: fullPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const rawOutput = response.text || '';
    let reply = rawOutput;
    let leadSummary: string | null = null;

    if (rawOutput.includes('LEAD_SUMMARY:')) {
      const parts = rawOutput.split('LEAD_SUMMARY:');
      reply = parts[0].trim();
      leadSummary = parts[1].trim();
    }

    res.json({ reply, leadSummary });
  } catch (error: unknown) {
    console.error('Concierge API Error:', error);
    res.json({
      reply: `Namaste! Krishna Residency offers luxury 3 BHK & 4 BHK apartments at Rajendra Path, Niwaru Road, Jhotwara, Jaipur. Starting at ₹58.5 Lakhs with 100% Vastu compliance and SBI/HDFC bank loan approval. Please call or WhatsApp our director directly at +91 8905641356 for instant floor plans!`,
      leadSummary: null,
    });
  }
});

// 2. AI Interior Moodboard Endpoint
app.post('/api/ai/interior-moodboard', async (req, res) => {
  try {
    const { room, style, preferences } = req.body;

    if (!ai) {
      return res.json({
        title: `${style} Style for ${room}`,
        concept: `An exquisite blend of contemporary luxury and Jaipur architectural warmth tailored for Krishna Residency's spacious layouts.`,
        colors: [
          { name: 'Jaipur Sandstone Warmth', hex: '#D4A373' },
          { name: 'Imperial Ivory', hex: '#FDFBF7' },
          { name: 'Royal Brass Accent', hex: '#C5A059' },
          { name: 'Deep Slate Shadow', hex: '#2B2D42' },
        ],
        materials: ['Italian Glazed Vitrified Tiles', 'Brushed Champagne Brass Accents', 'Acoustic Fluted Wall Paneling', 'Natural Teak Wood Accents'],
        lighting: 'Recessed warm cove lighting (3000K) with statement pendant over central seating and ambient wall sconces.',
        vastuTip: 'Maintains open North-East energy flow with light furnishings and serene natural light through wide balconies.',
        jaipurTouch: 'Handcrafted subtle jali patterns on privacy screens reflecting heritage Pink City craftmanship.',
      });
    }

    const prompt = `Generate a luxury interior design moodboard and spatial concept for Krishna Residency apartments in Jhotwara, Jaipur.
Room: ${room || 'Grand Living Room'}
Aesthetic Style: ${style || 'Jaipur Heritage Sandstone & Contemporary'}
Additional Buyer Notes: ${preferences || 'Airy, luxurious, Vastu-friendly with abundant natural sunlight'}

Return your response in strictly VALID JSON format without markdown fences or extra commentary with the following keys:
{
  "title": "Title of the interior concept",
  "concept": "2-3 sentences explaining the design vision and mood",
  "colors": [
    {"name": "Color name", "hex": "#HEXCODE"},
    {"name": "Color name", "hex": "#HEXCODE"},
    {"name": "Color name", "hex": "#HEXCODE"},
    {"name": "Color name", "hex": "#HEXCODE"}
  ],
  "materials": ["Material 1", "Material 2", "Material 3", "Material 4"],
  "lighting": "Detailed lighting temperature and fixture recommendation",
  "vastuTip": "Vastu harmony tip for this specific room in Jaipur homes",
  "jaipurTouch": "Unique Rajasthani or Jaipur architectural accent suggestion"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.6,
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json(parsed);
  } catch (error: unknown) {
    console.error('Moodboard API Error:', error);
    res.json({
      title: 'Contemporary Jaipur Luxury',
      concept: 'A bright, elegant interior harmony crafted for the spacious dimensions of Krishna Residency.',
      colors: [
        { name: 'Jaipur Sandstone', hex: '#D4A373' },
        { name: 'Chantilly Ivory', hex: '#FAF9F6' },
        { name: 'Royal Brushed Brass', hex: '#C5A059' },
        { name: 'Charcoal Slate', hex: '#1E293B' },
      ],
      materials: ['Vitrified Italian Finish Flooring', 'Textured Linen Drapery', 'Warm Teak Veneer', 'Sleek Metal Trims'],
      lighting: 'Concealed LED 3000K cove light with magnetic track spotlights and focal chandelier.',
      vastuTip: 'Keep central Brahmasthan and north-east corners uncluttered for maximum positive prana.',
      jaipurTouch: 'Geometric Jharokha inspired back-lit screen in living/foyer area.',
    });
  }
});

// 3. AI Investment & EMI Advisor Endpoint
app.post('/api/ai/investment-advisor', async (req, res) => {
  try {
    const { propertyPrice, downPayment, tenureYears, interestRate, monthlyEMI, propertyName } = req.body;

    if (!ai) {
      return res.json({
        verdict: 'Excellent Capital Appreciation Potential',
        minIncomeRecommended: `₹${Math.round(monthlyEMI * 2.2).toLocaleString('en-IN')} / month`,
        microMarketOutlook: 'Niwaru Road & Jhotwara have registered a 7-9% annual appreciation due to rapid connectivity to Vaishali Nagar and the Jaipur Ring Road corridor.',
        rentalYield: 'Expected rental yield of 3.8% - 4.5% (approx ₹20,000 - ₹30,000/month for 3 BHK units).',
        taxBenefits: 'Eligible for up to ₹2,00,000 deduction on home loan interest under Sec 24(b) and up to ₹1,50,000 on principal repayment under Sec 80C.',
        expertRecommendation: 'Locking in at current pre-handover rates offers immediate equity upside before new infrastructure drives higher circle rates in Jhotwara.',
      });
    }

    const prompt = `Act as an expert Jaipur Real Estate Financial Advisor analyzing a property purchase:
Property Name: ${propertyName || 'Krishna Residency (Niwaru Road, Jhotwara, Jaipur)'}
Property Value: ₹${(propertyPrice || 6000000).toLocaleString('en-IN')}
Down Payment: ₹${(downPayment || 1200000).toLocaleString('en-IN')}
Loan Tenure: ${tenureYears || 20} Years
Interest Rate: ${interestRate || 8.5}%
Calculated Monthly EMI: ₹${(monthlyEMI || 45000).toLocaleString('en-IN')}

Provide an investment and financial viability breakdown for this purchase in Jhotwara / Jaipur.
Return your response in strictly VALID JSON format without markdown fences or extra commentary with the following keys:
{
  "verdict": "A brief punchy verdict (e.g. 'Strong Long-Term Buy & High Rental Demand')",
  "minIncomeRecommended": "Recommended monthly household income formatted in INR",
  "microMarketOutlook": "Specific 2-3 sentence insight on Jhotwara / Niwaru Road real estate appreciation catalysts in Jaipur",
  "rentalYield": "Projected rental yield percentage and monthly rental estimate for this configuration",
  "taxBenefits": "Summary of annual tax savings under Indian Income Tax Act Sec 24(b) and Sec 80C",
  "expertRecommendation": "Strategic recommendation for the buyer on loan structure and timing"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.5,
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json(parsed);
  } catch (error: unknown) {
    console.error('Investment Advisor Error:', error);
    const fallbackEMI = Number(req.body?.monthlyEMI) || 45000;
    res.json({
      verdict: 'High-Growth Jaipur Micro-market',
      minIncomeRecommended: `₹${Math.round(fallbackEMI * 2.3).toLocaleString('en-IN')} / month`,
      microMarketOutlook: 'Jhotwara is a self-sustaining educational and commercial hub with increasing demand from Vaishali Nagar overflows.',
      rentalYield: 'Projected 4.0% - 4.6% rental yield with consistent tenant occupancy.',
      taxBenefits: 'Save up to ₹70,000 - ₹1,10,000 in income tax annually through Sec 24(b) & Sec 80C deductions.',
      expertRecommendation: 'Opting for 80% LTV with an SBI/HDFC pre-approved loan at Krishna Residency ensures safe capital allocation.',
    });
  }
});

// Vite middleware in development or static serve in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
} else {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
}

app.listen(port, '0.0.0.0', () => {
  console.log(`Krishna Residency portal running at http://localhost:${port}`);
});
