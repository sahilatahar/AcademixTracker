import { createBrowserRouter } from "react-router-dom"

import Login from "../components/login/Login"

//* Admin Components
import AdminLogin from "../components/login/adminLogin/AdminLogin"
import AdminHome from "../components/admin/AdminHome"
import AdminDashboard from "../components/admin/Dashboard"
import AddAdmin from "../components/admin/addAdmin/AddAdmin"
// import AdminProfile from "../components/admin/profile/Profile"
// import AdminUpdate from "../components/admin/profile/update/Update"
// import AdminFirstTimePassword from "../components/admin/profile/update/firstTimePassword/FirstTimePassword"
// import AdminPassword from "../components/admin/profile/update/password/Password"
import DeleteAdmin from "../components/admin/deleteAdmin/DeleteAdmin"
// import DeleteFaculty from "../components/admin/deleteFaculty/DeleteFaculty"
// import DeleteStudent from "../components/admin/deleteStudent/DeleteStudent"
// import DeleteSubject from "../components/admin/deleteSubject/DeleteSubject"
import CreateNotice from "../components/admin/createNotice/CreateNotice"

import AdminRegister from "../components/register/adminRegister/AdminRegister"
// import GetStudent from "../components/admin/getStudent/GetStudent"
// import AddStudent from "../components/admin/addStudent/AddStudent"
// import GetFaculty from "../components/admin/getFaculty/GetFaculty"
// import AddFaculty from "../components/admin/addFaculty/AddFaculty"
// import GetSubject from "../components/admin/getSubject/GetSubject"
// import AddSubject from "../components/admin/addSubject/AddSubject"

// //* Department Components
import AddDepartment from "../components/admin/addDepartment/AddDepartment"
import DeleteDepartment from "../components/admin/deleteDepartment/DeleteDepartment"

// //* Faculty Components
import FacultyLogin from "../components/login/facultyLogin/FacultyLogin"
import FacultyRegister from "../components/register/facultyRegister/FacultyRegister"
// import FacultyHome from "../components/faculty/FacultyHome"
// import FacultyProfile from "../components/faculty/profile/Profile"
// import FacultyFirstTimePassword from "../components/faculty/profile/update/firstTimePassword/FirstTimePassword"
// import FacultyPassword from "../components/faculty/profile/update/password/Password"
// import FacultyUpdate from "../components/faculty/profile/update/Update"
// import MarkAttendance from "../components/faculty/markAttendance/MarkAttendance"
// import UploadMarks from "../components/faculty/uploadMarks/UploadMarks"
// import CreateTest from "../components/faculty/createTest/CreateTest"

// //* Student Components
import StudentLogin from "../components/login/studentLogin/StudentLogin"
import StudentRegister from "../components/register/studentRegister/StudentRegister"
// import StudentFirstTimePassword from "../components/student/profile/update/firstTimePassword/FirstTimePassword"
// import StudentHome from "../components/student/StudentHome"
// import StudentProfile from "../components/student/profile/Profile"
// import StudentUpdate from "../components/student/profile/update/Update"
// import StudentPassword from "../components/student/profile/update/password/Password"
// import SubjectList from "../components/student/subjectList/SubjectList"
// import TestResult from "../components/student/testResult/TestResult"
// import Attendance from "../components/student/attendance/Attendance"

