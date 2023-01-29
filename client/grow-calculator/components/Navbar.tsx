import { Button, Flex, ListItem, UnorderedList } from "@chakra-ui/react"
import Link from "next/link"


function Navbar () {

    
    return (
   
            <Flex justifyContent={'space-between'} alignItems={'center'}  padding={'10px'} bgColor={'blue.200'} position={'fixed'} width={'100%'}>
                    <UnorderedList textStyle={'none'} listStyleType={'none'}>
                         <Flex justifyContent={'space-around'} gap={'50px'}>
                            <ListItem fontSize={'2xl'} fontWeight={'600'} color={'green'}>
                                <Link href={'/profile'}>Profile</Link>    
                            </ListItem>    
                            <ListItem fontSize={'2xl'} fontWeight={'bold'} fontWeight={'600'} color={'yellow'}>
                                <Link href={'/calculate'}>Calculate</Link>
                            </ListItem>    
                        </Flex>   
                    </UnorderedList>
                <Flex justifyContent={'space-around'} gap={'20px'} padding={'10px'}>
                    <Link href='/signup'>
                        <Button variant={'solid'} colorScheme={'red'}>Signup</Button>
                    </Link>  
                    <Link href={'/login'}>  
                        <Button variant='outline' colorScheme={'red'}>Login</Button>  
                    </Link>  
                </Flex> 
            </Flex>    
      
    )
}
export default Navbar