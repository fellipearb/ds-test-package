import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./";

export default {
  title: "PartouApp/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// "Default" | "Medium" | "Large" | "XLarge";

export const Default = Template.bind({});
Default.args = {
  size: "default",
  variant: "secondary",
  children: "Default",
  onClick: () => console.log("Click on Default button"),
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  variant: "primary",
  children: "Medium",
  onClick: () => console.log("Click on Medium button"),
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  variant: "tertiary",
  children: "Large",
  onClick: () => console.log("Click on Large button"),
};

export const XLarge = Template.bind({});
XLarge.args = {
  size: "xlarge",
  variant: "secondary",
  children: "XLarge",
  onClick: () => console.log("Click on XLarge button"),
};
