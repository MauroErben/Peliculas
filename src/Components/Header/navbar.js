import { Flex, Box, Link, Button, Text, Image, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { getAccountDetails } from "../Services/auth";

const NavBar = () => {

    const navigate = useNavigate();

    const [accountInfo, setAccountInfo] = useState({});

    const getAccountData = async () => {
        try {
            const sessionId = sessionStorage.getItem('session_id');
            if (sessionId) {
                const response = await getAccountDetails(sessionId);
                setAccountInfo(response);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAccountData();
    }, []);

    return (
        <Flex borderBottom='2px' borderColor='red.500' justifyContent='space-between' alignItems='center' bg='black' color='white' padding='4'>
            <Box>PELIFLIX</Box>
            <Box marginLeft='6'>
                <Link _hover={{ textDecoration: 'none', color: 'red.500' }} margin='4' fontSize='sm' to='/' as={RouterLink}>Peliculas</Link>
                <Link _hover={{ textDecoration: 'none', color: 'red.500' }} margin='4' fontSize='sm' to='/series' as={RouterLink}>Series</Link>
            </Box>
            {!sessionStorage.getItem('session_id') ?
                <Button
                    bg='red.600'
                    _hover={{ bg: 'red.700' }}
                    color='white'
                    size='sm'
                    onClick={() => navigate('/auth/login')}
                >
                    Iniciar sesión
                </Button>
                :
                <HStack
                    spacing={2}
                >
                    <Text>{accountInfo?.username}</Text>
                    <Image borderRadius='full' boxSize='32px' src={`https://image.tmdb.org/t/p/original${accountInfo?.avatar?.tmdb?.avatar_path}`} />
                </HStack>
            }
        </Flex>
    )
}
export default NavBar;