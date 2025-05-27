"use client";

import React from "react";
import Props from "./navbar-props";
import {
  BoxesIcon,
  FolderIcon,
  HomeIcon,
  MailIcon,
  MessageSquareQuoteIcon,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = ({}: Props) => {
  const pathname = usePathname();

  const getIconColor = (href: string) => {
    if (pathname === href) {
      return "text-primary-foreground";
    }
    return "text-white";
  };

  const links = [
    {
      icon: HomeIcon,
      href: "/",
      label: "Home",
    },
    {
      icon: UserRound,
      href: "/about",
      label: "About",
    },
    {
      icon: BoxesIcon,
      href: "/skills",
      label: "Skills",
    },
    {
      icon: FolderIcon,
      href: "/projects",
      label: "Projects",
    },
    {
      icon: MessageSquareQuoteIcon,
      href: "/testimonials",
      label: "Testimonials",
    },
    {
      icon: MailIcon,
      href: "/contact",
      label: "Contact",
    },
  ];

  return (
    <div className="text-white border rounded-4xl flex w-[85%] bg-[#1C1C1C] xl:w-2/4">
      <div className="flex w-full justify-evenly py-2">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <link.icon
              aria-label={link.label}
              className={cn("size-7", getIconColor(link.href))}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
