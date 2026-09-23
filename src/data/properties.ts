export interface Property {
  id: string;
  name: string;
  isFlagship?: boolean;
  tag: string;
  bhk: string;
  price: string;
  priceInLakhs: number;
  areaSqft: number;
  carpetAreaSqft?: number;
  location: string;
  subLocality: string;
  address: string;
  googleMapUrl: string;
  phone: string;
  image: string;
  gallery?: string[];
  specs: {
    bedrooms: number;
    bathrooms: number;
    balconies: number;
    parking: string;
    facing: string;
    status: string;
  };
  highlights: string[];
  whatsappMessage: string;
}

export const KRISHNA_RESIDENCY_UNITS: Property[] = [
  {
    id: 'krishna-3bhk',
    name: 'Krishna Residency – 3 BHK Royal Symphony',
    isFlagship: true,
    tag: 'Flagship Showcase',
    bhk: '3 BHK Luxury',
    price: '₹58.50 Lakhs',
    priceInLakhs: 58.5,
    areaSqft: 1550,
    carpetAreaSqft: 1180,
    location: 'Jhotwara, Jaipur',
    subLocality: 'Niwaru Road',
    address: 'Plot NO. 184,185,186,187, Rajendra path, 21 south colony, Niwaru Road, Jhotwara, Jaipur',
    googleMapUrl: 'https://maps.app.goo.gl/mfKSySFvJUa6c6pu6',
    phone: '8905641356',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      bedrooms: 3,
      bathrooms: 3,
      balconies: 2,
      parking: 'Covered Stilt Allotted',
      facing: 'North-East (100% Vastu)',
      status: 'Ready / Near Possession',
    },
    highlights: [
      '100% Vastu Compliant with Ishanya Pooja space',
      'High-speed automatic elevator with ARD backup',
      '2 Spacious cross-ventilated balconies with sunset views',
      'Modular kitchen layout with branded hardware fittings',
      'Pre-approved bank loans up to 85% (SBI / HDFC / ICICI)',
      '24-Hour sweet boring water + rainwater harvesting'
    ],
    whatsappMessage: 'Hello! I am interested in the 3 BHK Royal Symphony (₹58.50 Lakhs) at Krishna Residency, Niwaru Road, Jhotwara. Please share detailed floor plans, cost sheet, and schedule a site visit.',
  },
  {
    id: 'krishna-4bhk',
    name: 'Krishna Residency – 4 BHK Imperial Grandeur',
    isFlagship: true,
    tag: 'Flagship Luxury',
    bhk: '4 BHK Ultra Luxury',
    price: '₹78.50 Lakhs',
    priceInLakhs: 78.5,
    areaSqft: 2180,
    carpetAreaSqft: 1650,
    location: 'Jhotwara, Jaipur',
    subLocality: 'Niwaru Road',
    address: 'Plot NO. 184,185,186,187, Rajendra path, 21 south colony, Niwaru Road, Jhotwara, Jaipur',
    googleMapUrl: 'https://maps.app.goo.gl/mfKSySFvJUa6c6pu6',
    phone: '8905641356',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      bedrooms: 4,
      bathrooms: 4,
      balconies: 3,
      parking: 'Double Covered Stilt',
      facing: 'North-East (100% Vastu)',
      status: 'Ready / Near Possession',
    },
    highlights: [
      'Expansive Drawing + Dining hall with Italian tile finish',
      'Master suite with dedicated walk-in wardrobe and ensuite bath',
      '3 Panoramic wrap-around balconies with open skyline view',
      'Double-glazed UPVC sound-insulated windows',
      'Video door phone and smart digital entry lock',
      'Dedicated stilt parking with EV charging station'
    ],
    whatsappMessage: 'Hello! I am inquiring about the 4 BHK Imperial Grandeur (₹78.50 Lakhs) at Krishna Residency, Niwaru Road, Jhotwara. Please forward the brochure and available floor options.',
  },
  {
    id: 'krishna-penthouse',
    name: 'Krishna Residency – Skyview Penthouse & Deck',
    isFlagship: true,
    tag: 'Exclusive Signature',
    bhk: '4+1 BHK Penthouse',
    price: '₹1.15 Crore',
    priceInLakhs: 115,
    areaSqft: 2850,
    carpetAreaSqft: 2200,
    location: 'Jhotwara, Jaipur',
    subLocality: 'Niwaru Road',
    address: 'Plot NO. 184,185,186,187, Rajendra path, 21 south colony, Niwaru Road, Jhotwara, Jaipur',
    googleMapUrl: 'https://maps.app.goo.gl/mfKSySFvJUa6c6pu6',
    phone: '8905641356',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80'
    ],
    specs: {
      bedrooms: 5,
      bathrooms: 5,
      balconies: 4,
      parking: '2 Premium Covered Bays',
      facing: 'East-Facing Supreme Vastu',
      status: 'Ready / Limited Edition',
    },
    highlights: [
      'Private 450 sq.ft open sky terrace with Jaipur Aravalli views',
      'Double-height ceiling in grand living lounge',
      'Servant quarters with attached bath and separate service entry',
      'Jacuzzi provision on master terrace',
      'Direct private access via automated card elevator',
      'Top-floor tranquility with unhindered breeze'
    ],
    whatsappMessage: 'Hello! I would like to explore the exclusive Penthouse Suite (₹1.15 Cr) at Krishna Residency, Jhotwara. Please arrange a private site viewing with the leadership team.',
  },
];

