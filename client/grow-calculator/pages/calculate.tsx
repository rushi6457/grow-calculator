import Navbar from "@/components/Navbar";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Container,
  Heading,
  Flex,
  Box,
  Text,
  Input,
} from '@chakra-ui/react'
import axios from "axios";
import {useEffect,useState} from "react";

const  getGraph =  async() => {
    let res = await axios.get('http://localhost:5000/calculate')
    // console.log(res);
             
}


function Calculate(){

    const [state,setState] = useState(0)
    const [state1,setState1] = useState(0)
    const interest = 0.070
    // const [userData,setUserData] =  useState({
    //     labels:state,
    //     datasets:[{
    //         label:"Total Investment",
    //         data:state1,
    //         backgroundColor:["skyblue","green"]
    //     }]
    // })
    useEffect(()=>{
        getGraph()
    },[])

    const handleChange = (e:any) =>{
        setState(e.target.value)
        
    }

    const handleChange1 = (e:any) =>{
        setState1(e.target.value)
    }
    
    return (
        <div>
        <Navbar/>
           
    <Flex>
        
        <Box>
        <Container>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text fontSize={'25px'}>Years Investment</Text>
                <Box>RS: {state}</Box>
            </Flex>
          <input onChange={handleChange} type="range" max='50000' min='1' />
        </Container>

         <Container>
             <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text fontSize={'25px'}>Time period(in years)</Text>
                <Box>RS: {state1}</Box>
            </Flex>
          <input onChange={handleChange1} type="range" max='15' min='1' />
        </Container>

       <Flex justifyContent={'center'} gap={'10px'}>
         <Text>Rate of interest</Text>
         <Box>{interest}</Box>
       </Flex>
    </Box>
    </Flex>
        </div>
    )
}
export default Calculate