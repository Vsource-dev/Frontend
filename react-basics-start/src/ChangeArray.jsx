import React, {useState} from "react";

function ChangeArray(){

    const [foods, setFoods] = useState(['Apple', 'Orange', 'Banana']);

    function addFood(){

        const getFood = document.getElementById('inputfruit').value;
        document.getElementById('inputfruit').value = '';
        setFoods(f => [...f, getFood])
 
    }

    function delFood(index){

        setFoods(foods.filter((_, i) => i !== index))

    }

    return(<>
    
        <div>
            <h2>stan</h2>
            <ul>
                {foods.map((food, index)=><li key={index} onClick={() => delFood(index )}>{food}</li>)}
            </ul>
            <input type="text" id="inputfruit" placeholder="Name of fruit"/>
            <button onClick={addFood}>Add fruit</button>
        </div>
    
    </>)

}

export default ChangeArray