import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import MovieCard from "../Cards";
import { Box, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites, favoritesList } from '../../app/features/movies/favoritesSlice';

const Favorites = () => {

    const dispatch = useDispatch();
    const favorites = useSelector(favoritesList);
    const token = sessionStorage.getItem('session_id');

    useEffect(() => {
        if(token){
            dispatch(getFavorites());
        }
    }, []);

    return (
        <Box p='4'>
            {!token && <Navigate replace to='/auth/login' />}
            <Heading mb='2' textAlign='center' fontSize='2xl' color='red.600'>Tus peliculas favoritas</Heading>
            <Text fontSize='sm' textAlign='center'>Aqui tienes un listado de todas tus peliculas favoritas.</Text>
            <HStack
                justifyContent='center'
                spacing={4}
            >
                <SimpleGrid mt='4' columns={{base: 1, md: 2, lg: 3, xl: 4}} spacing={4}>
                    {favorites.length > 0 ?
                        favorites.map((fav) => (
                            <MovieCard key={fav.id} imagen={`https://image.tmdb.org/t/p/original${fav.backdrop_path}`} titulo={fav.title} detailsButton={false} />
                        ))
                        : <Text>No tienes peliculas favoritas</Text>}
                </SimpleGrid>
            </HStack>
        </Box>
    )
}
export default Favorites;