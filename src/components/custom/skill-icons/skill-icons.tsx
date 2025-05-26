import React from "react";
import Props from "./skill-icons-props";
import Image from "next/image";

const SkillIcons = ({}: Props) => {
  const skills = [
    {
      icon: "/html5.svg",
      label: "HTML",
    },
    {
      icon: "/javascript.svg",
      label: "JavaScript",
    },
    {
      icon: "/react.svg",
      label: "React",
    },
    {
      icon: "/tailwind.svg",
      label: "TailwindCSS",
    },
    {
      icon: "/typescript.svg",
      label: "TypeScript",
    },
    {
      icon: "/nextjs.svg",
      label: "Next.js",
    },
    {
      icon: "/chakraui.svg",
      label: "ChakraUI",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="border border-white rounded-full size-20 flex items-center justify-center">
            <Image src={skill.icon} alt={skill.label} width={40} height={40} />
          </div>
          <h1 className="text-white text-center my-5 font-bold">
            {skill.label}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default SkillIcons;
