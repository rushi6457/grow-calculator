import axios from "axios"
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_SUCCESS,LOGOUT, REGISTER_REQUEST } from "./types"

export const login:any = (creds:any) =>async(dispatch:any) =>{

        dispatch({type:LOGIN_REQUEST})

        try {
            let res:any = await axios.post(`https://server-0bh8.onrender.com/user/login`,creds)
            console.log(res.data);

            dispatch({type:LOGIN_SUCCESS,payload:res.data})
        } catch (error) {
            dispatch({type:LOGIN_FAIL})
        }
}

export const signup:any = (creds:any) =>async(dispatch:any) =>{
            dispatch({type:REGISTER_REQUEST})
        const res:any = await axios.post(`https://server-0bh8.onrender.com/user/signup`,creds)
        console.log(res.data);
        dispatch({type:REGISTER_SUCCESS,payload:res.data})
        
}
export const logout = () => ({type:LOGOUT})