import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import store from "../../redux/store";
import { ContentData } from '../data/content-data';

export const PersonAccountCards = () => {

    // object store data movies 
    const storeDataMovies = store.getState();
    console.log(storeDataMovies.movie)
    const { onHandlerCardsInfoMovies } = useContext(ContentData);

    const onHandlerDeleteMovie = (value) => {
        storeDataMovies.movie.splice(value, 1)
    };

    return (
        <Fragment>
            {storeDataMovies.movie.map((item, index) => {
                return <Card key={item.id * index + "b"}
                    style={{ backgroundColor: "rgba(13, 37, 63, .9)" }}
                    className='d-flex flex-row w-100 p-0 mb-2 border'>
                    <div className='d-flex'>
                        <Link to={`/pop_movies/${item.id}`}
                            onClick={() => { onHandlerCardsInfoMovies(item.id) }}>
                            <Card.Img src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2${item.backdrop_path}`}
                                style={{ width: "3rem", objectFit: "cover" }}
                                alt="Card image" />
                        </Link>
                    </div>
                    <Card.Body className='d-flex row p-1 m-0'>
                        <Card.Title className='m-0 fs-6 fw-bold text-white'>
                            {item.title}
                            <span className='fw-light ps-2 text-white'>
                                {item.release_date}
                            </span>
                        </Card.Title>
                        <Card.Text className='fs-7'>
                            <Link className='text-decoration-none text-danger'
                                onClick={() => { onHandlerDeleteMovie(index) }}>
                                Delete
                            </Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            })
            }
        </Fragment>
    )
}
