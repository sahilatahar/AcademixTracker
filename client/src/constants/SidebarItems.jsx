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
        path: "/admin/all-students",
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
        path: "/admin/all-subjects",
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
