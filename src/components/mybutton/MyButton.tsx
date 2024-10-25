import { MouseEventHandler } from 'react';
import Button from '@mui/material/Button';
//Declaro la interface del componente.
export interface CustomButtonProps {
    text: string; //prop text de tipo string. Es el texto del botón
    txtcolor: string; //prop txtcolor de tipo string. Es el color del texto del botón
    bgcolor: string; //prop bgcolor de tipo string. Es el color del botón
    bordercolor: string;
    borderwidth: string;
    size: "small" | "medium" | "large"; //prop size. El ? quiere decir que la prop es opcional. Además
    //le digo los posibles valores. Se entiende que es string.
    hover: string;
    disabled?: boolean; //prop disabled. Es opcional y es de tipo boolean
    onClick?: MouseEventHandler<HTMLButtonElement>; //prop onClick opcional y responde al
    //evento de picar el botón
}
//Defino mi componente CustomButton y le digo que las props son las que definí arriba
function Mybutton(props: CustomButtonProps) {
    //Paso el valor de las props a un objeto:
    const { bgcolor, text, txtcolor, disabled, onClick, size, bordercolor, borderwidth, hover } = props
    return (
        //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
        
        <Button
            type='button'
            
            onClick={onClick}
            disabled={disabled}
            size={size}
            border-color={bordercolor}
            border-width={borderwidth}
            sx={{ ':hover': {backgroundColor: bgcolor, color: hover}, color: txtcolor }}
        >
            {text}
        </Button>
    )
}
export default Mybutton;