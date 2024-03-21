import PropTypes from "prop-types"
import adminAvatar from "../../assets/admin.png"
import facultyAvatar from "../../assets/faculty.png"
import studentAvatar from "../../assets/student.png"
import { useRef } from "react"

function ImageInput({ onDone, type, avatar, disabled = true }) {
    const inputRef = useRef(null)
    const handleImageError = (e) => {
        switch (type) {
            case "admin":
                e.target.src = adminAvatar
                break
            case "faculty":
                e.target.src = facultyAvatar
                break
            case "student":
                e.target.src = studentAvatar
                break
            default:
                break
        }
    }

    const handleClick = () => {
        inputRef.current.click()
    }

    const handleChange = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (e) => {
            onDone(e.target.result)
        }
    }
    return (
        <div className="mx-auto w-1/2 space-y-2 pb-4 sm:w-1/3 md:max-w-[200px]">
            <img
                src={avatar}
                alt="Avatar"
                className="block aspect-square w-full rounded-lg object-cover"
                onError={handleImageError}
            />
            <input
                type="file"
                onChange={handleChange}
                className="hidden"
                accept="image/*"
                ref={inputRef}
            />
            {disabled && (
                <button
                    onClick={handleClick}
                    className="w-full rounded-lg border border-gray-500 px-4 py-2 font-semibold"
                >
                    Change Image
                </button>
            )}
        </div>
    )
}

ImageInput.propTypes = {
    onDone: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
}

export default ImageInput
