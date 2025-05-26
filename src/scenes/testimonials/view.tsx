import React from "react";
import { TestimonialsViewProps as ViewProps } from "./props";
import { MessageSquareQuoteIcon } from "lucide-react";
import { IconTab } from "@/components/custom/icon-tab";
import Image from "next/image";

const TestimonialsView = ({ viewModel }: ViewProps) => {
  const {} = viewModel;

  return (
    <div>
      <IconTab icon={MessageSquareQuoteIcon} label="Testimonials" />
      <h1 className=" text-center text-primary-foreground text-5xl font-bold mb-10 xl:text-start">
        Testimonials
      </h1>
      <div className="border border-white rounded-2xl p-4 mx-auto md:w-[90%] xl:mx-0 2xl:w-3/4">
        <div className="flex text-white gap-4">
          <Image
            src="/robert.jpeg"
            alt="testimonial"
            width={100}
            height={100}
            className="rounded-full size-15"
          />
          <div className="flex flex-col justify-center gap-1">
            <h1 className="text-2xl font-bold">Robert Gardner, Ph.D.</h1>
            <h3 className="text-sm text-primary-foreground">
              Software Development Instructor
            </h3>
          </div>
        </div>
        <p className="text-white mt-5 opacity-50 text-sm xl:mx-20">
          I taught Jimmy at LearningFuze, where Jimmy learned full stack
          development with React, Node, and PostgreSQL. This was an intense
          course that required Jimmy to write a full stack application on his
          own.
          <br />
          <br />
          At LearningFuze, Jimmy was an excellent student. He learned quickly
          and got things done. For his final project, Jimmy built a
          full-featured app that provides information about a church with
          dynamically-built links to sermon videos. To develop his project,
          Jimmy had to learn several technologies on his own, including the
          YouTube API to both list videos and display them to the user, and full
          routing.
          <br />
          <br />
          Jimmy was able to make his app full-featured and delivered it on time.
          Jimmy has a solid sense of software development, including how to
          write clean code, and how to design and organize the code to make it
          easy to work with.
          <br />
          <br />
          He strives to make his code easy to understand and pays attention to
          details. Jimmy has a strong work ethic and is dedicated to getting
          work done, and done well. He knows when to ask questions and how to
          understand and make use of the answers to his questions.
          <br />
          <br />
          As a former Director of Engineering at Google, I am confident that
          Jimmy will be an asset to any team he joins. questions. As a former
          Director of Engineering at Google, I am confident that Jimmy will be
          an asset to any team he joins.
        </p>
      </div>
    </div>
  );
};

export default TestimonialsView;
