import React from "react";
import Props from "./navbar-props";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

const Navbar = ({}: Props) => {
  const links = [
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
            <link.icon className="size-7" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
