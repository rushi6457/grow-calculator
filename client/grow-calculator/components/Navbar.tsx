import { logout } from "@/redux/auth/actions";
import { Button, Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"


function Navbar () {

    const auth = useSelector((store:any)=>store.auth)
    // console.log(auth);
    const router = useRouter()
    const [state,setState] = useState(true)
    const dispatch = useDispatch()
   useEffect(()=>{
    
   
   },[])



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
                    <UnorderedList textStyle={'none'} listStyleType={'none'}>
                         <Flex justifyContent={'space-around'} gap={'50px'}>
                            {/* <ListItem fontSize={'2xl'} fontWeight={'600'} >
                                <Link  href={'/profile'}>Profile</Link>    
                            </ListItem>    
                            <ListItem fontSize={'2xl'}  fontWeight={'600'} >
                                <Link href={'/calculate'}>Calculate</Link> */}
                            {/* </ListItem>     */}
                        </Flex>   
                    </UnorderedList>
                    <Heading>Grow Calculator</Heading>
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