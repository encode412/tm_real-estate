import { Flex, Box, Text} from '@chakra-ui/react';
import { GiLoveHowl } from 'react-icons/gi'

const Footer = () => {
  return (
    <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
        <Flex justifyContent='center' gap='.5rem'>            
        Built with <span><GiLoveHowl size={30} color='red'/></span> by <Text fontWeight='900'>!Tims</Text>                
        </Flex>
        <Box>
        2022 Realtor, Inc.
        </Box>
    </Box>
  )
}

export default Footer;