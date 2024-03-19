import { Routes, Route } from "react-router-dom"
import AddAdmin from "./components/admin/addAdmin/AddAdmin"
import AddDepartment from "./components/admin/addDepartment/AddDepartment"
import AddFaculty from "./components/admin/addFaculty/AddFaculty"
import AddStudent from "./components/admin/addStudent/AddStudent"
import AddSubject from "./components/admin/addSubject/AddSubject"
import AdminHome from "./components/admin/AdminHome"

import getFaculty from "./components/admin/getFaculty/GetFaculty"
import getStudent from "./components/admin/getStudent/GetStudent"
import GetSubject from "./components/admin/getSubject/GetSubject"
import AdminProfile from "./components/admin/profile/Profile"
import AdminFirstTimePassword from "./components/admin/profile/update/firstTimePassword/FirstTimePassword"
import AdminPassword from "./components/admin/profile/update/password/Password"

import AdminUpdate from "./components/admin/profile/update/Update"
import CreateTest from "./components/faculty/createTest/CreateTest"
import FacultyHome from "./components/faculty/FacultyHome"
import MarkAttendance from "./components/faculty/markAttendance/MarkAttendance"
import FacultyProfile from "./components/faculty/profile/Profile"
import FacultyFirstTimePassword from "./components/faculty/profile/update/firstTimePassword/FirstTimePassword"
import FacultyPassword from "./components/faculty/profile/update/password/Password"
import FacultyUpdate from "./components/faculty/profile/update/Update"
import UploadMarks from "./components/faculty/uploadMarks/UploadMarks"
import AdminLogin from "./components/login/adminLogin/AdminLogin"
import AdminRegister from "./components/register/adminRegister/AdminRegister"
import FacultyLogin from "./components/login/facultyLogin/FacultyLogin"
import FacultyRegister from "./components/register/facultyRegister/FacultyRegister"
import Login from "./components/login/Login"

import StudentLogin from "./components/login/studentLogin/StudentLogin"
import StudentRegister from "./components/register/studentRegister/StudentRegister"
import StudentFirstTimePassword from "./components/student/profile/update/firstTimePassword/FirstTimePassword"
import StudentHome from "./components/student/StudentHome"
import StudentProfile from "./components/student/profile/Profile"
import StudentUpdate from "./components/student/profile/update/Update"
import StudentPassword from "./components/student/profile/update/password/Password"
import SubjectList from "./components/student/subjectList/SubjectList"
import TestResult from "./components/student/testResult/TestResult"
import Attendance from "./components/student/attendance/Attendance"
import DeleteAdmin from "./components/admin/deleteAdmin/DeleteAdmin"
import DeleteDepartment from "./components/admin/deleteDepartment/DeleteDepartment"
import DeleteFaculty from "./components/admin/deleteFaculty/DeleteFaculty"
import DeleteStudent from "./components/admin/deleteStudent/DeleteStudent"
import DeleteSubject from "./components/admin/deleteSubject/DeleteSubject"
import CreateNotice from "./components/admin/createNotice/CreateNotice"

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Login />} />

            {/* Admin  */}

            <Route path="/login/admin-login" element={<AdminLogin />} />
            <Route
                path="/register/admin-register"
                element={<AdminRegister />}
            />
            <Route path="/admin/home" element={<AdminHome />} />
            <Route path="/admin/profile" element={<AdminProfile />} />
            <Route path="/admin/update" element={<AdminUpdate />} />
            <Route path="/admin/update/password" element={<AdminPassword />} />
            <Route
                path="/admin/update-password"
                element={<AdminFirstTimePassword />}
            />
            <Route path="/admin/create-notice" element={<CreateNotice />} />
            <Route path="/admin/add-admin" element={<AddAdmin />} />
            <Route path="/admin/delete-admin" element={<DeleteAdmin />} />
            <Route path="/admin/add-department" element={<AddDepartment />} />
            <Route
                path="/admin/delete-department"
                element={<DeleteDepartment />}
            />
            <Route path="/admin/add-faculty" element={<AddFaculty />} />
            <Route path="/admin/delete-faculty" element={<DeleteFaculty />} />
            <Route path="/admin/delete-student" element={<DeleteStudent />} />
            <Route path="/admin/delete-subject" element={<DeleteSubject />} />
            <Route path="/admin/all-faculties" element={<getFaculty />} />
            <Route path="/admin/add-student" element={<AddStudent />} />
            <Route path="/admin/add-subject" element={<AddSubject />} />
            <Route path="/admin/all-subjects" element={<GetSubject />} />
            <Route path="/admin/all-students" element={<getStudent />} />

            {/* Faculty  */}

            <Route path="/login/faculty-login" element={<FacultyLogin />} />
            <Route
                path="/register/faculty-register"
                element={<FacultyRegister />}
            />
            <Route path="/faculty/home" element={<FacultyHome />} />
            <Route
                path="/faculty/password"
                element={<FacultyFirstTimePassword />}
            />
            <Route path="/faculty/profile" element={<FacultyProfile />} />
            <Route path="/faculty/update" element={<FacultyUpdate />} />
            <Route
                path="/faculty/update/password"
                element={<FacultyPassword />}
            />
            <Route path="/faculty/create-test" element={<CreateTest />} />
            <Route path="/faculty/upload-marks" element={<UploadMarks />} />
            <Route
                path="/faculty/mark-attendance"
                element={<MarkAttendance />}
            />

            {/* Student  */}

            <Route path="/login/student-login" element={<StudentLogin />} />
            <Route
                path="/register/student-register"
                element={<StudentRegister />}
            />
            <Route path="/student/home" element={<StudentHome />} />
            <Route
                path="/student/password"
                element={<StudentFirstTimePassword />}
            />
            <Route path="/student/profile" element={<StudentProfile />} />
            <Route path="/student/update" element={<StudentUpdate />} />
            <Route
                path="/student/update/password"
                element={<StudentPassword />}
            />
            <Route path="/student/subject-list" element={<SubjectList />} />
            <Route path="/student/test-result" element={<TestResult />} />
            <Route path="/student/attendance" element={<Attendance />} />
        </Routes>
    )
}

export default App
