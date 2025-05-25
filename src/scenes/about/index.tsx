"use client";

import React from "react";
import View from "./view";
import { AboutSceneProps as SceneProps } from "./props";
import useViewModel from "./view-model";

const AboutScene = (props: SceneProps) => {
  const viewModel = useViewModel(props);
  return <View viewModel={viewModel} />;
};

export default AboutScene;
