import React from 'react'
import PropTypes from 'prop-types'


//Para variables constantes que no se usaran dentro de el componente es mejor dejarlos afuera
//Un ejemplo de estos puede ser variables que no tengan relacion con el state
const newMessage = [1,2,3,4,5,6,7,8]
const objeto = {
    nombre: 'Diego',
    edad: 22,
    funcion: () => 'Hola'
}

//! Se inicializa
//Para pedir propiedades a un componente lo ponemos entre los parametros de entrada de su funcion. 
//Se puede mandar objetos pero no es lo comun, es mejor aplicar el destructuring.
//? Podemos tener proptypes, para hacer uso de tipos de propiedades en cualquier componente
export const FirstApp = ({title, description, name}) => {
    return (
        <>
            <h2>{title}</h2>
            <p>{`${description} - ${name}`}</p>
        </>
    )
}

//! Se setea las configuraciones
//? Las proptypes para definir el tipo el prop
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}

//? Podemos configurar igual los default props 
FirstApp.defaultProps = {
    title: 'Sin titulo',
    description: 'Sin descripcion - desde default',
    name: 'Diego FIgueroa'
}