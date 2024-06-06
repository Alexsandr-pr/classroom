import Menu from "components/Menu/Menu"

import { Outlet } from "react-router-dom"


const Layout = () => {

    return (
            <div className="w-full h-full flex">
                <div className="w-1/6 h-full">
                    <Menu/>
                </div>
                <div className="w-5/6 h-full bg-slate-800">
                    <Outlet/>
                </div>
            </div>
    )
    

    
}

export default Layout