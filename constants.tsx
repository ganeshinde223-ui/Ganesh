import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Linkedin, 
  TrendingUp, 
  BookOpen, 
  BarChart2, 
  ShieldCheck, 
  Globe, 
  Users 
} from 'lucide-react';
import { Course, Testimonial, SocialLink, ValueProp } from './types';

export const WHATSAPP_NUMBER = "+916360483828";
export const WHATSAPP_DISPLAY = "+91-6360483828";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/ganesh.shinde.165037',
    icon: Facebook,
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/shinde_g_patil/',
    icon: Instagram,
  },
  {
    platform: 'YouTube',
    url: 'https://www.youtube.com/@TradeWithGanesh-001',
    icon: Youtube,
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ganesh-shinde-b5376314/',
    icon: Linkedin,
  },
];

export const VALUE_PROPS: ValueProp[] = [
  {
    title: "No Experience Required",
    description: "Start from zero. We guide you step-by-step from basics to advanced.",
    icon: Users,
  },
  {
    title: "6 Languages Supported",
    description: "Learn in Telugu, Tamil, Kannada, Marathi, Hindi, or English.",
    icon: Globe,
  },
  {
    title: "Live Market Mentorship",
    description: "Trade alongside us during market hours. Real-time learning.",
    icon: TrendingUp,
  },
  {
    title: "Proven Strategies",
    description: "Master Price Action and Supply & Demand concepts.",
    icon: BarChart2,
  },
];

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: "Equity Market Beginner to Pro",
    description: "The perfect foundation for new traders. Understand market structure and basics.",
    features: ["Basics of Stock Market", "Market Structure", "Investment Psychology", "Online Live Classes"],
    iconName: "BookOpen"
  },
  {
    id: 'c2',
    title: "Intraday + Swing Trading",
    description: "Generate regular income with short-term trading strategies.",
    features: ["Day Trading Setups", "Swing Positioning", "Stock Selection", "Entry/Exit Strategies"],
    iconName: "TrendingUp"
  },
  {
    id: 'c3',
    title: "Futures & Options (F&O) Masterclass",
    description: "Advanced leverage trading for serious aspirants.",
    features: ["Option Greeks", "Hedging Strategies", "Nifty & BankNifty", "Risk Management"],
    iconName: "BarChart2"
  },
  {
    id: 'c4',
    title: "Price Action & Demand–Supply",
    description: "Read the charts like a professional without lagging indicators.",
    features: ["Candlestick Patterns", "Support & Resistance", "Zone Identification", "Institutional Moves"],
    iconName: "Activity"
  },
  {
    id: 'c5',
    title: "Technical Analysis & Chart Patterns",
    description: "Master the art of reading charts across any timeframe.",
    features: ["Classic Patterns", "Trendlines", "Multi-timeframe Analysis", "Breakout Trading"],
    iconName: "Monitor"
  },
  {
    id: 'c6',
    title: "Risk Management & Psychology",
    description: "The missing link between losing and profitable traders.",
    features: ["Position Sizing", "Emotional Discipline", "Trading Journal", "Capital Protection"],
    iconName: "ShieldCheck"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: "Rajesh Kumar",
    role: "Full-time Trader",
    content: "I started with zero knowledge. Ganesh Sir's teaching in Hindi made it so easy. Now I trade F&O confidently.",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 't2',
    name: "Sneha Reddy",
    role: "Student",
    content: "The language support in Telugu was a game changer for me. The live market mentorship is the best part.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 't3',
    name: "Amit Patil",
    role: "Business Owner",
    content: "I recovered my past losses after learning proper Risk Management here. Highly recommended!",
    image: "https://picsum.photos/100/100?random=3"
  },
  {
    id: 't4',
    name: "Priya Menon",
    role: "Homemaker",
    content: "Swing trading allows me to manage my home and earn. Thank you Ganesh Trading Academy.",
    image: "https://picsum.photos/100/100?random=4"
  },
  {
    id: 't5',
    name: "Vikram Singh",
    role: "IT Professional",
    content: "Technical analysis concepts are explained very clearly. No indicators, just pure price action.",
    image: "https://picsum.photos/100/100?random=5"
  },
  {
    id: 't6',
    name: "Karthik N.",
    role: "College Student",
    content: "The free starter kit gave me the confidence to join. Best decision for my financial future.",
    image: "https://picsum.photos/100/100?random=6"
  }
];
