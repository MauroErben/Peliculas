import AppCarousel from "../Carousel";
import { useEffect, useState } from "react";
import { getSeriesPopular } from "../Services/series";

const Series = () => {

    const [seriesPopular, setSeriesPopular] = useState([]);

    const getData = async () => {
        try {
            const { results } = await getSeriesPopular();
            setSeriesPopular(results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);
    return (
        <AppCarousel data={seriesPopular} />
    )
}
export default Series;