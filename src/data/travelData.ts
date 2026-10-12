export interface TravelerProfile {
  id: string;
  name: string;
  country: string;
  avatar: string;
  bio?: string;
  location?: string;
  recentPost?: string;
  recentImages?: string[];
  role?: string;
  followers?: string;
  tripsCount?: number;
}

export interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  visitorsCount: string;
  avatars: string[];
  tag?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export const NAV_LINKS = [
  { label: "Reviews", href: "/#experience" },
  { label: "People", href: "/#community" },
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/#pricing" },
];

export const ALL_NAV_LINKS = [
  { label: "Reviews", href: "/#experience" },
  { label: "People", href: "/#community" },
  { label: "Features", href: "/features" },
  { label: "About Us", href: "/about" },
  { label: "Partners", href: "/#popular" },
  { label: "Feedbacks", href: "/#feedbacks" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];


export const COMMUNITY_TRAVELERS: TravelerProfile[] = [
  {
    id: "smith",
    name: "Smith",
    country: "England",
    avatar: "/assets/avatars/smith-england.jpg",
    bio: "Solo trekker exploring historical trails and mountain passes across Europe and Asia.",
    location: "Lake District / Currently in Sajek",
    tripsCount: 18,
    followers: "4.2k",
  },
  {
    id: "jessica",
    name: "Jessica",
    country: "Egypt",
    avatar: "/assets/avatars/jessica-egypt.jpg",
    bio: "Cultural nomad and documentary photographer sharing stories of ancient cities.",
    location: "Cairo / Traveling through SE Asia",
    tripsCount: 24,
    followers: "8.9k",
  },
  {
    id: "julie",
    name: "Julie",
    country: "Poland",
    avatar: "/assets/avatars/julie-poland.jpg",
    bio: "Hiking enthusiast and coffee lover seeking fellow travelers for sunrise summits.",
    location: "Krakow / Exploring Sajek Hill",
    tripsCount: 12,
    followers: "3.1k",
  },
  {
    id: "farzan",
    name: "Farzan",
    country: "Georgia",
    avatar: "/assets/avatars/farzan-georgia.jpg",
    bio: "Caucasus mountain guide and winter backpacking specialist.",
    location: "Tbilisi / High altitude trails",
    tripsCount: 31,
    followers: "6.7k",
  },
  {
    id: "sajon",
    name: "Sajon",
    country: "Finland",
    avatar: "/assets/avatars/sajon-finland.jpg",
    bio: "Wilderness camper, Northern lights hunter, and road trip storyteller.",
    location: "Helsinki / Arctic Expeditions",
    tripsCount: 15,
    followers: "5.4k",
  },
  {
    id: "martina",
    name: "Martina",
    country: "Bangladesh",
    avatar: "/assets/avatars/martina-bangladesh.jpg",
    bio: "Local community host & explorer connecting international travelers to hidden valleys.",
    location: "Dhaka / Sajek Valley",
    tripsCount: 29,
    followers: "11.2k",
  },
];

export const POPULAR_TRAVELERS_FEATURED: TravelerProfile[] = [
  {
    id: "alex-viojwan",
    name: "Alex Viojwan",
    country: "England",
    location: "Sajek Zero Point",
    avatar: "/assets/avatars/alex-viojwan.jpg",
    bio: "The original solo female travel blogger who documents her blog Adventurous Alex with stories from 40+ countries.",
    recentPost: "Sunrise above the clouds in Sajek Valley.",
    recentImages: ["/assets/destinations/sajek-hill-sunset.jpg"],
    tripsCount: 42,
    followers: "15.8k",
  },
  {
    id: "sandy-kart",
    name: "Sandy Kart",
    country: "Canada",
    location: "Sajek Hill Spot",
    avatar: "/assets/avatars/sandy-kart.jpg",
    bio: "Travel blogger and van-lifer who documents her globetrotting journey via blog Adventurous Kate.",
    recentPost: "Chasing turquoise lakes and pine forests.",
    recentImages: [
      "/assets/destinations/lake-valley-green.jpg",
      "/assets/destinations/sajek-hill-sunset.jpg",
    ],
    tripsCount: 38,
    followers: "19.3k",
  },
];

export const FEATURED_DESTINATIONS: Destination[] = [
  {
    id: "sajek-hill",
    name: "Sajek Hill Spot",
    location: "Rangamati, Bangladesh",
    image: "/assets/destinations/sajek-hill-sunset.jpg",
    visitorsCount: "+42 travellers",
    avatars: [
      "/assets/avatars/smith-england.jpg",
      "/assets/avatars/jessica-egypt.jpg",
      "/assets/avatars/farzan-georgia.jpg",
    ],
    tag: "Trending",
  },
  {
    id: "zero-point",
    name: "Zero Point",
    location: "Valley Pass",
    image: "/assets/destinations/lake-valley-green.jpg",
    visitorsCount: "+28 travellers",
    avatars: [
      "/assets/avatars/julie-poland.jpg",
      "/assets/avatars/sajon-finland.jpg",
    ],
    tag: "Scenic",
  },
];

export const EXPERIENCE_FEATURES = [
  {
    id: "sign-up",
    title: "Sign Up",
    description: "Make an account and login to keep yourself updated into travellers platform.",
    icon: "scan",
  },
  {
    id: "create-events",
    title: "Create Events",
    description: "Create an event to gather your fellow travellers and get to know them.",
    icon: "calendar",
  },
  {
    id: "share-memories",
    title: "Share Memories",
    description: "Upload and share stories with your fellow travellers anytime.",
    icon: "sparkles",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "standard",
    name: "Standard",
    monthlyPrice: 29,
    annualPrice: 24, // $288 billed annually ($24/mo)
    description: "All the basics for businesses and solo travelers that are just getting started.",
    features: [
      "Organizes your travel plans",
      "Find places near hotel",
      "Tallies & displays travel stats",
      "Access essential community features",
    ],
    isPopular: false,
  },
  {
    id: "essentials",
    name: "Essentials",
    monthlyPrice: 99,
    annualPrice: 79, // $948 billed annually ($79/mo)
    description: "Advanced features for travelling with fellow buddies that are needed.",
    features: [
      "Tracks reward programs",
      "Find places near hotel",
      "Find alternative flights",
      "Shows transportation option",
      "Connect with verified travel companions",
    ],
    isPopular: true,
  },
  {
    id: "premium",
    name: "Premium",
    monthlyPrice: 129,
    annualPrice: 99, // $1,188 billed annually ($99/mo)
    description: "Advanced features for travel pros and trip organizers who need more customization.",
    features: [
      "Country-specific travel info",
      "Finds better hotels & lodges",
      "Shows security wait items",
      "Tracks reward programs",
      "Dedicated concierge trip assistance",
    ],
    isPopular: false,
  },
];

export interface FooterLink {
  label: string;
  href: string;
  badge?: string;
  isAvailable?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about", isAvailable: true },
      { label: "Features", href: "/features", isAvailable: true },
      { label: "Careers", href: "/about#values", badge: "Planned", isAvailable: false },
      { label: "Blog", href: "/about#story", badge: "Planned", isAvailable: false },
      { label: "Press Info", href: "/about", badge: "Media kit", isAvailable: false },
      { label: "Successes", href: "/#experience", isAvailable: true },
    ],
  },
  {
    title: "Travellers",
    links: [
      { label: "Why Travellers", href: "/about", isAvailable: true },
      { label: "Pricing", href: "/#pricing", isAvailable: true },
      { label: "Customer Stories", href: "/#feedbacks", isAvailable: true },
      { label: "Enterprise", href: "/about#values", badge: "Roadmap", isAvailable: false },
      { label: "Security & Privacy", href: "/privacy#security", isAvailable: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Download App", href: "/#download", isAvailable: true },
      { label: "Product Showcase", href: "/showcase", isAvailable: true },
      { label: "Events & Meetups", href: "/#experience", isAvailable: true },
      { label: "Partners", href: "/#popular", isAvailable: true },
      { label: "Feature Guides", href: "/features", isAvailable: true },
      { label: "Help Center", href: "/privacy#contact", badge: "Beta", isAvailable: false },
      { label: "Developers", href: "/features", badge: "Roadmap", isAvailable: false },
      { label: "App Directory", href: "/#download", isAvailable: true },
    ],
  },
  {
    title: "Extras & Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy", isAvailable: true },
      { label: "Terms of Service", href: "/terms", isAvailable: true },
      { label: "Podcast", href: "/about", badge: "Upcoming", isAvailable: false },
      { label: "Travellers Shop", href: "/about", badge: "Upcoming", isAvailable: false },
      { label: "Travellers at Work", href: "/about#values", badge: "Community", isAvailable: false },
      { label: "Travellers Fund", href: "/about#values", badge: "Community", isAvailable: false },
      { label: "Integrations", href: "/features", badge: "Roadmap", isAvailable: false },
    ],
  },
];

