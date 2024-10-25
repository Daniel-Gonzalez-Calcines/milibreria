import { MouseEventHandler } from 'react';
export interface Myfavouriteprops {
    color: 'primary' | 'secondary' | 'action' | 'error' | 'disabled';
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function Myfavourite(props: Myfavouriteprops): import("react/jsx-runtime").JSX.Element;
export default Myfavourite;
