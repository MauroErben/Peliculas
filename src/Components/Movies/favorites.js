import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../Cards";
import { Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites, favoritesList } from '../../app/features/movies/favoritesSlice';

const Favorites = () => {

    const dispatch = useDispatch();
    const favorites = useSelector(favoritesList);
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = sessionStorage.getItem('session_id')
        if (!isAuthenticated) {
            navigate('/');
        } else {
            dispatch(getFavorites());
        }
    }, []);

    return (
        <>
            <Heading mb='2' textAlign='center' fontSize='2xl' color='red.600'>Tus peliculas favoritas</Heading>
            <HStack
                justifyContent='center'
                spacing={4}
            >
                <SimpleGrid columns={{base: 1, md: 2, lg: 3, xl: 4}} spacing={4}>
                    {favorites.length > 0 ?
                        favorites.map((fav) => (
                            <MovieCard key={fav.id} imagen={`https://image.tmdb.org/t/p/original${fav.backdrop_path}`} titulo={fav.title} />
                        ))
                        : <Text>No tienes peliculas favoritas</Text>}
                </SimpleGrid>
            </HStack>
        </>
    )
}
export default Favorites;