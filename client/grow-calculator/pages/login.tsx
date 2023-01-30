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
} from '@chakra-ui/react';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import cookie from "js-cookie" ;
function Login () {

  const auth:any = useSelector<any>(store=>store.auth.token)
 console.log(auth.data);
 
  const dispatch = useDispatch()
  const [user,setUser] = useState({
    email:"",
    password: ""
  })
  const router = useRouter()

  const handleChange = (e:any) =>{

      const {name,value} = e.target;
      setUser({
        ...user,
        [name]:value
      })
  }
  const handleSubmit = (e:any) =>{
    e.preventDefault()
    dispatch(login(user))
   
  }
  useEffect(()=>{
    if(auth.isAuth !== false ){
      //  router.push("/profile")
      cookie.set('user',auth.data.token,{expires:1})
    }
    else{
      router.push("/login")
    }
  },[auth])


    return (

      <>
      <Navbar/>
      <form onSubmit={handleSubmit}>
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
        </form>
        </>
    )
}
export default Login