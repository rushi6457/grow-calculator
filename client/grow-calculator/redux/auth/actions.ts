import axios from "axios"
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_SUCCESS,LOGOUT } from "./types"

export const login = (creds:any) =>async(dispatch:any) =>{

        dispatch({type:LOGIN_REQUEST})

        try {
            let res:any = await axios.post(`http://localhost:5000/user/login`,creds)
            console.log(res.data);

            dispatch({type:LOGIN_SUCCESS,payload:res.data})
        } catch (error) {
            dispatch({type:LOGIN_FAIL})
        }
}

export const signup = (creds:any) =>async(dispatch:any) =>{

        const res:any = await axios.post(`http://localhost:5000/user/signup`,creds)
        console.log(res.data);
        dispatch({type:REGISTER_SUCCESS,payload:res.data})
        
}
export const logout = () => ({type:LOGOUT})