import { Link, Box, Image, Stack, Text, VStack } from "@chakra-ui/react";
import Tmdb from './logo.svg';
const Footer = () => {
    return (
        <Stack
            bg='black'
            justifyContent='space-around'
            align='center'
            direction={['column', 'row', 'row', 'row']}
            color='white'
            p='8'
            borderTop='2px'
            borderColor='red.600'
        >
            <Box textAlign='center'>
                <Text fontWeight='bold'>Información</Text>
                <Text fontSize='sm'>Desarrollado por Mauro Erben</Text>
                <VStack
                    mt='1'
                    spacing={1}
                >
                    <Link href="https://www.themoviedb.org/" target='_blank' color='blue.300' fontSize='sm'>Acerca de TMDB</Link>
                    <Link href="https://developers.themoviedb.org/3/getting-started/introduction" target='_blank' color='blue.300' fontSize='sm'>Sobre la API</Link>
                </VStack>
            </Box>
            <Box>
                <Image src={Tmdb} boxSize='120px' />
            </Box>
            <Box textAlign='center'>
                <Text fontWeight='bold'>Contacto</Text>
                <Text fontSize='sm'>mauroerben100@hotmail.com</Text>
                <VStack
                    mt='1'
                    spacing={1}
                >
                    <Link href="https://www.linkedin.com/in/mauro-erben-247911178/" target='_blank' color='blue.300' fontSize='sm'>Linkedin</Link>
                    <Link href="https://www.instagram.com/mauro_erben/" target='_blank' color='blue.300' fontSize='sm'>Instagram</Link>
                </VStack>
            </Box>
        </Stack>
    )
}
export default Footer;