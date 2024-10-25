import React from "react";
//importamos nuestro componente CustomButton y sus props
import Mybutton, { Myfavouriteprops } from "../MyFavourite";
//Creamos un componente Example al cual le pasaremos las props definidas
//en nuestro componente CustomButton. Luego renderizamos nuestro componente
//<CustomButton /> con esas props. La idea es que llamemos al componente Example
//con valores de las props para renderizar el componente <CustomButton /> de diferentes
//maneras, es decir, crear una historia de renderizados de nusetro componente.
function Example(props: Myfavouriteprops) {
    return (
        <Mybutton
            onClick={props.onClick} 
            color={props.color}
            disabled={props.disabled}     
        />
    )
}
export default Example