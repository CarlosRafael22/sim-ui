import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tag from "./Tag";

export default {
  title: "Components/Atoms/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => (
  <div style={{ width: "600px" }}>
    <Tag {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "Important React",
};
