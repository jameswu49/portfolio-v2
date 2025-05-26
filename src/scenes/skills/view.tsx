import React from "react";
import { SkillsViewProps as ViewProps } from "./props";
import { IconTab } from "@/components/custom/icon-tab";
import SkillIcons from "@/components/custom/skill-icons/skill-icons";
import { BoxesIcon } from "lucide-react";

const SkillsView = ({ viewModel }: ViewProps) => {
  const {} = viewModel;

  return (
    <div>
      <IconTab icon={BoxesIcon} label="Skills" />
      <h1 className=" text-center text-primary-foreground text-5xl font-bold mb-10 xl:text-start">
        <span className="text-white">My</span> Skills
      </h1>
      <SkillIcons />
    </div>
  );
};

export default SkillsView;
