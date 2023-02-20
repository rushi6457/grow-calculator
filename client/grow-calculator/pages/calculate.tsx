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
  VStack,
} from '@chakra-ui/react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js/auto';
import axios from "axios";
import {useEffect,useState} from "react";
import numFormatter from "number_formatter";
ChartJS.register(ArcElement, Tooltip, Legend);

function Calculate (){

  const [investment,setInvestment] = useState({
      yearlyInvestment:500,
      timePeriod:15,
      rateOfInterest:7.1
  })

      const investmentAmount = (investment.yearlyInvestment * investment.timePeriod);
      let inves = numFormatter(investmentAmount)
    console.log(inves);
    
    
    
    const totalInterest = investment.rateOfInterest/100 * investmentAmount
    
    const maturityValue = investment.yearlyInvestment * ((((1+0.071) ** investment.timePeriod)-1)/0.071)
    // investment.yearlyInvestment * ((((1+investment.rateOfInterest/100)**investment.timePeriod)-1)/investment.rateOfInterest/100);
     
const data = {
  labels: ['Total Investment','Total Interest'],
  datasets: [
    {
      label: 'Total investment',
      data: [investment.timePeriod,10],
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
// console.log(investment);

 

    
    return (
        <div>
        <Navbar/>
           
    <Flex justifyContent={'space-between'} alignItems={'center'}padding={'4rem'}gap={'-100px'}>
        
      <Box >
        <Container>
            <Flex alignItems={'center'} justifyContent={'space-between'} w='200%' >
                <Text fontSize={'25px'}>Yearly Investment</Text>
                <Text  fontSize='1.2rem'  padding={'0px 10px 0px 10px'}bgColor={'green.300'}borderRadius={'5px'}>RS: {investment.yearlyInvestment}</Text>
            </Flex>
        <input style={{width:'200%',height:'50px'}} onChange={handleChange} value={investment.yearlyInvestment} name='yearlyInvestment' type="range" min={'500'} max='50000'  />
        </Container>

         <Container>
             <Flex alignItems={'center'} justifyContent={'space-between'}w='200%'>
                <Text  fontSize={'25px'}>Time period(in years)</Text>
                <Text fontSize='1.2rem'  padding={'0px 10px 0px 10px'}bgColor={'green.300'}borderRadius={'5px'} > {`${investment.timePeriod}Yr`}</Text>
            </Flex>
          <input style={{width:'200%',height:'50px'}} onChange={handleChange} value={investment.timePeriod} name='timePeriod' type="range" max='50' min='15' />
        </Container>

       <Flex w='185%'  justifyContent={'space-between'} gap={'10px'}align={'center'}>
         <Text fontSize='2rem'>Rate of interest</Text>
         <Box fontSize='1.5rem'  padding={'0px 10px 0px 10px'}bgColor={'green.300'}borderRadius={'10px'}>{`${investment.rateOfInterest}%`}</Box>
       </Flex>

       <Flex w='190%' justifyContent={'space-between'}align='center' marginTop={'5%'}>
        <VStack>
            <Text fontSize={'1.4rem'}textAlign={'justify'}>Invested Amount</Text>
            <Text fontSize={'1.4rem'}textAlign={'justify'}>Total Interest</Text>
            <Text fontSize={'1.4rem'}textAlign={'justify'}>Maturity value</Text>
          </VStack>
          <VStack>
              <Text fontSize={'1.4rem'} textAlign={'justify'}>{`RS: ${inves}`}</Text>
              <Text fontSize={'1.4rem'} textAlign={'justify'}>{`RS: ${numFormatter(Math.floor(maturityValue-investmentAmount))}`}</Text>
              <Text fontSize={'1.4rem'} textAlign={'justify'}>{`RS: ${numFormatter(Math.floor(maturityValue))}`}</Text>
          </VStack>
       </Flex>

    </Box>
   
        <Box>
            <Pie data={data}/>
        </Box>
     </Flex>


        </div>
    )
}
export default Calculate