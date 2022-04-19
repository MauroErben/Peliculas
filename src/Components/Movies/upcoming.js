import { useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import MovieCard from "../Cards";
import { getUpcoming, upcomingList } from '../../app/features/movies/upcomingSlice';
import { useDispatch, useSelector } from 'react-redux';

const UpcomingMovies = ({ handleDetails }) => {
    
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(upcomingList);

    useEffect(() => {
        dispatch(getUpcoming());
    }, [dispatch]);

    return (
        <SimpleGrid justifyItems='center' mt='6' columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
            {upcomingMovies.map((items, index) => (
                <MovieCard
                    key={index}
                    imagen={`https://image.tmdb.org/t/p/original${items.backdrop_path}`}
                    titulo={items.original_title}
                    descripcion={items.overview}
                    handleClick={() => handleDetails(items)}
                />
            ))}
        </SimpleGrid>
    )
}
export default UpcomingMovies;