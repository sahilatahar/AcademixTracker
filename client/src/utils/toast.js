import { toast } from "react-hot-toast"

export const showToast = (message, type) => {
    switch (type) {
        case "success":
            toast.success(message)
            break
        case "error":
            toast.error(message)
            break
        case "loading":
            toast.loading(message)
            break
        default:
            toast(message)
    }
}

export const hideToast = () => {
    toast.dismiss()
}
