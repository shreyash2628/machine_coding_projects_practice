import React,{useState} from "react";
import './css/CounterIncrementDecrement.css';

const CounterIncrementDecrement = ()=>{
    const [value,setValue]=useState(0);

    const handleIncrement = ()=>{
        setValue(val => val+1);
    }

    const handleDecrement = ()=>{
       setValue(val => (val > 0 ?val-1:0))
    }

    return(
        <div className="main-container">
            Counter App
            <div className="container">
                <button id="decrementButton" onClick={handleDecrement}>-</button>
                <h1>{value}</h1>
                <button id="incrementButton" onClick={handleIncrement}>+</button>
            </div>
        </div>

    )
}

export default CounterIncrementDecrement;


