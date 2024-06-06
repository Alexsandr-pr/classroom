

import { _API_URL } from "../../config";
import $api from "../http/index";
import axios from "axios";
import {
    loginUser,
    registrationUser, 
    logoutUser, 
    changeLoadingAuth
} from "store/userReducer"



class AuthAction {

    login (email, password){
        return async dispatch => {
            try {
                const response = await $api.post("/user/login", {email, password});
                localStorage.setItem("token", response.data.accessToken);
                
                if(response.status === 200) {
                    return dispatch(loginUser(response.data.user));
                }

            } catch (e) {
                console.log(e.response.data.message)
            }
        }
    }
    registration (email, password, name, surname){
        return async dispatch => {
            try {
                const response = await $api.post(`/user/registration`, {email, password, name, surname});
                
                localStorage.setItem("token", response.data.accessToken);
                if(response.status === 200) {
                    return dispatch(registrationUser(response.data.user)),
                            dispatch(changeLoadingAuth(false));
                }
            } catch(e) {
                console.log(e.response.data.message)
            } 
        }
    }

    logout(){
        return async dispatch => {
            const response = await $api.post("/user/logout");
            localStorage.removeItem("token");    
            if(response.status === 200) {
                return dispatch(logoutUser());
            }    
        }
    }

    checkAuth() {
        return async dispatch => {
            try {
                dispatch(changeLoadingAuth(true))
                const response = await  axios.get(`${_API_URL}/user/refresh`, { withCredentials: true })
                
                if(response.status === 200) {
                    localStorage.setItem("token", response.data.accessToken);
                    return dispatch(loginUser(response.data.user));
                }
            } catch (e) {
                console.log(e.response.data.message);
            } finally {
                dispatch(changeLoadingAuth(false))
            }
        }
    }
    
    deleteUser(id) {
        return async dispatch => {
            try {
                const response = await axios.delete(`${_API_URL}/user/del/${id}`, { withCredentials: true });
                if(response.status === 200) {
                    localStorage.removeItem("token");  
                    return dispatch(logoutUser())
                }
            } catch(e) {
                console.log(e)
            }
        }
    }
}

export default new AuthAction