import { logout } from "@/redux/auth/actions";
import { Button, Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import styles from "../styles/Navbar.module.css";

function Navbar () {

    const auth = useSelector((store:any)=>store)
    console.log(auth);
    const router = useRouter()
    const [state,setState] = useState(true)
    const dispatch = useDispatch()
  
const handleClick = () =>{

        if(auth){
            dispatch(logout())
        }
        else{
            router.push("/login")
        }
}
    return (
   
            <Flex justifyContent={'space-between'} alignItems={'center'}  padding={'10px'} bgColor={'blue.200'}  width={'100%'}>
                    
                    <Heading textAlign='center'>Grow Calculator</Heading>
                <Flex justifyContent={'space-around'} gap={'20px'} padding={'10px'}>
                    <Link href='/signup'>
                        <Button variant={'solid'} colorScheme={'red'}>Signup</Button>
                    </Link>  
                    <Link href={'/login'}>  
                        <Button onClick={handleClick} variant='outline' colorScheme={'red'}>{!auth  ? "LOGOUT":"LOGIN"}</Button>  
                    </Link>  
                </Flex> 
            </Flex>    
      
    )
}
export default Navbar