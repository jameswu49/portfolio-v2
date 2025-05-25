import React from "react";
import Props from "./icon-tab-props";

const IconTab = ({ icon: Icon, label }: Props) => (
  <div className="flex border border-gray-500 rounded-4xl w-fit text-white items-center gap-2 px-4 py-1 opacity-70 my-6 mx-auto xl:my-10 xl:mx-0">
    <Icon className="text-white size-5" />
    {label}
  </div>
);

export default IconTab;
