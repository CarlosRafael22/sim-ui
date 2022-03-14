import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Atoms/Buttons/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default",
};

export const Primary = Template.bind({});
Primary.args = {
  type: "Primary",
  children: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "Secondary",
  children: "Secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: "Tertiary",
  children: "Tertiary",
};

const RenderButtons = ({ size }) => (
  <div>
    <Button type="Primary" size={size}>
      Primary
    </Button>
    <Button type="Secondary" size={size}>
      Secondary
    </Button>
    <Button type="Tertiary" size={size}>
      Tertiary
    </Button>
  </div>
);

export const Small = () => <RenderButtons size="S" />;

export const Medium = () => <RenderButtons size="M" />;

export const Large = () => <RenderButtons size="L" />;

export const AllSizes = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    <RenderButtons size="S" />
    <RenderButtons size="M" />
    <RenderButtons size="L" />
  </div>
);
