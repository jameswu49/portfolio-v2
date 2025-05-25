import { LucideIcon } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export interface ProfileCardProps {
  socialLinks: SocialLink[];
}
