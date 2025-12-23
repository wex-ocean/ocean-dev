// Portfolio types
export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  icon: any;
  title: string;
  description: string;
}

export interface ContactInfo {
  icon: any;
  label: string;
  value: string;
  href: string;
}

// Auth types
export interface Profile {
  id: string;
  username?: string;
  email?: string;
  avatar_url?: string;
  created_at?: string;
  updated_at?: string;
}
