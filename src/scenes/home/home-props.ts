import { LucideIcon } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export interface HomeProps {
  name: string;
  jobTitle: string;
  imageUrl: string;
  email: string;
  socialLinks: SocialLink[];
}
