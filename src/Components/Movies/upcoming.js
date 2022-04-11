import { useState, useEffect } from "react";
import { getUpcomingMovies } from "../Services/movies";
import { SimpleGrid } from "@chakra-ui/react";
import MovieCard from "../Cards";

const UpcomingMovies = ({ handleDetails }) => {

    const [upcomingMovies, setUpcomingMovies] = useState([]);

    const getUpcoming = async () => {
        try {
            const { results } = await getUpcomingMovies();
            setUpcomingMovies(results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUpcoming();
    }, []);

    return (
        <SimpleGrid justifyItems='center' mt='6' columns={{ base: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
            {upcomingMovies.map((items, index) => (
                <MovieCard
                    key={index}
                    imagen={`https://image.tmdb.org/t/p/original${items.backdrop_path}`}
                    titulo={items.original_title}
                    descripcion={items.overview.slice(0, 100)}
                    handleClick={() => handleDetails(items)}
                />
            ))}
        </SimpleGrid>
    )
}
export default UpcomingMovies;