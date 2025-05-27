"use client";

import React from "react";
import Props from "./profile-card-props";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const ProfileCard = ({}: Props) => {
  const socialLinks = [
    {
      icon: GithubIcon,
      href: "https://github.com/jameswu49",
      label: "GitHub Profile",
    },
    {
      icon: LinkedinIcon,
      href: "https://linkedin.com/in/jameswu49",
      label: "LinkedIn Profile",
    },
    {
      icon: MailIcon,
      href: "mailto:jameswu49@gmail.com",
      label: "Email",
    },
  ];

  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div
      className={cn(
        "flex items-center justify-center my-10 xl:justify-start xl:h-screen xl:my-0",
        !isHome && "hidden xl:flex",
      )}
    >
      {/* Container */}
      <div className="border border-white rounded-4xl p-4 relative text-white w-110 h-180 xl:h-[90dvh] xl:ml-10 2xl:h-200 overflow-auto">
        {/* Name and Title */}
        <div className="pl-10 leading-5 my-5">
          <h1 className="text-2xl font-bold">Jimmy Wu</h1>
          <h2 className="text-xl font-bold pl-10">Software Engineer</h2>
        </div>

        {/* Profile Image and Email */}
        <div className="flex items-center justify-between px-5 my-10">
          <Image
            src="/profile.jpg"
            alt="Jimmy Wu"
            width={500}
            height={500}
            className="rounded-xl size-60 object-cover object-top"
          />

          {/* Social Links */}
          <div className="border-r-3 border-primary px-6 space-y-4">
            {socialLinks.map((link, index) => (
              <ProfileIcons key={index} link={link} />
            ))}
          </div>
        </div>

        <div className="space-y-3 px-5">
          <h2 className="text-white text-xl">jameswu49@gmail.com</h2>
          <h3 className="text-white text-2xl pl-7">California, USA</h3>
          <p className="text-white text-lg opacity-50 mt-20">
            Let&apos;s build something great together!
          </p>
        </div>

        {/* Email Button */}
        <div className="flex justify-center bottom-10 left-0 w-full xl:mt-10 2xl:mt-20">
          <Link href="/contact">
            <Button className="bg-primary-foreground text-black p-6 rounded-xl cursor-pointer">
              <div className="flex gap-3 px-4 items-center text-xl font-mono tracking-0">
                <MailIcon className="size-6" /> Contact Me
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

const ProfileIcons = ({
  link,
}: {
  link: { icon: React.ElementType; href: string; label: string };
}) => {
  const Icon = link.icon;
  return (
    <div className="rounded-full border-primary border size-10 flex items-center justify-center p-6 cursor-pointer">
      <Link
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
      >
        <Icon />
      </Link>
    </div>
  );
};
