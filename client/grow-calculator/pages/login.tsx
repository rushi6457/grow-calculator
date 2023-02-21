import Navbar from "@/components/Navbar"
import { login } from "@/redux/auth/actions";
import { store } from "@/redux/store";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
  Container,
  VStack,
} from '@chakra-ui/react';
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import {useSelector,useDispatch} from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Login () {

  const auth:any = useSelector<any>(store=>store.loginAuth)
 console.log(auth);
 const router:any = useRouter()
 
  const dispatch = useDispatch()
  const [user,setUser] = useState({
    email:"",
    password: ""
  })

  const handleChange = (e:any) =>{
      const {name,value} = e.target;
      setUser({
        ...user,
        [name]:value
      })
  }

  const handleSubmit = (e:any) =>{
      e.preventDefault();
      dispatch(login(user));
  }

  useEffect(()=>{
      if(auth.token.status === true){
        toast.success(auth.token.message)
          router.push("/calculate")
      }
      else if(auth.token.status === false){
        toast.error(auth.token.message)
      }
  },[auth.token.status])


    return (

      <div>
      <Navbar/>
      <Center>
          <form 
              onSubmit={handleSubmit}
             style={{border:'1px solid',borderColor:'gray', width:'40%',marginTop:'10%', height:'50vh',padding:'15px',borderRadius:'10px'}}
          >
              <Heading textAlign={'center'}>Login</Heading>
              <Container>
                  <FormLabel>Email</FormLabel>
                  <Input 
                    onChange={handleChange}
                    name='email' 
                    value={user.email}></Input>
                  <FormLabel>Password</FormLabel>
                  <Input 
                    onChange={handleChange}
                    name='password' 
                    value={user.password}></Input>
                  <Button 
                    variant={'solid'}
                    colorScheme="red"
                    type="submit"
                    mt='4' 
                    w='100%'>Login</Button>
              </Container>
          </form>
          <ToastContainer/>
      </Center>
      {/* <form onSubmit={handleSubmit}>
             <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input name="email" value={user.email} onChange={handleChange} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input name="password" value={user.password} onChange={handleChange} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Button
              type="submit"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
        </form> */}
        </div>
    )
}
export default Login