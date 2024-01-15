import ProjectSideBar from "./Components/ProjectSideBar";
import NewProject from "./Components/NewProject";
import NoProject from "./Components/NoProjectSelected";
import SelectedProject from "./Components/SelectedProject";
import { useState, useContext } from "react";
import {  useSelector } from 'react-redux';
function App() {

  const slcProjecet = useSelector(state => state.ProjectsSlice.selectedProject);
  const projects = useSelector(state => state.ProjectsSlice.projects);
  const tasks = useSelector(state => state.ProjectsSlice.tasks);

let selectedProjectId = projects.find(project => project.id === slcProjecet);




console.log(selectedProjectId)
  return (
    
        <main className="h-screen my-8 flex gap-8"> 
              <ProjectSideBar
                 // onStartAddProject={handleStartAddProject}
                  projects={projects} 
                  selectedProjectId={selectedProjectId}>
              </ProjectSideBar>
              {slcProjecet === null ? (
                  <NewProject  />
                  ) : slcProjecet ? (
                  <SelectedProject                
                  project={selectedProjectId} 
                  tasks={tasks}/>
                  ) : (
                <NoProject></NoProject>
            )}
        </main>
  
  );
}

export default App;
