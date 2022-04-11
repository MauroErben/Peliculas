import { Box, Heading, SimpleGrid, StackDivider, VStack } from '@chakra-ui/react';
import MovieCard from '../Cards';
import AppCarousel from '../Carousel';
import { useState, useEffect } from 'react';
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../Services/movies';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [uncoming, setUncoming] = useState([]);
    const navigate = useNavigate();

    const getData = async () => {
        try {
            const { results } = await getPopularMovies();
            setPopularMovies(results);
        } catch (error) {
            console.log(error);
        }
    }

    const getTopRated = async () => {
        try {
            const { results } = await getTopRatedMovies();
            setTopRated(results);
        } catch (error) {
            console.log(error);
        }
    }

    const getUpcoming = async () => {
        try {
            const { results } = await getUpcomingMovies();
            setUncoming(results);
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }

    const showDetails = ( item ) => {
        navigate(`/details/${item.id}`, {state: item})
    }

    const handleDragStart = (e) => e.preventDefault();

    const getCardImages = () => {
        const images = [];
        topRated.map((items) => {
            images.push(
                <MovieCard
                    imagen={`https://image.tmdb.org/t/p/original${items.backdrop_path}`}
                    titulo={items.original_title}
                    handleDrag={handleDragStart}
                    handleClick={() => showDetails(items)}
                />
            )
        });
        return images;
    }

    useEffect(() => {
        getData();
        getTopRated();
        getUpcoming();
    }, [])

    return (
        <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing='4'
            align='stretch'
        >
            <Box>
                <AppCarousel data={popularMovies} />
            </Box>

            <Box p='6'>
                <Heading mb='2' textAlign='center' fontSize='2xl' color='red.600'>Mas valoradas</Heading>
                <AliceCarousel
                    autoWidth
                    disableButtonsControls
                    mouseTracking
                    items={getCardImages()}
                />
            </Box>

            <Box p='6'>
                <Heading mb='2' textAlign='center' fontSize='2xl' color='red.600'>Proximos estrenos</Heading>
                <SimpleGrid justifyItems='center' mt='6' columns={{base: 1, md: 2, lg: 3, xl: 5}} spacing={10}>
                    {uncoming.map((items, index) => (
                        <MovieCard
                            key={index}
                            imagen={`https://image.tmdb.org/t/p/original${items.backdrop_path}`}
                            titulo={items.original_title}
                            descripcion={items.overview.slice(0, 100)}
                            handleClick={() => showDetails(items)}
                        />
                    ))}
                </SimpleGrid>
            </Box>
        </VStack>
    )
}
export default Home;