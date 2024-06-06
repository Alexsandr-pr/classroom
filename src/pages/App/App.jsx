
import { Route, Routes } from 'react-router-dom'
import Layout from 'pages/Layout/Layout'
import Home from 'pages/Home/Home'

import './App.css'
import Settings from 'pages/Settings/Settings'
import { useEffect, useState } from 'react'
import Login from 'pages/Login/Login'
import LayoutAuth from 'pages/LayoutLogin/LayoutAuth'
import Registration from 'pages/Registration/Registration'
import { useDispatch, useSelector } from 'react-redux'
import LoadingApp from 'components/Loading/LoadingApp'
import { changeLoadingAuth } from 'store/userReducer'
import authAction from 'action/authAction'

const App = () => {
    const {isLoading, isAuth} = useSelector(store => store.user)
    const dispatch = useDispatch();

    useEffect(() => {
        if(localStorage.getItem("token")) {
            dispatch(authAction.checkAuth());
        } else {
            dispatch(changeLoadingAuth(false));
        }
    },[]);
    
    if(isLoading) {
        return <LoadingApp/>
    }

    if(!isAuth) {
        return (
            <Routes>
                <Route path="/" element={ <LayoutAuth/>}>
                    <Route path="/" element={<Login/>}/>
                    <Route path="registration" element={<Registration/>}/>
                </Route>
            </Routes>
        )
    }  

    return (
        <Routes>
            <Route  path="/" element={ <Layout />}>
                <Route path='home'  element={<Home/>}/>
                <Route path='settings'  element={<Settings/>}/>
            </Route>
        </Routes>
    )
}

export default App;
