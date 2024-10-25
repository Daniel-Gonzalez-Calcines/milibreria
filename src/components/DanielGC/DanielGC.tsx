import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export interface CustomButtonProps {
    defval: number; //prop text de tipo string. Es el texto del botón
    precision?: number;
    maxrating?: number;
    color: 'primary' | 'secondary' | 'action' | 'error' | 'disabled';
}
//Defino mi componente CustomButton y le digo que las props son las que definí arriba
function DanielGC(props: CustomButtonProps) {
    //Paso el valor de las props a un objeto:
    const { defval, precision, maxrating, color } = props
    return (
        //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.

        <Rating
            defaultValue={defval}
            precision={precision}
            icon={<FavoriteIcon color={color} />}
            emptyIcon={<FavoriteBorderIcon color={color} />}
            max={maxrating}
            aria-label="custom rating"
        />
    )
}
export default DanielGC;