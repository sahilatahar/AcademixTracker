import React from "react"
import { Circles } from "react-loader-spinner"
const Spinner = ({ message, height, width, color, messageColor }) => {
    return (
        <div className="flex w-full flex-col items-center justify-center">
            <Circles
                color={color}
                height={height}
                width={width}
                className="m-5"
            />
            <p
                style={{ color: messageColor }}
                className="px-2 text-center text-lg"
            >
                {message}
            </p>
        </div>
    )
}

export default Spinner
