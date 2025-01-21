import React, {useState} from "react";

function NewComp(){

    const [name, setName] = useState('Guest');
    const [qnty, setQnty] = useState(1);
    const [comment, setComment] = useState("")
    const [mop, setMOP] = useState("")
    const [mod, setMOD] = useState("")

    function changeName(event){

        setName(event.target.value)

    }

    function quantityChange(event){
        
        setQnty(event.target.value)

    }

    function commentChange(event){


        setComment(event.target.value)

    }

    function mopChange(event){

        setMOP(event.target.value)

    }

    function modChange(event){

        setMOD(event.target.value)

    }

    return (

        <div>

            <input placeholder="Name here" onChange={changeName}/>
            <p>Name: {name}</p>

            <input placeholder="Qnty here" onChange={quantityChange} type="number"/>
            <p>Quantity: {qnty}</p>

            <textarea placeholder="Enter deliver" onChange={commentChange}></textarea>
            <p>Comment: {comment}</p>

            <select onChange={mopChange}>

                <option value="">Select an option</option>
                <option value="gcash">Gcash</option>
                <option value="cash">Cash</option>
                <option value="paymaya">Paymaya</option>

            </select>

            <label>
                <input type="radio"  value="COP"
                checked={mod == 'COP'}  
                onChange={modChange}/>
                COP
            </label>
            <label>
            <input type="radio"  value="COD"
                checked={mod == 'COD'}  
                onChange={modChange}/>
                COP
            </label>
            <p>MOP: {mod}</p>

        </div>

    )

}

export default NewComp