import ProtectedRoute from "./ProtectedRoute"
import AuthRedirect from "./AuthRedirect"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <AuthRedirect Component={Login} />,
    },
    {
        path: "/admin/login",
        element: <AuthRedirect Component={AdminLogin} />,
    },
    {
        path: "/admin/register",
        element: <AuthRedirect Component={AdminRegister} />,
    },
    {
        path: "/faculty/login",
        element: <AuthRedirect Component={FacultyLogin} />,
    },
    {
        path: "/faculty/register",
        element: <AuthRedirect Component={FacultyRegister} />,
    },
    {
        path: "/student/login",
        element: <AuthRedirect Component={StudentLogin} />,
    },
    {
        path: "/student/register",
        element: <AuthRedirect Component={StudentRegister} />,
    },
    {
        path: "/admin",
        element: <ProtectedRoute Component={AdminHome} role="admin" />,
        children: [
            {
                path: "dashboard",
                element: <AdminDashboard />,
            },
            {
                path: "create-notice",
                element: <CreateNotice />,
            },
            {
                path: "add-admin",
                element: <AddAdmin />,
            },
            {
                path: "delete-admin",
                element: <DeleteAdmin />,
            },
            {
                path: "add-department",
                element: <AddDepartment />,
            },
            {
                path: "delete-department",
                element: <DeleteDepartment />,
            },
        ],
    },
    // {
    //     path: "/admin/add-faculty",
    //     element: <ProtectedRoute Component={AddFaculty} />,
    // },
    // {
    //     path: "/admin/add-student",
    //     element: <ProtectedRoute Component={AddStudent} />,
    // },
    // {
    //     path: "/admin/add-subject",
    //     element: <ProtectedRoute Component={AddSubject} />,
    // },
    // {
    //     path: "/admin/all-faculties",
    //     element: <ProtectedRoute Component={GetFaculty} />,
    // },
    // {
    //     path: "/admin/all-students",
    //     element: <ProtectedRoute Component={GetStudent} />,
    // },
    // {
    //     path: "/admin/all-subjects",
    //     element: <ProtectedRoute Component={GetSubject} />,
    // },
    // {
    //     path: "/admin/profile",
    //     element: <ProtectedRoute Component={AdminProfile} />,
    // },
    // {
    //     path: "/admin/update",
    //     element: <ProtectedRoute Component={AdminUpdate} />,
    // },
    // {
    //     path: "/admin/update/password",
    //     element: <ProtectedRoute Component={AdminPassword} />,
    // },
    // {
    //     path: "/admin/update-password",
    //     element: <ProtectedRoute Component={AdminFirstTimePassword} />,
    // },
    // {
    //     path: "/admin/create-notice",
    //     element: <ProtectedRoute Component={CreateNotice} />,
    // },
    // {
    //     path: "/admin/delete-admin",
    //     element: <ProtectedRoute Component={DeleteAdmin} />,
    // },
    // {
    //     path: "/admin/delete-faculty",
    //     element: <ProtectedRoute Component={DeleteFaculty} />,
    // },
    // {
    //     path: "/admin/delete-student",
    //     element: <ProtectedRoute Component={DeleteStudent} />,
    // },
    // {
    //     path: "/admin/delete-subject",
    //     element: <ProtectedRoute Component={DeleteSubject} />,
    // },
    // {
    //     path: "/faculty/create-test",
    //     element: <ProtectedRoute Component={CreateTest} />,
    // },
    // {
    //     path: "/faculty/home",
    //     element: <ProtectedRoute Component={FacultyHome} />,
    // },
    // {
    //     path: "/faculty/mark-attendance",
    //     element: <ProtectedRoute Component={MarkAttendance} />,
    // },
    // {
    //     path: "/faculty/password",
    //     element: <ProtectedRoute Component={FacultyFirstTimePassword} />,
    // },
    // {
    //     path: "/faculty/profile",
    //     element: <ProtectedRoute Component={FacultyProfile} />,
    // },
    // {
    //     path: "/faculty/update",
    //     element: <ProtectedRoute Component={FacultyUpdate} />,
    // },
    // {
    //     path: "/faculty/update/password",
    //     element: <ProtectedRoute Component={FacultyPassword} />,
    // },
    // {
    //     path: "/faculty/upload-marks",
    //     element: <ProtectedRoute Component={UploadMarks} />,
    // },
    // {
    //     path: "/student/password",
    //     element: <ProtectedRoute Component={StudentFirstTimePassword} />,
    // },
    // {
    //     path: "/student/home",
    //     element: <ProtectedRoute Component={StudentHome} />,
    // },
    // {
    //     path: "/student/profile",
    //     element: <ProtectedRoute Component={StudentProfile} />,
    // },
    // {
    //     path: "/student/update",
    //     element: <ProtectedRoute Component={StudentUpdate} />,
    // },
    // {
    //     path: "/student/update/password",
    //     element: <ProtectedRoute Component={StudentPassword} />,
    // },
    // {
    //     path: "/student/subject-list",
    //     element: <ProtectedRoute Component={SubjectList} />,
    // },
    // {
    //     path: "/student/test-result",
    //     element: <ProtectedRoute Component={TestResult} />,
    // },
    // {
    //     path: "/student/attendance",
    //     element: <ProtectedRoute Component={Attendance} />,
    // },
])

export default routes
