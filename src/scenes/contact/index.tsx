"use client";

import React from "react";
import View from "./view";
import { ContactSceneProps as SceneProps } from "./props";
import useViewModel from "./view-model";

const ContactScene = (props: SceneProps) => {
  const viewModel = useViewModel(props);
  return <View viewModel={viewModel} />;
};

export default ContactScene;
