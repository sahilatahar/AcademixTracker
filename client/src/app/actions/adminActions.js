import {
    setAdminData as setAdminDataAction,
    logOut as logOutAction,
    setAllFaculties as setAllFacultiesAction,
    setAllSubjects as setAllSubjectsAction,
    setAllStudents as setAllStudentsAction,
    setAllAdmins as setAllAdminsAction,
    setDepartments as setDepartmentsAction,
    setFaculties as setFacultiesAction,
    setSubjects as setSubjectsAction,
    setStudents as setStudentsAction,
    setAdmins as setAdminsAction,
    setNotices as setNoticesAction,
    addAdmin as addAdminAction,
    addFaculty as addFacultyAction,
    addStudent as addStudentAction,
    addSubject as addSubjectAction,
    addDepartment as addDepartmentAction,
    addNotice as addNoticeAction,
    updateFaculty as updateFacultyAction,
    updateStudent as updateStudentAction,
    updateSubject as updateSubjectAction,
    updateAdmin as updateAdminAction,
    updateNotice as updateNoticeAction,
    deleteAdmin as deleteAdminAction,
    deleteFaculty as deleteFacultyAction,
    deleteStudent as deleteStudentAction,
    deleteSubject as deleteSubjectAction,
    deleteDepartment as deleteDepartmentAction,
} from "../slices/adminSlice"
import { setError } from "../slices/errorSlice"
import * as api from "../api/admin"
import { showToast } from "../../utils/toast"

