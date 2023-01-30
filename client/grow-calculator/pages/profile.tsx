import Navbar from "@/components/Navbar";
import { Card, CardHeader, CardBody, CardFooter, Heading, Button, Text } from '@chakra-ui/react';
import axios from 'axios'
import { useEffect } from "react";
import { useSelector } from "react-redux";


    const getProfile = async() =>{
    //   let res = axios.get('http:')
 }

function Profile(){
    
    const auth = useSelector((store:any)=>store.auth)
    console.log(auth);   
    
    
    useEffect(()=>{
       getProfile()
    //    .then((res)=>console.log(res)) 
    },[])

    return (
        <div>
            <Navbar/>
             <Card w='40%' margin={'auto'} mt='10%'>
                <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                <Button>View here</Button>
                </CardFooter>
            </Card>
        </div>
    )
} 
export default Profile;