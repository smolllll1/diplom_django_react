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
            style={{ backgroundColor: "#8F3ABB" }}
            className="w-100 px-5">
            <h6 className='text-dark fw-light mt-3'>
                <b>{searchMoviesResults?.data?.count}</b> movies were found for the search query "<b>{isSearchValue}</b>"
            </h6>
            {searchMoviesResults?.data?.results.map((item) => {
                return <Card key={item.id} style={{ backgroundColor: "rgba(13, 37, 63, .9)" }}
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
                        <Card.Title className='fs-6 fw-bold text-white'>
                            {item.title}
                        </Card.Title>
                        <Card.Text className='fs-6 text-white'>
                            {item.release_date}
                        </Card.Text>
                    </Card.Body>
                </Card>
            })
            }
        </m.div>
    )
}
