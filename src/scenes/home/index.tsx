"use client";

import React from "react";
import View from "./view";
import { HomeSceneProps as SceneProps } from "./props";
import useViewModel from "./view-model";

const HomeScene = (props: SceneProps) => {
  const viewModel = useViewModel(props);
  return <View viewModel={viewModel} />;
};

export default HomeScene;
