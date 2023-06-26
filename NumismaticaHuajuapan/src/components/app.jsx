
import PropTypes from 'prop-types';

export const MiApp = ({nombre,edad}) => {//Funcion flecha(export es para exportarlo)
    
    return (

        <>
            <h3>Hola: {nombre}-{edad+1}</h3>
        
        </>
      
    )
}

MiApp.propTypes={//es un objeto
    nombre : PropTypes.string.isRequired,//(isRequirede)->es requerido
    edad : PropTypes.number
}
