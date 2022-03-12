import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PromiseFeedbackButton from "./PromiseFeedbackButton";

export default {
  title: "Components/Atoms/PromiseFeedbackButton",
  component: PromiseFeedbackButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PromiseFeedbackButton>;

const awaitTimeout = (delay: number) =>
  new Promise((resolve, reject) => setTimeout(resolve, delay));

const Template: ComponentStory<typeof PromiseFeedbackButton> = (args) => (
  <PromiseFeedbackButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: "primary",
  color: "red",
  children: "Save",
  onClick: () => awaitTimeout(2000),
};
