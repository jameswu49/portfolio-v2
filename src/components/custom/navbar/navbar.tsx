"use client";

import React from "react";
import Props from "./navbar-props";
import { HomeIcon, UserRound } from "lucide-react";
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
      icon: HomeIcon,
      href: "/",
      label: "Home",
    },
    {
      icon: HomeIcon,
      href: "/",
      label: "Home",
    },
    {
      icon: HomeIcon,
      href: "/",
      label: "Home",
    },
  ];

  return (
    <div className="text-white border rounded-4xl flex w-2/4 bg-black">
      <div className="flex w-full justify-around py-2">
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