export const ABOUT_VALUES = [
  {
    id: "connection",
    title: "Connection",
    subtitle: "Meaningful human bonds over superficial metrics.",
    description:
      "We believe that the most transformative journeys happen when people connect authentically with fellow explorers and local hosts, moving far beyond standard tourist itineraries.",
    accent: "bg-[#FFF8F2] text-[#FF5B3D] border-[#FF5B3D]/20",
  },
  {
    id: "exploration",
    title: "Exploration",
    subtitle: "Curiosity-driven journeys off the beaten path.",
    description:
      "Every ridge, valley, and village holds an untold story. We empower travelers to step boldly outside comfort zones with reliable companion networks by their side.",
    accent: "bg-[#FFF4E8] text-[#FF7A45] border-[#FF7A45]/20",
  },
  {
    id: "authenticity",
    title: "Authenticity",
    subtitle: "Raw stories and real, unvarnished perspectives.",
    description:
      "No manufactured influencer perfection. Our members share honest trail feedback, genuine campfire conversations, and authentic field discoveries.",
    accent: "bg-[#FFF9E6] text-[#FFA826] border-[#FFA826]/20",
  },
  {
    id: "community",
    title: "Community",
    subtitle: "A supportive global circle where no one travels alone.",
    description:
      "Whether you are embarking on your very first solo trip or guiding your fiftieth expedition, you are surrounded by fellow travelers who look out for one another.",
    accent: "bg-[#FFF8F2] text-[#FF5B3D] border-[#FF5B3D]/20",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Discover",
    headline: "Uncover curated valleys and trending trails",
    description:
      "Browse community-curated destinations like Sajek Hill and hidden lake viewpoints, complete with community check-ins, local trail notes, and real-time vibe updates.",
  },
  {
    step: "02",
    title: "Connect",
    headline: "Find companions heading your way",
    description:
      "Match with compatible travelers heading toward the same destination, sync itinerary dates, exchange direct advice, and coordinate group travels safely.",
  },
  {
    step: "03",
    title: "Explore Together",
    headline: "Create gatherings and cherish memories",
    description:
      "Host sunrise summit meetups, share photography highlights to the feed, and celebrate unforgettable journeys with lifelong friends made on the road.",
  },
];

