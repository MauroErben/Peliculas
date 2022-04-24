import { Box, VStack, Text, StackDivider } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import PopularMovies from '../Movies/popular';
import TopRatedMovies from '../Movies/top';
import Title from '../Titles';

const Home = () => {

    const navigate = useNavigate();

    const showDetails = (item) => {
        navigate(`/details/${item.id}`, { state: item })
    }

    return (
        <>
            <Box>
                <PopularMovies />
            </Box>

            <VStack
                divider={<StackDivider borderColor='red.600' />}
                spacing={4}
                p={[2, 4, 6, 8]}
            >
                <Box>
                    <Title text='Películas más valoradas'>
                        <Text>Estas son las películas más valoradas hasta el momento</Text>
                    </Title>
                </Box>
                <Box>
                    <TopRatedMovies handleDetails={showDetails} />
                </Box>
            </VStack>
        </>
    )
}
export default Home;