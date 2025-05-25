import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import {
  HomeViewModelInitProps as ViewModelInitProps,
  HomeViewModelProps as ViewModelProps,
} from "./props";

const useHomeViewModel: (props: ViewModelInitProps) => ViewModelProps = () => {
  const socialLinks = [
    {
      icon: GithubIcon,
      href: "https://github.com/yourusername",
      label: "GitHub Profile",
    },
    {
      icon: LinkedinIcon,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn Profile",
    },
    {
      icon: MailIcon,
      href: "mailto:your.email@example.com",
      label: "Email",
    },
  ];

  return { socialLinks };
};

export default useHomeViewModel;
