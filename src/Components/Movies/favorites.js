import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import MovieCard from "../Cards";
import { Box, VStack, SimpleGrid, StackDivider, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites, favoritesList } from '../../app/features/movies/favoritesSlice';
import Title from "../Titles";

const Favorites = () => {

    const dispatch = useDispatch();
    const favorites = useSelector(favoritesList);
    const token = sessionStorage.getItem('session_id');

    useEffect(() => {
        if (token) {
            dispatch(getFavorites());
        }
    }, [dispatch]);

    return (
        <VStack
            divider={<StackDivider borderColor='red.600' />}
            justifyContent='center'
            p={[2, 4, 6, 8]}
        >
            {!token && <Navigate replace to='/auth/login' />}
            <Box>
                <Title text='Tus películas favoritas'>
                    Estas son todas las películas favoritas asociadas a tu cuenta
                </Title>
            </Box>
            <SimpleGrid mt='4' columns={{ base: 1, sm: 2, md: 3, lg: 5, xl: 6 }} spacing={2}>
                {favorites.length > 0 ?
                    favorites.map((items, index) => (
                        <MovieCard key={index} movie={items} />
                    ))
                    : <Text>No tienes peliculas favoritas</Text>}
            </SimpleGrid>
        </VStack>
    )
}
export default Favorites;