import React from "react";
import { AboutViewProps as ViewProps } from "./props";
import IconTab from "@/components/custom/icon-tab/icon-tab";
import { UserRound } from "lucide-react";

const AboutView = ({ viewModel }: ViewProps) => {
  const {} = viewModel;

  return (
    <div className="text-white px-5 mb-32 md:px-20 xl:mb-0 xl:pl-0">
      <IconTab icon={UserRound} label="About" />
      <div>
        <h1 className="text-white leading-14 text-center text-4xl md:text-6xl xl:text-left md:leading-25 2xl:text-8xl">
          &quot;Software is a great combination between artistry and
          engineering.&quot;
        </h1>
        <br />
        <h3 className="text-gray-500 text-2xl italic pr-10 text-right">
          - Bill Gates
        </h3>
      </div>

      <p className="text-gray-500 text-sm mt-10 md:px-10 md:text-xl xl:px-0 xl:my-10">
        I&apos;m Jimmy, a web developer with a background in education. My
        journey into tech began with a passion for teaching and a curiosity
        about how web applications can transform the way we learn and interact.
        As a former educator, I saw firsthand how technology enhanced the
        classroom experience, sparking my interest in building tools that make a
        real impact.
        <br />
        <br />
        Transitioning into web development was a leap, but one fueled by
        purpose. The communication, problem-solving, and adaptability I
        developed as a teacher now shape the way I build intuitive, user-focused
        experiences. My teaching roots give me a unique lens and creative
        approach to development—let&apos;s connect and build something
        meaningful together!
      </p>
    </div>
  );
};

export default AboutView;