// Jaipur Partner Properties (for options matching client budgets across Jaipur)
export const JAIPUR_PARTNER_PROPERTIES: Property[] = [
  {
    id: 'partner-kalwar-2bhk',
    name: 'Pink City Smart Greens',
    tag: 'Budget Friendly',
    bhk: '2 BHK Modern Flat',
    price: '₹34.50 Lakhs',
    priceInLakhs: 34.5,
    areaSqft: 980,
    carpetAreaSqft: 760,
    location: 'Kalwar Road, Jaipur',
    subLocality: 'Near Govindpura Circle',
    address: 'Kalwar Road Corridor, Near Hathoj, Jaipur, Rajasthan',
    googleMapUrl: 'https://maps.app.goo.gl/mfKSySFvJUa6c6pu6',
    phone: '8905641356',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80',
    specs: {
      bedrooms: 2,
      bathrooms: 2,
      balconies: 1,
      parking: 'Covered Parking',
      facing: 'East Facing',
      status: 'Ready to Move',
    },
    highlights: [
      'Ideal for first-time home buyers & rental investors',
      'Gated community with children play area and lift',
      'Close to Kalwar Road main commercial hub',
      '90% Bank loan available with PMAY interest subsidy'
    ],
    whatsappMessage: 'Hello! I saw the Pink City Smart Greens 2 BHK on Kalwar Road priced at ₹34.50 Lakhs on your website. Please send me full details and location map to my WhatsApp.',
  },
  {
    id: 'partner-sirsi-2bhk',
    name: 'Shree Krishna Greens & Gardens',
    tag: 'Affordable Comfort',
    bhk: '2 BHK Garden View',
    price: '₹42.00 Lakhs',
    priceInLakhs: 42.0,
    areaSqft: 1120,
    carpetAreaSqft: 860,
    location: 'Sirsi Road, Jaipur',
    subLocality: 'Near Meena Wala',
    address: 'Sirsi Road Ext., 10 mins from Vaishali Nagar, Jaipur',
    googleMapUrl: 'https://maps.app.goo.gl/mfKSySFvJUa6c6pu6',
    phone: '8905641356',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80',
    specs: {
      bedrooms: 2,
      bathrooms: 2,
      balconies: 2,
      parking: 'Stilt Parking',
      facing: 'North Facing',
      status: 'Under Construction (Possession in 3 mos)',
    },
    highlights: [
      'Just 7 minutes straight drive to Vaishali Nagar Amrapali circle',
      'Rooftop yoga lawn and community hall',
      'Modular kitchen included in the launch package',
      'Vastu compliant floor plan with spacious balconies'
    ],
    whatsappMessage: 'Hello! I am interested in the 2 BHK Shree Krishna Greens at Sirsi Road (₹42 Lakhs). Kindly send brochure and photos to my WhatsApp.',
  },
  {
    id: 'partner-mansarovar-3bhk',
    name: 'Royal Palms Residency',
    tag: 'Popular Family Choice',
    bhk: '3 BHK Spacious Flat',
    price: '₹64.00 Lakhs',
    priceInLakhs: 64.0,
    areaSqft: 1680,
    carpetAreaSqft: 1260,
    location: 'Mansarovar Extension, Jaipur',
    subLocality: 'Near Muhana Mandi Road',
    address: 'Patel Marg Extension, Mansarovar, Jaipur',
    googleMapUrl: 'https://maps.app.goo.gl/mfKSySFvJUa6c6pu6',
    phone: '8905641356',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80',
    specs: {
      bedrooms: 3,
      bathrooms: 3,
      balconies: 2,
      parking: 'Covered Bay',
      facing: 'North-East Facing',
      status: 'Ready to Move',
    },
    highlights: [
      'Proximity to Mansarovar Metro Station and City Park',
      'Clubhouse with gymnasium and indoor games room',
      '24/7 security guards and biometric access',
      'High rental demand area for working families'
    ],
    whatsappMessage: 'Hello! Please forward the details of Royal Palms Residency 3 BHK (₹64 Lakhs) in Mansarovar Extension to my WhatsApp.',
  },
  {
    id: 'partner-vaishali-3bhk',
    name: 'Vaishali Crest Luxury Tower',
    tag: 'High-Demand Posh Area',
    bhk: '3 BHK Premium Highrise',
    price: '₹89.00 Lakhs',
    priceInLakhs: 89.0,
    areaSqft: 1950,
    carpetAreaSqft: 1480,
    location: 'Vaishali Nagar West, Jaipur',
    subLocality: 'Gandhi Path West',
    address: 'Gandhi Path West, Near Amrapali Plaza, Vaishali Nagar, Jaipur',
    googleMapUrl: 'https://maps.app.goo.gl/mfKSySFvJUa6c6pu6',
    phone: '8905641356',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=80',
    specs: {
      bedrooms: 3,
      bathrooms: 3,
      balconies: 3,
      parking: 'Reserved Covered',
      facing: 'North-East Vastu',
      status: 'Ready to Move',
    },
    highlights: [
      'Heart of Jaipur’s prime retail and lifestyle hub',
      'Swimming pool, sky lounge, and fitness center',
      'Italian marble living room flooring & false ceiling',
      '5 minutes to top schools, fine-dine restaurants, and multiplexes'
    ],
    whatsappMessage: 'Hello! I am interested in the 3 BHK at Vaishali Crest, Gandhi Path West (₹89 Lakhs). Please share the walkthrough video and brochure.',
  },
  {
    id: 'partner-jagatpura-3bhk',
    name: 'Aura Boulevard Premium Homes',
    tag: 'IT & Airport Corridor',
    bhk: '3 BHK + Study',
    price: '₹76.00 Lakhs',
    priceInLakhs: 76.0,
    areaSqft: 1750,
    carpetAreaSqft: 1320,
    location: 'Jagatpura, Jaipur',
    subLocality: 'Mahal Road',
    address: 'Near Bombay Hospital, Mahal Road, Jagatpura, Jaipur',
    googleMapUrl: 'https://maps.app.goo.gl/mfKSySFvJUa6c6pu6',
    phone: '8905641356',
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=900&q=80',
    specs: {
      bedrooms: 3,
      bathrooms: 3,
      balconies: 2,
      parking: 'Covered Stilt',
      facing: 'East Facing',
      status: 'Ready to Move',
    },
    highlights: [
      '12 mins to Jaipur International Airport',
      'Walking distance to reputable multi-specialty hospitals',
      'Landscaped podium garden and badminton court',
      'Very high capital appreciation and steady rental yield'
    ],
    whatsappMessage: 'Hello! Please forward the floor plan and pricing sheet for Aura Boulevard 3 BHK in Jagatpura (₹76 Lakhs) to my WhatsApp number.',
  },
  {
    id: 'partner-ajmer-villa',
    name: 'The Grand Aravalli Sovereign Villa',
    tag: 'Ultra Luxury Gated Villa',
    bhk: '4 BHK Duplex Villa',
    price: '₹1.48 Crore',
    priceInLakhs: 148.0,
    areaSqft: 3100,
    carpetAreaSqft: 2450,
    location: 'Ajmer Road Expressway, Jaipur',
    subLocality: 'Near Mahindra SEZ Road',
    address: 'Ajmer Road High Corridor, Jaipur, Rajasthan',
    googleMapUrl: 'https://maps.app.goo.gl/mfKSySFvJUa6c6pu6',
    phone: '8905641356',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80',
    specs: {
      bedrooms: 4,
      bathrooms: 5,
      balconies: 3,
      parking: 'Private 2-Car Porch',
      facing: 'North-East Vastu',
      status: 'Ready to Move',
    },
    highlights: [
      'Independent private lawn and rooftop terrace gazebo',
      'Clubhouse with Olympic pool, tennis court, and banquet',
      '24/7 security with boom barrier and perimeter sensors',
      'Scenic Aravalli hills backdrop and unpolluted breeze'
    ],
    whatsappMessage: 'Hello! I am interested in the 4 BHK Sovereign Villa on Ajmer Road (₹1.48 Cr). Kindly arrange a site visit and forward the master plan to my WhatsApp.',
  },
];

