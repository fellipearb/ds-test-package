import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./";

export default {
  title: "PartouApp/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: "Default",
  text: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "Medium",
  text: "Secondary",
};

export const Large = Template.bind({});
Large.args = {
  size: "Large",
};

export const Small = Template.bind({});
Small.args = {
  size: "XLarge",
};
