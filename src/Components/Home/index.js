import { Box, Heading, StackDivider, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import PopularMovies from '../Movies/popular';
import TopRatedMovies from '../Movies/top';
import UpcomingMovies from '../Movies/upcoming';

const Home = () => {

    const navigate = useNavigate();

    const showDetails = (item) => {
        navigate(`/details/${item.id}`, { state: item })
    }

    return (
        <>
            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing='4'
                align='stretch'
            >
                <Box>
                    <PopularMovies />
                </Box>

                <Box p='6'>
                    <Heading mb='2' textAlign='center' fontSize='2xl' color='red.600'>Más valoradas</Heading>
                    <TopRatedMovies handleDetails={showDetails} />
                </Box>

                <Box p='6'>
                    <Heading mb='2' textAlign='center' fontSize='2xl' color='red.600'>Próximos estrenos</Heading>
                    <UpcomingMovies handleDetails={showDetails} />
                </Box>
            </VStack>
        </>
    )
}
export default Home;