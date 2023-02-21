import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS,REGISTER_SUCCESS,LOGOUT, REGISTER_REQUEST, REGISTER_FAIL } from "./types"

if(typeof window !== 'undefined'){

    // var token:any = (localStorage.getItem('token') || '');
    // try {
        //   var token:any = JSON.parse(localStorage.getItem('token') || '');
    // } catch (error) {
        // console.log(error);
        
    // }
}

const loginInitState = {
    isAuth: false,
    isError: false,
    token:'',
    isLoading: false,
}



export const loginReducer = (state = loginInitState,{type,payload}:any) =>{

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
                    isAuth:true,
                    isLoading:false,
                    token: payload,
                    isError:false,
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
        

            default:{
                return state
            }
        }
}

const signupInitState = {
    isRegistered:false,
    isRegisterLoading:false,
    isRegisterError:false,
}
export const signupReducer = (state = signupInitState , {type,payload} :any) =>{
    switch(type){

    case REGISTER_REQUEST:{
        return {
            ...state,
            isRegistered:false,
            isRegisterLoading:true,
            isRegisterError:false,
        }
    }
    case REGISTER_SUCCESS:{
        return {
            ...state,
            isRegistered:payload,
            isRegisterLoading:false,
            isRegisterError:false,
        }
    }
    case REGISTER_FAIL:{
        return {
            ...state,
            isRegistered:false,
            isRegisterLoading:false,
            isRegisterError:true,
        }
    }
        default:{
            return state
        }
    }
}