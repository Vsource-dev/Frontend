import { sculptureList } from "./data";
import { useState } from "react";

function UseSteyt(){

   const[index, setIndex] = useState(0)
   const[show, setShow] = useState(false)

    function handleClick(next){

        if(next && index < sculptureList.length - 1){
            setIndex(index + 1)
        }else if(!next && index > 0){
            setIndex(index - 1)
        }


    }

    function handleMoreClick(){

        setShow(!show)  

    }
    
    let sculpture = sculptureList[index]

    return(
        <>

            <button onClick={() => handleClick(false)}>Back</button>
            <button onClick={() => handleClick(true)}>Next</button>
            <h2><i>{sculpture.name}</i> by {sculpture.artist}</h2>
            <h3>({index + 1} of {sculptureList.length})</h3>
            <button onClick={handleMoreClick}>{show ? 'Hide' : 'Show'} Details</button><br />
            {show && <p>{sculpture.description}</p>}
            <img src={sculpture.url} alt={sculpture.alt}/>
       

        </>
    )

}




export default UseSteyt