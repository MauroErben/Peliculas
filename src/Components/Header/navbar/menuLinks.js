import { Box, Button, Image, Stack, Text } from '@chakra-ui/react';
import { MenuItems } from './menuItems';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountInfo, accountData } from '../../../app/features/account/accountSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const MenuLinks = ({ isOpen }) => {

    const dispatch = useDispatch();
    const account = useSelector(accountData);
    const token = sessionStorage.getItem('session_id');
    const navigate = useNavigate();

    useEffect(() => {
        token && dispatch(getAccountInfo());
    }, [dispatch]);

    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={8}
                align='center'
                justify={["center", 'space-between', "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <MenuItems to="/"><Text>Inicio</Text></MenuItems>
                <MenuItems to="/series"><Text>Series</Text></MenuItems>
                {token ?
                    <>
                        <MenuItems to="/favorites"><Text>Favoritas</Text></MenuItems>
                        <Image borderRadius='full' src={`https://image.tmdb.org/t/p/original${account?.avatar_path}`} boxSize='32px' />
                    </>
                    : <Button onClick={() => navigate('/auth/login')} size='sm' bg='red.600' _hover={{ bg: 'red.700' }}>Iniciar sesión</Button>}
            </Stack>
        </Box>
    )
}