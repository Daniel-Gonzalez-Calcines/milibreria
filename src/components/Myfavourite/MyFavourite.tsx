import { MouseEventHandler } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import { IconButton} from '@mui/material';
//Declaro la interface del componente.
export interface CustomButtonProps {
    color: 'primary' | 'secondary' | 'action' | 'error' | 'disabled';
    disabled?: boolean; //prop disabled. Es opcional y es de tipo boolean
    onClick?: MouseEventHandler<HTMLButtonElement>; //prop onClick opcional y responde al
    //evento de picar el botón
}
//Defino mi componente CustomButton y le digo que las props son las que definí arriba
function Myfavourite(props: CustomButtonProps) {
    //Paso el valor de las props a un objeto:
    const { disabled, onClick, color } = props
    return (
        //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
        
        <IconButton 
            onClick={onClick}
            disabled={disabled}
        >
            <FavoriteIcon 
                color={color} 
            />
        </IconButton>
    )
}
export default Myfavourite;