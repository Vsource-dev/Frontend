import { useState } from "react";

function Counter(){

    let[display, setDisplay] = useState(0);

    const incrementCount = () => {
        setDisplay(display + 1)
    };

    const decrementCount = () => {
        setDisplay(display - 1)
    };

    const reset = () =>   {
        setDisplay(0)
    };

    return(
    <>
        <div className="container">
            <div className="header">
                <h1>{display}</h1>
            </div>
            <div className="control-bar">
                <button onClick={incrementCount}>+</button>
                <button onClick={reset}>reset</button>
                <button onClick={decrementCount}>-</button>
 
            </div>
        </div>
    </>)
 
}

export default Counter