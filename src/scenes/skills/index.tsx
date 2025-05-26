"use client";

import React from "react";
import View from "./view";
import { SkillsSceneProps as SceneProps } from "./props";
import useViewModel from "./view-model";

const SkillsScene = (props: SceneProps) => {
  const viewModel = useViewModel(props);
  return <View viewModel={viewModel} />;
};

export default SkillsScene;
