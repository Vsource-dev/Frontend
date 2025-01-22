import React, {useState} from "react";

function UpdateObject(){

    const [car, setCar] = useState({year: 2024, make: 'Ford', model: 'Raptor'});

    function setCarYear(event){

        setCar(c => ({...c, year: event.target.value}))

    }
    function setCarMake(event){

        setCar(c => ({...c, make: event.target.value}))

    }
    function setCarModel(event){

        setCar(c => ({...c, model: event.target.value}))

    }

    return(<>
        <div>
            <p>Favorite car is a {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} placeholder="Enter year" onChange={setCarYear}/><br />
            <input type="text" placeholder="Enter make" onChange={setCarMake}/><br />
            <input type="text" placeholder="Enter model" onChange={setCarModel}/><br />
        </div>
    </>)

}

export default UpdateObject