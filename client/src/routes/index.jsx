import { createBrowserRouter } from "react-router-dom"

import Login from "@/pages/Login"

import HomePage from "@/pages/Home"

// Outlets

import Dashboard from "@/components/Dashboard"
import Profile from "@/components/Profile"
import UpdatePassword from "@/components/PasswordUpdate"
import AdminList from "@/components/admin/AdminList"
import AdminRegister from "@/components/admin/AdminRegister"
import AdminDelete from "../components/admin/DeleteAdmin"

import CreateDepartment from "@/components/department/CreateDepartment"
import DepartmentList from "@/components/department/DepartmentList"
import UpdateDepartment from "@/components/department/UpdateDepartment"

import ProtectedRoute from "./ProtectedRoute"
import AuthRedirect from "./AuthRedirect"
import NotFound from "@/components/common/NotFound"

const routes = createBrowserRouter([
    {
        path: "/login",
        element: <AuthRedirect Component={Login} />,
    },
    {
        path: "/",
        element: <ProtectedRoute Component={HomePage} />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
            {
                path: "update-password",
                element: <UpdatePassword />,
            },
            {
                path: "admin-list",
                element: <AdminList />,
            },
            {
                path: "register-admin",
                element: <AdminRegister />,
            },
            {
                path: "delete-admin",
                element: <AdminDelete />,
            },
            {
                path: "create-department",
                element: <CreateDepartment />,
            },
            {
                path: "department-list",
                element: <DepartmentList />,
            },
            {
                path: "update-department/:id",
                element: <UpdateDepartment />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
])

export default routes
