import { useEffect } from "react";
import { SimpleGrid, VStack, Text, StackDivider, Box } from "@chakra-ui/react";
import MovieCard from "../Cards";
import { getUpcoming, upcomingList } from '../../app/features/movies/upcomingSlice';
import { useDispatch, useSelector } from 'react-redux';
import Title from "../Titles";

const UpcomingMovies = () => {

    const dispatch = useDispatch();
    const upcomingMovies = useSelector(upcomingList);

    useEffect(() => {
        dispatch(getUpcoming());
    }, [dispatch]);

    return (
        <VStack
            divider={<StackDivider borderColor='red.600' />}
            spacing={4}
            p={[2, 4, 6, 8]}
        >
            <Box>
                <Title text='Proximos estrenos'>
                    <Text>Mira una lista de todos los próximos estrenos</Text>
                </Title>
            </Box>
            <SimpleGrid justifyItems='center' columns={{ base: 1, sm: 2, md: 3, lg: 5, xl: 6 }} spacing={2}>
                {upcomingMovies.map((items) => (
                    <MovieCard
                        key={items.id}
                        movie={items}
                    />
                ))}
            </SimpleGrid>
        </VStack>
    )
}
export default UpcomingMovies;