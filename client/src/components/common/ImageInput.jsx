import PropTypes from "prop-types"
import defaultAvatar from "@/assets/avatar.png"
import { useRef } from "react"

function ImageInput({ onDone, avatar, disabled = true }) {
    const inputRef = useRef(null)
    const handleImageError = (e) => {
        e.target.src = defaultAvatar
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
                    type="button"
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
    avatar: PropTypes.string,
    disabled: PropTypes.bool,
}

export default ImageInput
