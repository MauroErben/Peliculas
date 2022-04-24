import { Box, Heading, HStack, Image, Tag, Text, VStack, Button, Spinner } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import YoutubeEmbed from "../../Youtube/YoutubeEmbed";
import { useDispatch, useSelector } from 'react-redux';
import { getDetails, addToFavorites, detailsList } from '../../../app/features/movies/details/detailsSlice';
import { getTrailer, trailerList } from '../../../app/features/movies/details/trailerSlice';
import { AiOutlineHeart } from 'react-icons/ai';
import Title from "../../Titles";

const Details = () => {

    const dispatch = useDispatch();
    const movieDetails = useSelector(detailsList);
    const movieTrailer = useSelector(trailerList);
    const location = useLocation();
    const isAuth = sessionStorage.getItem('session_id');

    useEffect(() => {
        dispatch(getDetails(location.state.id));
        dispatch(getTrailer(location.state.id));
    }, [dispatch]);

    return (
        <>
            <Box>
                <Image src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`} />
            </Box>
            <VStack
                spacing={4}
                p={[2, 2, 4, 4]}
                fontSize={['sm', 'md', 'lg', 'xl']}
                textAlign='center'
            >
                <HStack>
                    {movieDetails?.genres?.map((gen, index) => (
                        <Tag key={index} colorScheme='blue'>{gen.name}</Tag>
                    ))}
                </HStack>

                <Box>
                    <Heading>{movieDetails.original_title}</Heading>
                    <Text>{movieDetails.overview}</Text>
                </Box>

                {isAuth &&
                    <Box>
                        <Button
                            leftIcon={<AiOutlineHeart />}
                            colorScheme='red'
                            onClick={() => dispatch(addToFavorites(location.state.id, true))}>
                            Favorita
                        </Button>
                    </Box>
                }

                <Box
                    width='full'
                >
                    <Title text='Trailer'></Title>
                    {movieTrailer.length > 0 ?
                        <YoutubeEmbed embedId={movieTrailer[0].key} />
                        : <Text>Esta pelicula no tiene trailer</Text>}
                </Box>

            </VStack>
        </>
    )
}
export default Details;