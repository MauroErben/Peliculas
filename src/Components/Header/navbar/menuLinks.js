import { Box, Button, Stack, Text } from '@chakra-ui/react';
import { MenuItems } from './menuItems';

export const MenuLinks = ({ isOpen }) => {

   const token = sessionStorage.getItem('session_id');

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
                <MenuItems to="/"><Text>Peliculas</Text></MenuItems>
                <MenuItems to="/series"><Text>Series</Text></MenuItems>
                {!token && <MenuItems to='/auth/login'><Button size='sm' bg='red.600' _hover={{bg: 'red.700'}}>Iniciar sesión</Button></MenuItems>}
                {token && <MenuItems to="/favorites"><Text>Mis favoritas</Text></MenuItems>}
            </Stack>
        </Box>
    )
}