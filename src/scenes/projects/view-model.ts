import {
  ProjectsViewModelInitProps as ViewModelInitProps,
  ProjectsViewModelProps as ViewModelProps,
} from "./props";
import { ProjectLink } from "./props";

const useProjectsViewModel: (
  props: ViewModelInitProps,
) => ViewModelProps = () => {
  const projectLinks: ProjectLink[] = [
    {
      name: "Supreme E-Commerce",
      image: "/supreme.png",
      type: "React, Next 13, Tailwind",
      description:
        "An E-commerce site showcasing various products from the Supreme Website.",
      url: "https://supreme-commerce.vercel.app/",
      repo: "https://github.com/jameswu49/ecommerce",
    },
    {
      name: "Garden Delights",
      image: "/garden-delights.png",
      type: "React, Next 13, Tailwind",
      description: "A fan page for lovers of Olive Garden",
      url: "https://olive-garden-fanpage.vercel.app/",
      repo: "https://github.com/joseph-w-valdez/olive-garden-fanpage",
    },
    {
      name: "Muze",
      image: "/muze.png",
      type: "Html, CSS, Javascript",
      description:
        "A music site that utilizes the openwhyd api to allow users to search for songs and artists.",
      url: "https://jameswu49.github.io/Muze/",
      repo: "https://github.com/jameswu49/Muze",
    },
  ];
  return { projectLinks };
};

export default useProjectsViewModel;
