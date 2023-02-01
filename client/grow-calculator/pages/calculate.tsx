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
} from '@chakra-ui/react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js/auto';
import axios from "axios";
import {useEffect,useState} from "react";
ChartJS.register(ArcElement, Tooltip, Legend);



function Calculate(){

    const [state,setState] = useState(500)
    const [state1,setState1] = useState(15)
  
    const interest = 0.071
    const investedAmount = state * state1
    // console.log(investedAmount)
    const [getState,setGetState] = useState({
      investedAmount,
      interest,
      state1
    })
const data = {
  labels: [state1],
  datasets: [
    {
      label: 'Total investment',
      data: [state,interest],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
 

    const  getGraph =  async() => {
    let res = await axios.post('http://localhost:5000/calculate',investedAmount)
    console.log(res);
             
}

    useEffect(()=>{
        getGraph()
    },[])

    const handleChange = (e:any) =>{
        setState(e.target.value)
        setGetState(e.target.value)
    }

    const handleChange1 = (e:any) =>{
        setState1(e.target.value)
        setGetState(e.target.value)
    }
    
    return (
        <div>
        <Navbar/>
           
    <Flex justifyContent={'space-around'} alignItems={'center'}>
        
      <Box>
        <Container>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text fontSize={'25px'}>Years Investment</Text>
                <Box>RS: {state}</Box>
            </Flex>
          <input onChange={handleChange} type="range" max='50000' min='500' />
        </Container>

         <Container>
             <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text fontSize={'25px'}>Time period(in years)</Text>
                <Box> {`${state1}Yr`}</Box>
            </Flex>
          <input onChange={handleChange1} type="range" max='50' min='15' />
        </Container>

       <Flex justifyContent={'justify'} gap={'10px'}>
         <Text>Rate of interest</Text>
         <Box>{interest}</Box>
       </Flex>

          <Text>{`Invested Amount: ${investedAmount}`}</Text>
    </Box>
   
        <Box>
            <Pie data={data}/>
        </Box>
     </Flex>


        </div>
    )
}
export default Calculate