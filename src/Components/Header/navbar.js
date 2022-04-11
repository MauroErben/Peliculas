import { Flex, Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Flex borderBottom='2px' borderColor='red.500' alignItems='center' bg='black' color='white' padding='4'>
            <Box>PELIFLIX</Box>
            <Box marginLeft='6'>
                <Link _hover={{ textDecoration: 'none', color: 'red.500' }} margin='4' fontSize='sm' to='/' as={RouterLink}>Peliculas</Link>
                <Link _hover={{ textDecoration: 'none', color: 'red.500' }} margin='4' fontSize='sm' to='/series' as={RouterLink}>Series</Link>
            </Box>
        </Flex>
    )
}
export default NavBar;