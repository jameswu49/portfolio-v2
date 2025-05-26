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
      <SkillIcons />
    </div>
  );
};

export default SkillsView;
