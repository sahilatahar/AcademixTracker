import { configureStore } from "@reduxjs/toolkit"
import adminReducer from "./slices/adminSlice"
import attendanceReducer from "./slices/attendanceSlice"
import courseReducer from "./slices/courseSlice"
import courseSupervisorReducer from "./slices/courseSupervisorSlice"
import departmentReducer from "./slices/departmentSlice"
import facultyReducer from "./slices/facultySlice"
import hodReducer from "./slices/hodSlice"
import markReducer from "./slices/markSlice"
import noticeReducer from "./slices/noticeSlice"
import semesterReducer from "./slices/semesterSlice"
import studentReducer from "./slices/studentSlice"
import subjectReducer from "./slices/subjectSlice"
import userReducer from "./slices/userSlice"

const store = configureStore({
    reducer: {
        hod: hodReducer,
        user: userReducer,
        mark: markReducer,
        admin: adminReducer,
        notice: noticeReducer,
        course: courseReducer,
        student: studentReducer,
        faculty: facultyReducer,
        subject: subjectReducer,
        semester: semesterReducer,
        department: departmentReducer,
        attendance: attendanceReducer,
        courseSupervisor: courseSupervisorReducer,
    },
})

export default store
