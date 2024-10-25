import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; //importamos el componente Example
const meta: Meta<typeof Example> = {
    title: "DanielGC",
    component: Example,
};
export default meta;
type Story = StoryObj<typeof Example>;
export const Primary: Story = {
    args: {
        defval: 3,
        precision: 0.25,
        color: 'primary',
        maxrating: 10,
    },
};
export const Secondary: Story = {
    args: {
        defval: 23,
        precision: 0.1,
        color: 'secondary',
        maxrating: 100,
    },
};