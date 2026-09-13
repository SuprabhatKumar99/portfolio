export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: string;
  primary?: boolean;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  location: string;
  email: string;
  availability: string;
  avatarUrl: string;
  resumeUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  stats: {
    label: string;
    value: string;
    detail?: string;
  }[];
  philosophies: {
    title: string;
    description: string;
    icon: string;
  }[];
}
