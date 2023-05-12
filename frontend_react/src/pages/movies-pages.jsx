import React from 'react';
import { motion as m } from 'framer-motion';
import PopularMovies from '../components/popular-movies';
import PaginationMovies from '../components/pagination-movies';

const MoviesPages = () => {

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="d-flex flex-column"
        >
            <PopularMovies />
            <PaginationMovies />
        </m.div>
    )
}

export { MoviesPages };