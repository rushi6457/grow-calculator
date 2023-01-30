import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS,REGISTER_SUCCESS,LOGOUT } from "./types"

if(typeof window === 'object'){

    // var token:any = (localStorage.getItem('token') || '');
}

const initState = {
    isAuth: false,
    isError: false,
    token:'',
    isLoading: false,
    isRegistered: false
}

export const reducer = (state = initState,{type,payload}:any) =>{

        switch(type){

            case LOGIN_REQUEST:{
                return {
                    ...state,
                    isAuth:false,
                    isLoading:true,
                    isError:false,
                    token:''
                }
            }

            case LOGIN_SUCCESS:{
                // localStorage.setItem('token',JSON.stringify(token))
                return {
                    ...state,
                    isLoading:false,
                    token: payload,
                    isError:false,
                    isAuth:true
                }
            }

            case LOGIN_FAIL:{
                return {
                    ...state,
                    isAuth:false,
                    isLoading:false,
                    isError:true,
                    token:''
                }
            }

        case LOGOUT:{
            // localStorage.removeItem('token')
            return {
                ...state,
                isAuth:false,
                token:'',
                isError:false,
            }
        }
            case REGISTER_SUCCESS:{
                return {
                    isRegistered:true,
                }
            }

            default:{
                return state
            }
        }
}