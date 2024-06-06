

const ButtonMain = ({
    text,
    cb
}) => {
    return (
        <button className="py-4 px-6 text-2xl text-white flex justify-center items-center bg-teal-700 text-center rounded-xl" onClick={() => cb()}>
            {text}
        </button>
    )
}

export default ButtonMain