export const DETAILED_FEATURES = [
  {
    id: "destinations",
    number: "01",
    tag: "DISCOVER DESTINATIONS",
    headline: "Find places worth exploring.",
    description:
      "Discover hidden scenic viewpoints, hilltop spots, and peaceful valleys curated by active travelers. See recent community activity, live check-ins, and realistic route tips before packing your bag.",
    bulletPoints: [
      "Visual destination spotlights with verified traveler check-ins",
      "Curated highlights for solo hiking, photography, and cultural travel",
      "Authentic trail advice without commercial tour sponsorship bias",
    ],
    mockupType: "destination",
  },
  {
    id: "travelers",
    number: "02",
    tag: "MEET FELLOW TRAVELLERS",
    headline: "Meet people who share your passion for travel.",
    description:
      "Find genuine companions who match your pace, destination wishlist, and travel philosophy. Whether you need a hiking buddy for an alpine pass or a city explorer in Southeast Asia, connection is a tap away.",
    bulletPoints: [
      "Traveler bios featuring travel pace, past expeditions, and country flags",
      "Direct buddy connection requests and mutual itinerary alignment",
      "Community profiles celebrating solo trekkers and digital nomads",
    ],
    mockupType: "travelers",
  },
  {
    id: "events",
    number: "03",
    tag: "CREATE & JOIN EVENTS",
    headline: "Make every journey a shared experience.",
    description:
      "Organize group hikes, sunrise summits, and cozy campfire chats with ease. Set dates, meeting spots, and gear expectations, then invite fellow community members to join the gathering.",
    bulletPoints: [
      "Demonstration event boards with confirmed attendee avatars",
      "Event location markers, departure times, and pacing indicators",
      "Group coordination chat previews before departure",
    ],
    mockupType: "events",
  },
  {
    id: "memories",
    number: "04",
    tag: "SHARE MEMORIES",
    headline: "Keep the memories. Share the stories.",
    description:
      "Preserve the emotional high points of your travels. Publish photo collections, journal entries, and personal insights so fellow members can learn from your journeys.",
    bulletPoints: [
      "High-resolution travel photo galleries with caption storytelling",
      "Interactive comments and encouragement from fellow community members",
      "Personal expedition scrapbook accessible across all your devices",
    ],
    mockupType: "memories",
  },
  {
    id: "community-network",
    number: "05",
    tag: "BUILD YOUR TRAVEL COMMUNITY",
    headline: "Your people are out there.",
    description:
      "Transform solitary wanderlust into a lifelong international network. Wherever your compass points next, arrive with friends waiting at the local basecamp.",
    bulletPoints: [
      "Interactive world waypoint visualization of community hubs",
      "Cross-border explorer circles and regional interest groups",
      "A warm, welcoming global village for both novice and veteran explorers",
    ],
    mockupType: "community",
  },
];

