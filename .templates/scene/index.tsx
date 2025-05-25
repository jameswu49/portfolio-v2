"use client";

import React from "react";
import View from "./view";
import { __templateNameToPascalCase__SceneProps as SceneProps } from "./props";
import useViewModel from "./view-model";

const __templateNameToPascalCase__Scene = (props: SceneProps) => {
  const viewModel = useViewModel(props);
  return <View viewModel={viewModel} />;
};

export default __templateNameToPascalCase__Scene;
