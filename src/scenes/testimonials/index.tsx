"use client";

import React from "react";
import View from "./view";
import { TestimonialsSceneProps as SceneProps } from "./props";
import useViewModel from "./view-model";

const TestimonialsScene = (props: SceneProps) => {
  const viewModel = useViewModel(props);
  return <View viewModel={viewModel} />;
};

export default TestimonialsScene;
