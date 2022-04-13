import { Box, Flex, Heading, HStack, Image, Tag, TagLeftIcon, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AiFillLike } from 'react-icons/ai';
import YoutubeEmbed from "../../Youtube/YoutubeEmbed";
import { useDispatch, useSelector } from 'react-redux';
import { getDetails, detailsList } from '../../../app/features/movies/details/detailsSlice';
import { getTrailer, trailerList } from '../../../app/features/movies/details/trailerSlice';

const Details = () => {

    const dispatch = useDispatch();
    const movieDetails = useSelector(detailsList);
    const movieTrailer = useSelector(trailerList);
    const location = useLocation();

    useEffect(() => {
        dispatch(getDetails(location.state.id));
        dispatch(getTrailer(location.state.id));
    }, []);

    return (
        <>
            <Flex flexDirection={{base: 'column', lg: 'row'}}>
                <Box flex='1' bg='gray.800' p='12'>
                    <Image src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`} />
                </Box>
                <Box
                    flex='1'
                    bg='gray.700'
                    p='4'
                    color='white'
                >
                    <Heading textAlign={{base: 'center', lg: 'start'}}>
                        {movieDetails.original_title}
                    </Heading>

                    <HStack
                        justifyContent='center'
                        spacing={4}
                        mt='6'
                    >
                        <Tag colorScheme='green'>{movieDetails.adult ? '+18' : '+16'}</Tag>
                        <Tag colorScheme='green'>{Math.round(movieDetails.vote_average)}%</Tag>
                        <Tag colorScheme='green'>
                            <TagLeftIcon boxSize='12px' as={AiFillLike} />
                            {Math.round(movieDetails.vote_count)}
                        </Tag>
                    </HStack>

                    <Box
                        mt='6'
                    >
                        <Heading fontSize='20px'>Descripcion</Heading>
                        <Text mt='4' fontSize='sm'>{movieDetails.overview}</Text>
                    </Box>

                    <HStack
                        mt='6'
                        spacing={3}
                    >
                        <Text fontSize='xs'>Generos</Text>
                        {movieDetails?.genres?.map((gen) => (
                            <Tag colorScheme='green' key={gen.id}>{gen.name}</Tag>
                        ))}
                    </HStack>

                    <HStack
                        mt='6'
                        spacing={3}
                    >
                        <Text fontSize='xs'>Idiomas</Text>
                        <Tag colorScheme='green'>{movieDetails.original_language}</Tag>
                    </HStack>

                    <HStack
                        mt='6'
                        spacing={3}
                    >
                        <Text fontSize='xs'>Lanzamiento</Text>
                        <Tag colorScheme='green'>{movieDetails.release_date}</Tag>
                    </HStack>
                    <HStack
                        mt='6'
                        spacing={3}
                    >
                        <Text fontSize='xs'>Status</Text>
                        <Tag colorScheme='green'>{movieDetails.status}</Tag>
                    </HStack>

                    <Box
                        mt='6'
                    >
                        <Heading fontSize='20px'>Trailer</Heading>
                        {movieTrailer.length > 0 ? <YoutubeEmbed embedId={movieTrailer[0].key} />
                        : <Text fontSize='sm'>Esta pelicula no contiene trailer por ahora.</Text>}
                    </Box>
                </Box>
            </Flex>
        </>
    )
}
export default Details;
