import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { getTendencias } from "../../Services/tendencias";
import { Box } from "@chakra-ui/react";

const TendenciasCarousel = () => {

    const [tendencias, setTendencias] = useState([]);

    const getData = async () => {
        try {
            const { results } = await getTendencias();
            setTendencias(results);
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <Carousel
            showThumbs={false}
            showArrows
            autoPlay
        >
            {tendencias.map((items, index) => (
                <div key={index}>
                    <img src={`https://image.tmdb.org/t/p/original${items.backdrop_path}`} />
                    <Box
                        position='absolute'
                        top='0'
                        width='100%'
                        padding='2'
                        bg='blackAlpha.500'
                        color='white'
                        fontSize={{base: '10px', md: '20px', lg: '30px'}}
                    >
                        {items.original_title}
                    </Box>
                    <p className="legend">{items.overview}</p>
                </div>
            ))}
        </Carousel>
    )
}
export default TendenciasCarousel;