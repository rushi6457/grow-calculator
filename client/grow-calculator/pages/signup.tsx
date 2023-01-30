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
import { useState } from 'react';
import {useSelector,useDispatch} from "react-redux"
import { signup } from "@/redux/auth/actions";
import { useRouter } from "next/router";
function Signup( ){
    const [showPassword, setShowPassword] = useState(false);
    const [user,setUser] = useState({
      name:'',
      email:'',
      password:''
    })
    const auth:any = useSelector<any>(store=>store.auth.isRegistered)

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
        router.push("/login")
    }


    
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
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
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
              <Input name='name' value={user.name} onChange={handleChange} type="text" />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input name='email' value={user.email} onChange={handleChange} type="email" />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input name='password' value={user.password} onChange={handleChange} type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
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
        </>
    )
}
export default Signup