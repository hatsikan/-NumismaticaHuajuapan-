import PropTypes from 'prop-types';
import {useState} from 'react';
export const Counter=({value})=>{
    console.log('Render')
    const[contador, setContador]=useState(12);
    function handleIncrement(){
        setContador(()=>contador+1)
    }
    function handleDecrement(){
        setContador(()=>contador-1)
    }
    function handleReset(){
        setContador(()=>contador-contador)
    }
    return(
        <>
            <b3>Counter {contador}</b3>
            <button onClick={handleIncrement}>
                +1
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
            <button onClick={handleDecrement}>
                -1
            </button>
            hola
        </>
    )


}
Counter.PropTypes={
    value: PropTypes.number.isRequired
}

