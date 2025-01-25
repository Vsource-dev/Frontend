import React, {useState} from "react";

function ChangeArray(){

    const[tasks, setTask] = useState(['Clean','Eat','Sleep']);

    function handleAddTask(){

        const getTask = document.getElementById('task-input').value;
        document.getElementById('task-input').value = ''; 

        if(!getTask){

            alert('Enter something First')
            return;

        }

        setTask((t) => [...t, getTask])

    }

    function handleRemoveTask(index){

        setTask(tasks.filter((_ , i) => i !== index))

    }

    return(
        <>
            <h2>To-do List</h2>
            <ul>
                {tasks.map((task, index) =><li key={index} onClick={() => handleRemoveTask(index)}>{task}</li>)}
            </ul>
            <input type="text" id='task-input' placeholder="Enter task"/>
            <button onClick={handleAddTask}>Add task</button>
        </>
    )


}

export default ChangeArray