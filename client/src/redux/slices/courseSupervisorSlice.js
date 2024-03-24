import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    courseSupervisors: null,
}

const courseSupervisorSlice = createSlice({
    name: "courseSupervisor",
    initialState,
    reducers: {
        setCourseSupervisors: (state, action) => {
            state.courseSupervisors = action.payload
        },
        addCourseSupervisor: (state, action) => {
            state.courseSupervisors.push(action.payload)
        },
        updateCourseSupervisor: (state, action) => {
            const updatedCourseSupervisor = action.payload
            state.courseSupervisors = state.courseSupervisors.map(
                (courseSupervisor) =>
                    courseSupervisor._id === updatedCourseSupervisor._id
                        ? updatedCourseSupervisor
                        : courseSupervisor,
            )
        },
        deleteCourseSupervisor: (state, action) => {
            const id = action.payload
            state.courseSupervisors = state.courseSupervisors.filter(
                (courseSupervisor) => courseSupervisor._id !== id,
            )
        },
    },
})

export const selectCourseSupervisors = (state) =>
    state.courseSupervisor.courseSupervisors

export const selectCourseSupervisorById = (state, id) =>
    state.courseSupervisor.courseSupervisors.find(
        (courseSupervisor) => courseSupervisor._id === id,
    )

export const {
    addCourseSupervisor,
    deleteCourseSupervisor,
    setCourseSupervisors,
    updateCourseSupervisor,
} = courseSupervisorSlice.actions
export default courseSupervisorSlice.reducer
