import { MouseEventHandler } from 'react';
export interface CustomButtonProps {
    color: 'primary' | 'secondary' | 'action' | 'error' | 'disabled';
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function Myfavourite(props: CustomButtonProps): import("react/jsx-runtime").JSX.Element;
export default Myfavourite;
