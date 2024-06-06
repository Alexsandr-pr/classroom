
import logo from "assets/logo.svg"
import Logout from "components/Logout"
import { NavLink } from "react-router-dom"
const data = [
    {
        text: "Home",
        to: "home"
    },
    {
        text: "Settings",
        to: "settings"
    }
]


const Menu = () => {
    return (
        <div className="w-full h-full bg-slate-700 flex flex-col p-8">
            <img className=" block pb-12" src={logo} alt="Logo" />
            <ul className="flex flex-col flex-auto gap-4 pt-12 border-teal-700 border-t-2 border-solid">
                {
                    data.map(({text, to}) => {
                        return (
                            <li key={to} className="text-white flex justify-center items-center">
                                <NavLink to={to} className="py-4 px-6 text-2xl bg-teal-700 w-full text-center rounded-xl">
                                    {text}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <Logout/>
        </div>
    )
}

export default Menu