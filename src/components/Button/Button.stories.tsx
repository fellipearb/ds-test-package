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
  size: "Default",
  children: "Default",
  onClick: () => alert("Click on Default button"),
};

export const Medium = Template.bind({});
Medium.args = {
  size: "Medium",
  children: "Medium",
  onClick: () => alert("Click on Medium button"),
};

export const Large = Template.bind({});
Large.args = {
  size: "Large",
  children: "Large",
  onClick: () => alert("Click on Large button"),
};

export const XLarge = Template.bind({});
XLarge.args = {
  size: "XLarge",
  children: "XLarge",
  onClick: () => alert("Click on XLarge button"),
};
