import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { getMoviesPage } from '../../api/axios';
import CircularStatic from "../progress";

function SliderIntervals() {

    const [movieseSlide, setMovieseSlide] = useState([]);

    useEffect(() => {
        let isMoviesPage = true;
        getMoviesPage().then((data) => {
            if (isMoviesPage) {
                setMovieseSlide(data.results);
                return;
            }
        });
        return () => {
            isMoviesPage = false;
        }
    }, []);

    return (
        <section className='d-flex row w-100 mx-0'>
            <div className='my-0'
                style={{ backgroundColor: "rgb(1, 180, 228)" }}
            >
                <h2 className='text-secondary my-2'>Trending</h2>
            </div>
            {movieseSlide === null ?
                <CircularStatic />
                :
                (<Carousel className='w-100 px-0'>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src={`https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/3n2TjKw3HrwDqgVgcynvantOfS3.jpg`}
                            alt="First slide"
                            style={{ width: "100%", height: "50vh", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                            <h3>"The Super Mario Bros. Movie"</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src="https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/jWYzdSv85nncRxfDwYSQKKlnuhG.jpg"
                            alt="Second slide"
                            style={{ width: "100%", height: "50vh", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                            <h3>"Avatar: The Way of Water"</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src="https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/xkiv3e1daoqil5MRJitCJcwUgk2.jpg"
                            alt="Third slide"
                            style={{ width: "100%", height: "50vh", objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                            <h3>"Momias"</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                )
            }
        </section >
    );
}

export default SliderIntervals;

// src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}