import React from 'react';
import { motion as m } from 'framer-motion';
import PopularPeople from '../components/popular-people';
import PaginationPeople from '../components/pagination-people';

const PeoplePages = () => {

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="d-flex flex-column"
            style={{ backgroundColor: 'rgb(1, 180, 228)' }}
        >
            <PopularPeople />
            <PaginationPeople />
        </m.div>
    )
}

export { PeoplePages };