export const ALL_PROPERTIES: Property[] = [...KRISHNA_RESIDENCY_UNITS, ...JAIPUR_PARTNER_PROPERTIES];

export const AMENITIES_LIST = [
  {
    title: 'High-Speed Elevators',
    desc: 'Automatic passenger elevators with ARD emergency backup and smooth VVVF drive.',
    icon: 'ArrowUpDown',
    badge: 'Standard 24x7',
  },
  {
    title: '100% Vastu Architecture',
    desc: 'North-East entrance orientations, Pooja nooks in Ishanya, and Agneya kitchens.',
    icon: 'Compass',
    badge: 'Certified',
  },
  {
    title: '3-Tier CCTV & Intercom',
    desc: 'Round-the-clock security monitoring, boundary surveillance, and video door phone.',
    icon: 'ShieldCheck',
    badge: 'Full Protection',
  },
  {
    title: 'Covered Stilt & EV Bay',
    desc: 'Weather-protected reserved parking slots with dedicated electric vehicle charging sockets.',
    icon: 'Car',
    badge: 'Reserved',
  },
  {
    title: 'Rooftop Garden & Deck',
    desc: 'Landscaped open-air sky deck with sit-out gazebo, meditation corner, and city vista.',
    icon: 'Trees',
    badge: 'Sky Lounge',
  },
  {
    title: 'Sweet Water & Rainwater',
    desc: 'Dual supply of sweet boring water and PHED pipeline backed by rainwater harvesting wells.',
    icon: 'Droplets',
    badge: 'Eco-Friendly',
  },
  {
    title: 'Earthquake Resistant RCC',
    desc: 'Seismic Zone-II compliant structural engineering with high-grade Fe550D TMT bars.',
    icon: 'Building2',
    badge: 'JDA Approved',
  },
  {
    title: 'Power Backup in Common Areas',
    desc: 'Silent diesel generator backup ensuring lights, elevators, and water pumps never pause.',
    icon: 'Zap',
    badge: 'Uninterrupted',
  },
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Grand Facade & Stilt Arrival',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Contemporary multi-storey elevation along Rajendra Path, Niwaru Road with ambient accent illumination.',
  },
  {
    id: 2,
    title: 'Royal Living & Dining Lounge',
    category: 'Interiors',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    description: 'Expansive living room with Italian glazed tile finish, concealed cove lights, and wide sunlit balcony.',
  },
  {
    id: 3,
    title: 'Gourmet Modular Kitchen',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    description: 'Agneya-corner Vastu compliant kitchen with granite countertops, soft-close drawers, and chimney duct.',
  },
  {
    id: 4,
    title: 'Master Bedroom Suite',
    category: 'Bedrooms',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    description: 'Nairutya corner sanctuary with wooden textured flooring, attached bathroom, and private dresser.',
  },
  {
    id: 5,
    title: 'Panoramic Sunset Balcony',
    category: 'Balconies',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    description: 'Wide, airy balcony overlooking the scenic Jaipur skyline with anti-skid wooden finish tiles.',
  },
  {
    id: 6,
    title: 'Rooftop Landscape & Gazebo',
    category: 'Terrace',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    description: 'Elevated terrace garden designed for evening strolls, family gatherings, and morning pranayama.',
  },
];
