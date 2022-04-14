import { Flex, Box, Link, Button, Text, Image, HStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { getAccountInfo, accountData } from '../../app/features/account/accountSlice';
import { useDispatch, useSelector } from "react-redux";
const NavBar = () => {

    const dispatch = useDispatch();
    const accountInfo = useSelector(accountData);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAccountInfo());
    }, []);

    return (
        <Flex borderBottom='2px' borderColor='red.500' justifyContent='space-between' alignItems='center' bg='black' color='white' padding='4'>
            <Box>MAUFLIX</Box>
            <Box marginLeft='6'>
                <Link _hover={{ textDecoration: 'none', color: 'red.500' }} margin='4' fontSize='sm' to='/' as={RouterLink}>Peliculas</Link>
                <Link _hover={{ textDecoration: 'none', color: 'red.500' }} margin='4' fontSize='sm' to='/series' as={RouterLink}>Series</Link>
                {sessionStorage.getItem('session_id') && <Link _hover={{ textDecoration: 'none', color: 'red.500' }} margin='4' fontSize='sm' to='/favorites' as={RouterLink}>Mis favoritas</Link>}
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