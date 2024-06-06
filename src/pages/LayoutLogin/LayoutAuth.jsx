import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutAuth = () => {
    return (
        <div className='w-full h-full'>
            <Outlet/>
        </div>
    )
}

export default LayoutAuth