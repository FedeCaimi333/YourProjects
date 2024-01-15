import React from "react";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { selectedProjectValue } from "./Slices/ProjectsSlice";

export default function ProjectSideBar() {
  const projects = useSelector((state) => state.ProjectsSlice.projects);
  const selectedProjectId = useSelector((state) => state.ProjectsSlice.selectedProject);
  const dispatch = useDispatch();

  function handleNewProject() {
    dispatch(selectedProjectValue(null));
  }

  function handleProjectClick(projectId) {
    dispatch(selectedProjectValue(projectId));
  }

  
  

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
      <Button onClick={handleNewProject}>+ Add project</Button>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button onClick={() => handleProjectClick(project.id)} className={cssClasses}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
