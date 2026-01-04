
export interface Project {
  title: string;
  description: string;
  category: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}
