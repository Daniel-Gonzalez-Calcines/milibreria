import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; //importamos el componente Example
const meta: Meta<typeof Example> = {
    title: "Myfavourite",
    component: Example,
};
export default meta;
type Story = StoryObj<typeof Example>;
export const Primary: Story = {
    args: {
        disabled: false,
        onClick: () => alert("Button Primary"),
        color: "primary"
    },
};
export const Secondary: Story = {
    args: {
        disabled: false,
        onClick: () => alert("Button Secondary"),
        color: "secondary"
    },
};