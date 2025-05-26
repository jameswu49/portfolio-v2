"use client";

import React from "react";
import View from "./view";
import { ProjectsSceneProps as SceneProps } from "./props";
import useViewModel from "./view-model";

const ProjectsScene = (props: SceneProps) => {
  const viewModel = useViewModel(props);
  return <View viewModel={viewModel} />;
};

export default ProjectsScene;
