import { Flex, Box, Link, Button, HStack, Text, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAccountInfo, accountData } from '../../app/features/account/accountSlice';
const NavBar = () => {

    const dispatch = useDispatch();
    const account = useSelector(accountData);
    const navigate = useNavigate();

    const isAuth = () => sessionStorage.getItem('session_id');

    useEffect(() => {
        if (isAuth()) {
            dispatch(getAccountInfo());
        }
    }, []);

    return (
        <Flex borderBottom='2px' borderColor='red.500' justifyContent='space-between' alignItems='center' bg='black' color='white' padding='4'>
            <Box>MAUFLIX</Box>
            <Box marginLeft='6'>
                <Link _hover={{ textDecoration: 'none', color: 'red.500' }} margin='4' fontSize='sm' to='/' as={RouterLink}>Peliculas</Link>
                <Link _hover={{ textDecoration: 'none', color: 'red.500' }} margin='4' fontSize='sm' to='/series' as={RouterLink}>Series</Link>
                {isAuth() && <Link _hover={{ textDecoration: 'none', color: 'red.500' }} margin='4' fontSize='sm' to='/favorites' as={RouterLink}>Mis favoritas</Link>}
            </Box>
            {isAuth() ?
                <HStack
                    spacing={2}
                >
                    <Text>{account?.username}</Text>
                    <Image borderRadius='full' boxSize='32px' src={`https://image.tmdb.org/t/p/original${account?.avatar?.tmdb?.avatar_path}`} />
                </HStack>
                : <Button
                    bg='red.600'
                    _hover={{bg: 'red.700'}}
                    size='sm'
                    onClick={() => navigate('/auth/login')}
                >
                    Iniciar sesión
                </Button>}
        </Flex>
    )
}
export default NavBar;