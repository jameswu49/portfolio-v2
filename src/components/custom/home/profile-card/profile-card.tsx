import React from "react";
import Props from "./profile-card-props";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

const ProfileCard = ({}: Props) => {
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

  return (
    <div className="flex items-center justify-center my-10 xl:justify-start xl:h-screen xl:my-0">
      {/* Container */}
      <div className="border border-white rounded-4xl p-4 text-white w-110 h-200 xl:ml-10">
        {/* Name and Title */}
        <div className="pl-10 leading-5 my-5">
          <h1 className="text-2xl font-bold">Jimmy Wu</h1>
          <h2 className="text-xl font-bold pl-10">Software Engineer</h2>
        </div>

        {/* Profile Image and Email */}
        <div className="flex items-center justify-between px-5 my-10">
          <div className="space-y-8">
            <Image
              src="/profile.jpg"
              alt="Jimmy Wu"
              width={500}
              height={500}
              className="rounded-xl size-60 object-cover object-top"
            />
            <h2 className="text-white text-xl">jameswu49@gmail.com</h2>
          </div>

          {/* Social Links */}
          <div className="border-r-3 border-primary pr-4 space-y-4">
            {socialLinks.map((link, index) => (
              <ProfileIcons key={index} link={link} />
            ))}
          </div>
        </div>

        {/* Email Button */}
        <div className="flex justify-center">
          <Button className="bg-primary-foreground text-black p-6 rounded-xl">
            <div className="flex gap-3 px-4 items-center text-xl">
              <MailIcon className="size-6" /> Contact Me
            </div>
          </Button>
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
    <div className="rounded-full border-primary border size-10 flex items-center justify-center p-6">
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
