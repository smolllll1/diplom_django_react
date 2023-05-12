import React from "react";
import Button from '@mui/material/Button';

import './search-nav.css'

const SearchNav = ({ formikSearch }) => {

    return (
        <form className="d-flex w-100"
            onSubmit={formikSearch.handleSubmit}
        >
            <label className="search-form w-100" htmlFor="name">
                <input className="w-100"
                    type="text"
                    name="searchValue"
                    value={formikSearch.values.searchValue}
                    onChange={formikSearch.handleChange}
                    onBlur={formikSearch.handleBlur}
                    placeholder="Search"
                />
            </label>
            <Button
                type="submit"
            >
                Search
            </Button>
        </form>
    )
}

export default SearchNav;