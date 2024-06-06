import { NavLink } from "react-router-dom"


const ButtonNav = ({
    to,
    text,
    cb
}) => {
    return (
        <NavLink
            onClick={() => cb()}
            to={to} 
            className="uppercase  w-4/6 sm:w-1/2 p-2 border-t border-solid text-center border-t-sky-900 rounded-lg bg-indigo-500 text-white text-xl text-bold"
        >
                {text}
        </NavLink>
    )
}

export default ButtonNav