import React, {
    useState,
    Fragment,
    useContext,
    useEffect
} from 'react';
import { ContentData } from "../data/content-data";
import CircularStatic from "../progress";

const HomeRandom = () => {
    const { dataDefaultMovies } = useContext(ContentData);

    const endUrlMovies = dataDefaultMovies.map((item) => {
        return (item.backdrop_path);
    })
    const [showImageMovies, setShowImageMovies] = useState(endUrlMovies[0]);
    let randomImageMovies;
    randomImageMovies = endUrlMovies[Math.floor(Math.random() * endUrlMovies.length)];
    useEffect(() => {
        setShowImageMovies(randomImageMovies)
    }, [randomImageMovies]);
    return (
        <Fragment>
            <div className='d-flex w-100 justify-content-center'>
                {showImageMovies ?
                    <div className='w-100 d-flex position-revative'>
                        <img src={`https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)${showImageMovies}`}
                            style={{
                                width: "100%",
                                height: "50vh",
                                objectFit: "cover",
                            }}
                            alt="Random images" />
                        <div className='text-white position-absolute mt-5 ms-5'>
                            <h2 className='fs-1 fw-bold'>Welcome.</h2>
                            <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                        </div>
                    </div>
                    :
                    <CircularStatic />
                }
            </div>
        </Fragment>
    );
}

export { HomeRandom };