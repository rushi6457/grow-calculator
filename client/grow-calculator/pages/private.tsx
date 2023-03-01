import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function PrivateRoute({children}:any){

        const auth = useSelector((store:any)=>store.auth.isAuth)

        let {pathname}:any = useRouter()

        if(auth){
            return children
        }
        else{
            return (
                pathname.push("/login")
            )
        }
        
}