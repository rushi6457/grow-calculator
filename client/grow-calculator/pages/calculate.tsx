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

  const  getGraph =  async(state:any,state1:any,interest:any) => {
    console.log(state,state1,interest);
    
    let res:any = await axios.post('http://localhost:5000/calculate',{
      state,
      state1,
      interest
    })
    // let data = await res.json();
    console.log(res);
    
             
}

function Calculate(){

  const [investment,setInvestment] = useState({
      yearlyInvestment:500,
      timePeriod:15,
      rateOfInterest:7.1
  })

  // const calculateMatuity =async () =>{

      // let res = await axios.post('http://localhost:5000/calculate',investment)
      // console.log(res);
      const investmentAmount = investment.yearlyInvestment * investment.timePeriod;
    const totalInterest =
      investmentAmount * investment.rateOfInterest * investment.timePeriod;
    const maturityValue = investmentAmount + totalInterest;
    // return [ investmentAmount, totalInterest, maturityValue ];
      
  // }

  // useEffect(()=>{

    // calculateMatuity()
  // },[ investmentAmount, totalInterest, maturityValue])
    // const [state,setState] = useState(500)
    // const [state1,setState1] = useState(15)
    // const dist=2000
    // const interest = 0.071
    
    // const investedAmount = state * state1
    
const data = {
  labels: [investmentAmount,totalInterest],
  datasets: [
    {
      label: 'Total investment',
      data: [investmentAmount,totalInterest],
      backgroundColor: [
        '#2828FF',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        '#2828FF',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const handleChange = (e:any) =>{
  const {name,value} = e.target
      setInvestment({
        ...investment,
        [name]:value
      })
}
console.log(investment);

 

    
    return (
        <div>
        <Navbar/>
           
    <Flex justifyContent={'space-around'} alignItems={'center'}>
        
      <Box>
        <Container>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text fontSize={'25px'}>Yearly Investment</Text>
                <Box>RS: {investment.yearlyInvestment}</Box>
            </Flex>
        <input onChange={handleChange} value={investment.yearlyInvestment} name='yearlyInvestment' type="range" min={'500'} max='50000'  />
        </Container>

         <Container>
             <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text fontSize={'25px'}>Time period(in years)</Text>
                <Box> {`${investment.timePeriod}Yr`}</Box>
            </Flex>
          <input onChange={handleChange} value={investment.timePeriod} name='timePeriod' type="range" max='50' min='15' />
        </Container>

       <Flex justifyContent={'justify'} gap={'10px'}>
         <Text>Rate of interest</Text>
         <Box>{`${investment.rateOfInterest}%`}</Box>
       </Flex>

          <Text>{`Invested Amount: ${Math.floor(investmentAmount)}`}</Text>
          <Text>{`Total Interest: ${Math.floor(totalInterest)}`}</Text>
          <Text>{`Maturity value: ${Math.floor(maturityValue)}`}</Text>
    </Box>
   
        <Box>
            <Pie data={data}/>
        </Box>
     </Flex>


        </div>
    )
}
export default Calculate