export const adminLogin = async (formData, dispatch) => {
    try {
        const { data } = await api.adminLogin(formData)
        localStorage.setItem("token", data.token)
        dispatch(setAdminDataAction(data.admin))
        showToast("Login successful", "success")
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const adminLogout = (dispatch) => {
    localStorage.clear()
    dispatch(logOutAction())
    showToast("Log out successful", "success")
    return true
}

export const updateAdminProfile = async (formData, dispatch) => {
    try {
        const { data } = await api.updateAdmin(formData)
        dispatch(setAdminDataAction(data.admin))
    } catch (error) {
        showToast(error.response.data.message, "error")
    }
}

export const updateAdminPassword = async (formData, dispatch) => {
    try {
        const { data } = await api.updateAdminPassword(formData)
        dispatch(updateAdminPassword(data.admin))
    } catch (error) {
        dispatch(setError(error.response.data))
    }
}

export const getAllStudents = async (dispatch) => {
    try {
        const { data } = await api.getAllStudents()
        dispatch(setAllStudentsAction(data.students))
    } catch (error) {
        console.log("Redux Error", error)
    }
}

export const getStudents = async (formData, dispatch) => {
    try {
        const { data } = await api.getStudents(formData)
        dispatch(setStudentsAction(data.students))
    } catch (error) {
        dispatch(setError(error.response.data))
    }
}

export const addStudent = async (formData, dispatch) => {
    try {
        const { data } = await api.addStudent(formData)
        dispatch(addStudentAction(data.student))
    } catch (error) {
        dispatch(setError(error.response.data))
    }
}

export const updateStudent = async (formData, dispatch) => {
    try {
        const { data } = await api.updateStudent(formData)
        dispatch(updateStudentAction(data.student))
    } catch (error) {
        dispatch(setError(error.response.data))
    }
}

export const deleteStudent = async (id, dispatch) => {
    try {
        await api.deleteStudent(id)
        dispatch(deleteStudentAction(id))
    } catch (error) {
        dispatch(setError(error.response.data))
    }
}

export const getAllFaculties = async (dispatch) => {
    try {
        const { data } = await api.getAllFaculties()
        dispatch(setAllFacultiesAction(data.faculties))
    } catch (error) {
        console.log("Redux Error", error)
    }
}

export const getFaculties = async (department, dispatch) => {
    try {
        const { data } = await api.getFaculties(department)
        dispatch(setFacultiesAction(data.faculties))
    } catch (error) {
        dispatch(setError(error.response.data))
    }
}

export const addFaculty = async (formData, dispatch) => {
    try {
        const { data } = await api.addFaculty(formData)
        dispatch(addFacultyAction(data.faculty))
    } catch (error) {
        dispatch(setError(error.response.data))
    }
}

export const updateFaculty = async (formData, dispatch) => {
    try {
        const { data } = await api.updateFaculty(formData)
        dispatch(updateFacultyAction(data.faculty))
    } catch (error) {
        dispatch(setError(error.response.data))
    }
}

export const deleteFaculty = async (id, dispatch) => {
    try {
        await api.deleteFaculty(id)
        dispatch(deleteFacultyAction(id))
    } catch (error) {
        dispatch(setError(error.response.data))
    }
}

export const getAllAdmins = async (dispatch) => {
    try {
        const { data } = await api.getAllAdmins()
        dispatch(setAllAdminsAction(data.admins))
    } catch (error) {
        console.log("Redux Error", error)
    }
}

export const getAdmins = async (department, dispatch) => {
    try {
        const { data } = await api.getAdmins(department)
        dispatch(setAdminsAction(data.admins))
    } catch (error) {
        dispatch(setError(error.response.data))
    }
}

export const addAdmin = async (formData, dispatch) => {
    try {
        const { data } = await api.addAdmin(formData)
        dispatch(addAdminAction(data.admin))
        return true
    } catch (error) {
        showToast(error.response.data.message, "error")
        return false
    }
}

export const updateAdmin = async (formData, dispatch) => {
    try {
        const { data } = await api.updateAdmin(formData)
        dispatch(updateAdminAction(data.admin))
    } catch (error) {
        dispatch(setError(error.response.data))
    }
}

export const deleteAdmin = async (id, dispatch) => {
    try {
        await api.deleteAdmin(id)
        dispatch(deleteAdminAction(id))
    } catch (error) {
        dispatch(setError(error.response.data))
    }
}

export const getDepartments = async (dispatch) => {
    try {
        const { data } = await api.getDepartments()
        dispatch(setDepartmentsAction(data.departments))
    } catch (error) {
        console.log("Redux Error", error)
    }
}

export const addDepartment = async (formData, dispatch) => {
    try {
        const { data } = await api.addDepartment(formData)
        dispatch(addDepartmentAction(data.department))
    } catch (error) {
        dispatch(setError(error.response.data))
    }
}

export const deleteDepartment = async (id, dispatch) => {
    try {
        await api.deleteDepartment(id)
        dispatch(deleteDepartmentAction(id))
    } catch (error) {
        dispatch(setError(error.response.data))
    }
}

export const getAllSubjects = async (dispatch) => {
    try {
        const { data } = await api.getAllSubjects()
        dispatch(setAllSubjectsAction(data.subjects))
    } catch (error) {
        console.log("Redux Error", error)
    }
}

export const getSubjects = async (formData, dispatch) => {
    try {
        const { data } = await api.getSubjects(formData)
        dispatch(setSubjectsAction(data.subjects))
    } catch (error) {
        dispatch(setError(error.response.data))
    }
}

export const addSubject = async (formData, dispatch) => {
    try {
        const { data } = await api.addSubject(formData)
        dispatch(addSubjectAction(data.subject))
    } catch (error) {
        dispatch(setError(error.response.data))
    }
}

export const updateSubject = async (formData, dispatch) => {
    try {
        const { data } = await api.updateSubject(formData)
        dispatch(updateSubjectAction(data.subject))
    } catch (error) {
        dispatch(setError(error.response.data))
    }
}

export const deleteSubject = async (id, dispatch) => {
    try {
        await api.deleteSubject(id)
        dispatch(deleteSubjectAction(id))
    } catch (error) {
        dispatch(setError(error.response.data))
    }
}

export const getNotices = async (formData, dispatch) => {
    try {
        const { data } = await api.getNotices(formData)
        dispatch(setNoticesAction(data.notices))
    } catch (error) {
        dispatch(setError(error.response.data))
    }
}

export const createNotice = async (formData, dispatch) => {
    try {
        const { data } = await api.createNotice(formData)
        dispatch(addNoticeAction(data.notice))
    } catch (error) {
        dispatch(setError(error.response.data))
    }
}

export const updateNotice = async (formData, dispatch) => {
    try {
        const { data } = await api.updateNotice(formData)
        dispatch(updateNoticeAction(data.notice))
    } catch (error) {
        dispatch(setError(error.response.data))
    }
}
