import { Flex, Box, Link, Button, FormControl, Input } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Flex borderBottom='2px' borderColor='red.500' alignItems='center' bg='black' color='white' padding='4'>
            <Box>PELIFLIX</Box>
            <Box marginLeft='8'>
                <Link _hover={{ textDecoration: 'none', color: 'red.500' }} margin='6' fontSize='sm' to='/' as={RouterLink}>Peliculas</Link>
                <Link _hover={{ textDecoration: 'none', color: 'red.500' }} margin='6' fontSize='sm' to='/estrenos' as={RouterLink}>Estrenos</Link>
                <Link _hover={{ textDecoration: 'none', color: 'red.500' }} margin='6' fontSize='sm' to='/tendencias' as={RouterLink}>Tendencias</Link>
            </Box>
            <Box width='100%'>
                <FormControl maxW='300px' float='right'>
                    <Flex>
                        <Input color='black' name='search' type='search' bg='white' placeholder='Busca una pelicula' />
                        <Button
                            bg='red.600'
                            _hover={{bg: 'red.700'}}
                            left='2'
                        >
                            Buscar
                        </Button>
                    </Flex>
                </FormControl>
            </Box>
        </Flex>
    )
}
export default NavBar;