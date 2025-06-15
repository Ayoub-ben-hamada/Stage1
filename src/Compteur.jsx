
import {useState} from "react";

export default function Compteur(){
    const[valeur, setValeur ]= useState(0);

    const incrementer = () => {
        setValeur( valeur +1);
    };
    const decrementer = () => {
    setValeur (valeur -1);

    };
    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h2>Competeur : {valeur}</h2>
            <button onClick={decrementer}> Decrementer</button>
            <button onClick={incrementer} style={{marginLeft: '20px' }}> Incrementer</button>
        </div>
    )

}