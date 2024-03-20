import { configureStore } from "@reduxjs/toolkit"
import adminReducer from "./slices/adminSlice"
import facultyReducer from "./slices/facultySlice"
import studentReducer from "./slices/studentSlice"
import errorReducer from "./slices/errorSlice"
import userReducer from "./slices/userSlice"

const store = configureStore({
    reducer: {
        admin: adminReducer,
        faculty: facultyReducer,
        student: studentReducer,
        error: errorReducer,
        user: userReducer,
    },
})

export default store
