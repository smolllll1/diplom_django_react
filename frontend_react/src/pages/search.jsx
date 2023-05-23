import React, { useContext } from 'react';
import { motion as m } from 'framer-motion';
import SearchNav from '../components/search-nav';
import { SearchList } from '../components/search-list';
import { SearchData } from "../components/data/search-data";

const Search = () => {

    const { formikSearch } = useContext(SearchData);

    return (
        <m.div className="w-100 d-flex row m-0 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SearchNav formikSearch={formikSearch} />
            <SearchList />
        </m.div>
    );
}

export { Search };