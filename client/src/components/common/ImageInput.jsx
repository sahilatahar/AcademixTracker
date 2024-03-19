import PropTypes from "prop-types"
import adminAvatar from "../../assets/admin.png"
import facultyAvatar from "../../assets/faculty.png"
import studentAvatar from "../../assets/student.png"
import { useRef, useState } from "react"

function ImageInput({ onDone, type }) {
    const inputRef = useRef(null)
    const getImgSrc = () => {
        switch (type) {
            case "admin":
                return adminAvatar
            case "faculty":
                return facultyAvatar
            case "student":
                return studentAvatar
            default:
                return studentAvatar
        }
    }
    const [imgSrc, setImgSrc] = useState(getImgSrc())

    const handleClick = () => {
        inputRef.current.click()
    }

    const handleChange = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (e) => {
            onDone({ base64: e.target.result })
            setImgSrc(e.target.result)
        }
    }
    return (
        <div className="mx-auto w-1/2 space-y-2 pb-4 sm:w-1/3 md:w-[250px]">
            <img
                src={imgSrc}
                alt="Avatar"
                className="block aspect-square w-full rounded-lg object-cover"
            />
            <input
                type="file"
                onChange={handleChange}
                className="hidden"
                accept="image/*"
                ref={inputRef}
            />
            <button
                className="w-full rounded-lg border border-gray-500 px-4 py-2 font-semibold"
                type="button"
                onClick={handleClick}
            >
                Change Avatar
            </button>
        </div>
    )
}

ImageInput.propTypes = {
    onDone: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
}

export default ImageInput
