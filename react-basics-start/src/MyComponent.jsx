import React, {useState} from 'react'

function MyComponent(){
    
    const[cars, setCars] = useState([])
    const[years, setYear] = useState(new Date().getFullYear());
    const[make, setMake] = useState('')
    const[models, setModel] = useState('');

    function handleAddCar(){

        const newCar = {year: years, makes: make, model: models}
        setCars(c => [...c, newCar]) 

        setYear(new Date().getFullYear())
        setMake("")
        setModel("")

    }

    function handleRemoveCar(index){

        setCars(c => c.filter((_, i) => i !== index));

    }

    function handleYearChange(event){

        setYear(event.target.value)

    }

    function handleMakeChange(event){

        setMake(event.target.value)

    }

    function handleModelChange(event){

        setModel(event.target.value)

    }

    return(<>
    
    <div className="container">

        <h2>List of Car Objexts</h2>
        <ul>
           {cars.map((car, index) => <li onClick={() => handleRemoveCar(index)} key={index}>{car.year} {car.makes} {car.model}</li>)}     
        </ul>
        <input type="number" value={years} onChange={handleYearChange}/><br />
        <input type="text" value={make} placeholder='Enter make' id='make-inp' onChange={handleMakeChange}/><br />
        <input type="text" value={models} placeholder='Enter model' id='model-inp' onChange={handleModelChange}/><br />
        <button onClick={handleAddCar}>Add car</button>

    </div>

    </>)
    
}

export default MyComponent