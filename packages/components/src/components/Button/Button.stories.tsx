import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryObj<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: "Save",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: "Click me!",
};
