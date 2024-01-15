import {configureStore} from "@reduxjs/toolkit"
import ProjectsSliceReducer from "../Components/Slices/ProjectsSlice"

export const Store = configureStore({
    reducer: {
        ProjectsSlice: ProjectsSliceReducer
    }
})