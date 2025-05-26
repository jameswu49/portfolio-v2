import React from "react";
import { HomeViewProps as ViewProps } from "./props";
import { ChevronRight, HouseIcon } from "lucide-react";
import IconTab from "@/components/custom/icon-tab/icon-tab";

const HomeView = ({ viewModel }: ViewProps) => {
  const {} = viewModel;

  return (
    <div className="w-full">
      <IconTab icon={HouseIcon} label="Introduction" />
      <h1 className="text-white leading-16 text-center text-4xl xl:text-6xl xl:text-left xl:leading-25 2xl:text-8xl">
        Hello There, I&apos;m{" "}
        <span className="text-primary-foreground">Jimmy</span>,
        <br />
        Web Developer and
        <br />
        Software Engineer
      </h1>

      <div className="text-gray-500 mt-20 text-3xl text-center xl:text-left">
        <h3>I love coding!</h3>
      </div>

      <div className="flex justify-center xl:justify-end">
        <ChevronRight className="text-primary-foreground size-30 mt-10 transition-transform duration-300 hover:-translate-y-2 cursor-pointer" />
      </div>
    </div>
  );
};

export default HomeView;
