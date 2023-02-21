import Navbar from "@/components/Navbar"
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useSafeLayoutEffect,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import {useSelector,useDispatch} from "react-redux"
import { signup } from "@/redux/auth/actions";
import { useRouter } from "next/router";
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const  Signup = ( ):JSX.Element =>{
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [user,setUser] = useState<any>({
      name:'',
      email:'',
      password:''
    })
    const auth:any = useSelector<any>(store=>store.signupAuth)
    console.log(auth);
    
    <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />

    const dispatch = useDispatch()
    const router = useRouter()
    const handleChange = (e:any) =>{
        const {name,value} = e.target;
        setUser({
          ...user,
          [name]:value
        })
    }
    const handleSubmit = (e:any) =>{
      e.preventDefault();
        dispatch(signup(user))
      
    }
    useEffect(()=>{
      if(auth.isRegistered.status === true){
        toast.success(auth.isRegistered.message)
          router.push("/login")
      }
      else{
         toast.error(auth.isRegistered.message)
      }
    },[auth.isRegistered.status])




    
    return (
      <>
      <Navbar/>
    <form onSubmit={handleSubmit}>
     <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack 
        spacing={8} 
        mx={'auto'} 
        maxW={'lg'} 
        py={12} 
        px={6}>

        <Stack 
            align={'center'}>
          <Heading 
            fontSize={'4xl'} 
            textAlign={'center'}>
            Sign up
          </Heading>
          <Text 
            fontSize={'lg'} 
            color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
          <Stack spacing={4}>

             <FormControl id="name" isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input 
                  name='name' 
                  value={user.name} 
                  onChange={handleChange} 
                  type="text" />
            </FormControl>

            <FormControl 
                id="email" 
                isRequired>
              <FormLabel>Email address</FormLabel>
              <Input 
                  name='email' 
                  value={user.email} 
                  onChange={handleChange} 
                  type="email" />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input 
                    name='password' 
                    value={user.password} 
                    onChange={handleChange} 
                    type={showPassword ? 'text' : 'password'} />
                <InputRightElement 
                    h={'full'}>
                  <Button
                  
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                type='submit'
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link href='/login' color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </form>
    <ToastContainer/>
        </>
    )
}
export default Signup