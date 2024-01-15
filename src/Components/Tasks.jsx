import { useSelector, useDispatch } from "react-redux"
import NewTask from "./NewTask"
import { deleteTasks, selectedProjectValue }  from "./Slices/ProjectsSlice";

export default function Tasks() {
    
    const dispatch = useDispatch();
    const selectedProjectId = useSelector((state) => state.ProjectsSlice.selectedProject);

    const tasks = useSelector((state) => state.ProjectsSlice.tasks)
    const tasks2 = tasks.filter(t => t.projectId === selectedProjectId)

    function onDelete (id){
        dispatch(deleteTasks(id));
    }

    
    
    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask />
        { tasks.length === 0 && 
            (<p className="text-stone-800 mb-4 my-4">
                This project does not have any tasks yet
            </p>
         )}
        {tasks.length > 0 && <ul className="p-4 mt-8 rounded-md">
            {tasks2.map((task) => <li key={task.id} className="flex justify-between my-4 p-3  bg-stone-100"> 
                                    <span >{task.text}</span>
                                    <button 
                                    onClick={() => onDelete(task.id)}
                                    className="bg-red-400 rounded-md p-2 text-white hover:bg-red-600">Clear</button>
                                 </li> )}</ul>}<ul>

        </ul>
    </section>
}