import {
    House,
    UserSquare,
    Plus,
    Trash,
    UserGear,
    Person,
    BookOpenText,
    User,
} from "@phosphor-icons/react"

export const sidebarItems = [
    {
        title: "Dashboard",
        icon: <House size={24} weight="fill" />,
        path: "/admin/dashboard",
    },
    {
        title: "Profile",
        icon: <UserSquare size={24} weight="fill" />,
        path: "/admin/profile",
    },
    {}, // Empty object for creating a space
    {
        title: "Create Notice",
        icon: <Plus size={24} weight="fill" />,
        path: "/admin/create-notice",
    },
    {},
    {
        title: "Admin List",
        icon: <User size={24} weight="fill" />,
        path: "/admin/admin-list",
    },
    {
        title: "Add Admin",
        icon: <Plus size={24} weight="fill" />,
        path: "/admin/add-admin",
    },
    {
        title: "Delete Admin",
        icon: <Trash size={24} weight="fill" />,
        path: "/admin/delete-admin",
    },
    {},
    {
        title: "Add Department",
        icon: <Plus size={24} weight="fill" />,
        path: "/admin/add-department",
    },
    {
        title: "Delete Department",
        icon: <Trash size={24} weight="fill" />,
        path: "/admin/delete-department",
    },
    {},
    {
        title: "Faculty List",
        icon: <UserGear size={24} weight="fill" />,
        path: "/admin/faculty-list",
    },
    {
        title: "Add Faculty",
        icon: <Plus size={24} weight="fill" />,
        path: "/admin/add-faculty",
    },
    {
        title: "Delete Faculty",
        icon: <Trash size={24} weight="fill" />,
        path: "/admin/delete-faculty",
    },
    {},
    {
        title: "Student List",
        icon: <Person size={24} weight="fill" />,
        path: "/admin/student-list",
    },
    {
        title: "Add Students",
        icon: <Plus size={24} weight="fill" />,
        path: "/admin/add-student",
    },
    {
        title: "Delete Student",
        icon: <Trash size={24} weight="fill" />,
        path: "/admin/delete-student",
    },
    {},
    {
        title: "Subjects",
        icon: <BookOpenText size={24} weight="fill" />,
        path: "/admin/subject-list",
    },
    {
        title: "Add Subject",
        icon: <Plus size={24} weight="fill" />,
        path: "/admin/add-subject",
    },
    {
        title: "Delete Subject",
        icon: <Trash size={24} weight="fill" />,
        path: "/admin/delete-subject",
    },
    {},
]

const adminSidebarItems = [
    {
        title: "Dashboard",
        icon: <House size={24} weight="fill" />,
        path: "/",
    },
    {
        title: "Profile",
        icon: <UserSquare size={24} weight="fill" />,
        path: "/profile",
    },
    {}, // Empty object for creating a space
    {
        title: "Create Notice",
        icon: <Plus size={24} weight="fill" />,
        path: "/create-notice",
    },
    {},
    {
        title: "Admin List",
        icon: <User size={24} weight="fill" />,
        path: "/admin-list",
    },
    {
        title: "Admin Register",
        icon: <Plus size={24} weight="fill" />,
        path: "/register-admin",
    },
    {
        title: "Delete Admin",
        icon: <Trash size={24} weight="fill" />,
        path: "/delete-admin",
    },
    {},
    {
        title: "Create Department",
        icon: <Plus size={24} weight="fill" />,
        path: "/create-department",
    },
    {
        title: "Department List",
        icon: <Plus size={24} weight="fill" />,
        path: "/department-list",
    },
    {},
    {
        title: "Faculty List",
        icon: <UserGear size={24} weight="fill" />,
        path: "/faculty-list",
    },
    {
        title: "Add Faculty",
        icon: <Plus size={24} weight="fill" />,
        path: "/add-faculty",
    },
    {
        title: "Delete Faculty",
        icon: <Trash size={24} weight="fill" />,
        path: "/delete-faculty",
    },
    {},
    {
        title: "Student List",
        icon: <Person size={24} weight="fill" />,
        path: "/student-list",
    },
    {
        title: "Add Students",
        icon: <Plus size={24} weight="fill" />,
        path: "/add-student",
    },
    {
        title: "Delete Student",
        icon: <Trash size={24} weight="fill" />,
        path: "/delete-student",
    },
    {},
    {
        title: "Subjects",
        icon: <BookOpenText size={24} weight="fill" />,
        path: "/subject-list",
    },
    {
        title: "Add Subject",
        icon: <Plus size={24} weight="fill" />,
        path: "/add-subject",
    },
    {
        title: "Delete Subject",
        icon: <Trash size={24} weight="fill" />,
        path: "/delete-subject",
    },
    {},
]

export default {
    admin: adminSidebarItems,
}
