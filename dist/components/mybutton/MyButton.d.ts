import { MouseEventHandler } from 'react';
export interface CustomButtonProps {
    text: string;
    txtcolor: string;
    bgcolor: string;
    bordercolor: string;
    borderwidth: string;
    size: "small" | "medium" | "large";
    hover: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function Mybutton(props: CustomButtonProps): import("react/jsx-runtime").JSX.Element;
export default Mybutton;
