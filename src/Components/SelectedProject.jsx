import Tasks from "./Tasks";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject, selectedProjectValue } from "./Slices/ProjectsSlice";

export default function SelectedProject ({project, onDelete, ondAddTask, ondDeleteTask, tasks}){

    const dispatch = useDispatch();

    
    const selectedProjectId = useSelector((state) => state.ProjectsSlice.selectedProject);

    function deleteProjects(){
        dispatch(deleteProject(selectedProjectId));
        dispatch(selectedProjectValue(undefined))
    }

    function handleClose(){
        dispatch(selectedProjectValue(undefined))
    }



    const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
        year: "numeric", month: "short", day: "numeric"
    });


    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">
                        {project.title}
                    </h1>
                    <div className="flex space-x-4">
                    <button onClick={handleClose} className="text-stone-600 hover:text-stone-950">Close</button>
                    <button onClick={deleteProjects} className="text-stone-600 hover:text-stone-950">Delete</button>
                    </div>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks />
        </div>
    )
}