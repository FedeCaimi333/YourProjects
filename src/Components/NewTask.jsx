import { useSelector, useDispatch } from "react-redux"
import { useState } from "react";
import { addTasks,  } from "./Slices/ProjectsSlice";


export default function NewTask(){

    
    const selectedProjectId = useSelector((state) => state.ProjectsSlice.selectedProject);
    const dispatch = useDispatch();

    const [enteredTask, setEnteredTask] = useState("");

    function handleChange(event){
        setEnteredTask(event.target.value);
    }

    function handleClick(){
        if(enteredTask.trim() !== ""){
            const newTask = { id: Math.random(), text: enteredTask, projectId: selectedProjectId };
            dispatch(addTasks(newTask));
        }
        setEnteredTask("");
    }

    return (
        <div className="flex items-center gap-4">
            <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" 
            placeholder="Enter your task"
            onChange={handleChange}
            value={enteredTask}></input>
            <button onClick={handleClick}  
            className="text-stone-700 bg-stone-300 rounded-sm p-1 w-16 hover:text-stone-950" >Add</button>
        </div>
    )
}