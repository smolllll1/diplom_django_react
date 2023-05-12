import React, { Fragment, useContext } from 'react';
import SearchNav from '../components/search-nav';
import SearchList from '../components/search-list';
import { SearchValue } from "../components/data/search-value";

const Search = () => {

    const { formikSearch } = useContext(SearchValue);

    return (
        <Fragment>
            <div className="w-100 vh-100 d-flex row m-0">
                <SearchNav
                    formikSearch={formikSearch}
                />
                <SearchList />
            </div>
        </Fragment>
    );
}

export default Search;