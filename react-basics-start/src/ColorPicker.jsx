import { useState } from "react"

function ColorPicker(){

    const [color, selectColor] = useState('#FFFFFF')

    function chooseColor(event){
        selectColor(event.target.value);
    }

    return(<>
    
        <div className="container">
            <h1>Color picker</h1>
            <div className="displayColor" style={{backgroundColor: color}}>
                <p>Selected Color:</p>
                <p>{color}</p>
            </div>
            <div className="controlColor">
                <label>select color:</label>
                <input type="color" value={color} onChange={chooseColor}/>
            </div>
        </div>
    
    </>)

}

export default ColorPicker

