import React, { useState, useEffect } from "react";
import { ProjectsViewProps as ViewProps } from "./props";
import { IconTab } from "@/components/custom/icon-tab";
import { FolderIcon, GithubIcon, LinkIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProjectsView = ({ viewModel }: ViewProps) => {
  const { projectLinks } = viewModel;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = (index: number) => {
    if (isMobile) {
      setActiveIndex((prev) => (prev === index ? null : index));
    }
  };

  return (
    <div>
      <IconTab icon={FolderIcon} label="Projects" />
      <h1 className="text-center text-primary-foreground text-5xl font-bold mb-10 xl:text-start">
        <span className="text-white">Featured</span> Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectLinks.map((element, index) => (
          <div
            key={index}
            className="relative group mx-5 xl:mx-0"
            onClick={() => handleClick(index)}
          >
            <Image
              src={element.image}
              alt="project image"
              width={400}
              height={400}
              className={cn(
                "object-fill w-full max-w-120 mx-auto h-60 2xl:max-w-full 2xl:h-75 transition-opacity duration-300 rounded-xl border border-gray-200",
                activeIndex === index ? "opacity-50" : "",
                "group-hover:opacity-50",
              )}
            />
            <div
              className={cn(
                "absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center rounded-xl transition-opacity duration-300 bg-[#1c1d25] bg-opacity-70 backdrop-blur-sm",
                activeIndex === index ? "opacity-100" : "opacity-0",
                "group-hover:opacity-100",
              )}
            >
              <div
                className={cn(
                  "flex flex-col items-center transition-transform duration-300 ease-in gap-1",
                  activeIndex === index ? "-translate-y-0" : "translate-y-full",
                  "group-hover:-translate-y-0",
                )}
              >
                <h1 className="text-xl text-white md:text-4xl">
                  {element.name}
                </h1>
                <p className="mx-2 text-white md:text-xl">{element.type}</p>
                <p className="hidden lg:block group-hover:text-white lg:px-10">
                  {element.description}
                </p>
                <div className="flex items-center gap-4 lg:gap-5 mt-2 group-hover:text-white md:text-2xl">
                  <a
                    href={element.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon className="cursor-pointer hover:scale-110 lg:text-3xl text-white" />
                  </a>
                  <a
                    href={element.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="cursor-pointer hover:scale-110 lg:text-3xl text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsView;
