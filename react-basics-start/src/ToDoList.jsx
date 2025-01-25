import React, {useState} from "react";

function ToDoList(){

    const[tasks, setTask] = useState([]);

    function handleAddTask(){

        const getTaskInput = document.getElementById('inp-task').value;

        if(!getTaskInput.trim('') == ""){

            document.getElementById('inp-task').value = '';
            setTask(t => [...t, getTaskInput])
    
        }

    }

    function handleDelTask(index){

        setTask(t => t.filter((_, i) => i !== index))

    }

    function handleMoveUp(index){

        if(index > 0){
            const newTasks = [...tasks];
            [newTasks[index], newTasks[index-1]] = [newTasks[index-1],newTasks[index]]
            setTask(newTasks)
        }

    }

    
    function handleMoveDown(index){

        if(index < tasks.length - 1){

            const newTasks = [...tasks];
            [newTasks[index], newTasks[index+1]] =  [newTasks[index+1], newTasks[index]]
            setTask(newTasks)

        }

    }


    return(
        <>
            <div className="container">
                <div className="header">
                    <h1>To-Do-List</h1>
                </div>
                <div className="control-container">
                    <input type="text" id="inp-task" placeholder="Enter a task"/>
                    <button onClick={handleAddTask}>Add</button>
                </div>
                <div className="task-container">
                    {tasks.map((task, index) => 
                        <div key={index} className="task">
                            {task}
                            <div>
                                <button onClick={() => handleDelTask(index)}>🗑️</button>
                                <button onClick={() => handleMoveUp(index)}>☝️</button>
                                <button onClick={() => handleMoveDown(index)}>👇</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );

}

export default ToDoList