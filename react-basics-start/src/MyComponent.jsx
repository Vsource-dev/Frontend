import React, {useState} from 'react'

function MyComponent(){
    
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {

        setName("Sponge")

    }

    const updateAge = () => {

        setAge(age + 1)

    }

    const updateIsEmployed = () => {

        setIsEmployed(true)

    }

    return(<>
    
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Set age</button>

            <p>Employed: {isEmployed ? 'YES' : 'NO'}</p>
            <button onClick={updateIsEmployed}>Toggle Status</button>

        </div>
    
    </>)
    
}

export default MyComponent