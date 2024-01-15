import { createSlice } from "@reduxjs/toolkit";

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    // Manejar errores al guardar en localStorage
  }
};

const initialState = loadStateFromLocalStorage() || {
  selectedProject: undefined,
  projects: [],
  tasks: [],
};

export const ProjectsSlice = createSlice({
  name: "Projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
      saveStateToLocalStorage(state);
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter((p) => p.id !== action.payload);
      saveStateToLocalStorage(state);
    },
    selectedProjectValue: (state, action) => {
      state.selectedProject = action.payload;
      saveStateToLocalStorage(state);
    },
    addTasks: (state, action) => {
      state.tasks.push(action.payload);
      saveStateToLocalStorage(state);
    },
    deleteTasks: (state, action) => {
        state.tasks = state.tasks.filter(t => t.id !== action.payload)
        saveStateToLocalStorage(state);
    }
  },
});

export const {addProject, deleteProject, selectedProjectValue, addTasks, deleteTasks} = ProjectsSlice.actions;
export default ProjectsSlice.reducer;