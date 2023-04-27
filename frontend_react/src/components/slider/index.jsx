import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { GetRequest } from '../../api/get-request';
import CircularStatic from "../progress";

import './slider.css'

function SliderIntervals() {

    const [movieseSlide, setMovieseSlide] = useState(null);

    useEffect(() => {

        new GetRequest().getDataMoviesPopular()
            .then((data) => {
                setMovieseSlide(data.results);
            })

    }, []);

    return (
        <div className='slider-wrapper'>
            {movieseSlide === null ?
                <CircularStatic />
                :
                (<Carousel>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src={`https://image.tmdb.org/t/p/original/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg`}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>"The Super Mario Bros. Movie"</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src="https://image.tmdb.org/t/p/original/ovM06PdF3M8wvKb06i4sjW3xoww.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>"Avatar: The Way of Water"</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src="https://image.tmdb.org/t/p/original/c3hl9E8E7b9opXDFVF5tSyk0ykr.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>"Momias"</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                )
            }
        </div>
    );
}

export default SliderIntervals;

// src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}