import authAction from 'action/authAction';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

const Logout = () => {
    const {name, surname} = useSelector(store => store.user.user);

    const dispatch = useDispatch();
    return (
        <div className="flex items-center justify-between gap-5">
            <div className="text-xl text-bold text-white flex flex-col leading-none">
                <div className="">{name}</div>
                <div className="">{surname}</div>
            </div>
            <NavLink to={"/"} onClick={() => dispatch(authAction.logout())}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 5.99997H20V18H18V5.99997ZM16 11H7.414L11.707 6.70697L10.293 5.29297L3.586 12L10.293 18.707L11.707 17.293L7.414 13H16V11Z" fill="#F8FAFC"/>
                </svg>
            </NavLink>
        </div>
    )
}

export default Logout