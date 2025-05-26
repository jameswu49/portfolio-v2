/* eslint-disable @typescript-eslint/no-empty-object-type */

export interface ProjectLink {
  name: string;
  image: string;
  type: string;
  url: string;
  description: string;
  repo: string;
}

export interface ProjectsSceneProps {}

export interface ProjectsViewModelInitProps {}

export interface ProjectsViewModelProps {
  projectLinks: ProjectLink[];
}

export interface ProjectsViewProps {
  viewModel: ProjectsViewModelProps;
}
