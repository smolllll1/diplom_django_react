import React, { useContext } from 'react';
import { motion as m } from "framer-motion";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { ContentData } from '../data/content-data';
import { SearchData } from '../data/search-data';

export const SearchMoviesList = () => {

    const { onHandlerCardsInfoMovies } = useContext(ContentData);
    const { searchMoviesResults, isSearchValue } = useContext(SearchData);

    return (
        <m.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-100 bg-white px-5">
            <h6 className='text-secondary fw-light mt-3'>
                {searchMoviesResults?.data?.count} movies were found for the search query "{isSearchValue}"
            </h6>
            {searchMoviesResults?.data?.results.map((item) => {
                return <Card key={item.id}
                    className='d-flex flex-row w-100 mt-3 mb-3'>
                    <div className='d-flex'>
                        <Link to={`/pop_movies/${item.id}`}
                            onClick={() => { onHandlerCardsInfoMovies(item.id) }}>
                            <Card.Img src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2${item.backdrop_path}`}
                                style={{ width: "6rem", objectFit: "cover" }}
                                alt="Card image" />
                        </Link>
                    </div>
                    <Card.Body className='d-flex row p-1 m-0'>
                        <Card.Title className='fs-6 fw-bold'>
                            {item.title}
                        </Card.Title>
                        <Card.Text className='fs-6'>
                            {item.release_date}
                        </Card.Text>
                    </Card.Body>
                </Card>
            })
            }
        </m.div>
    )
}
