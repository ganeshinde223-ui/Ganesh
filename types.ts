import { LucideIcon } from 'lucide-react';

export interface Course {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: string; // Used to map to Lucide icons dynamically if needed, or just strictly typed
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface SocialLink {
  platform: 'Facebook' | 'Instagram' | 'YouTube' | 'LinkedIn';
  url: string;
  icon: LucideIcon;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface MentorFeature {
  text: string;
}
