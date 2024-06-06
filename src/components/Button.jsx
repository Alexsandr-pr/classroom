import React from 'react'

const Button = ({
    cb,
    text
}) => {
    return (
        <button
            className="uppercase w-4/6 sm:w-1/2 p-2  border-t border-solid text-center border-t-sky-900 rounded-lg bg-indigo-500 text-xl text-white text-bold"
            onClick={(e) => {
                e.preventDefault();
                cb();
            }}
        >
            {text}
        </button>
    )
}

export default Button