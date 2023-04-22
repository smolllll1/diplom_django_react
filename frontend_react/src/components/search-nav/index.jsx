import React from "react";
import Button from '@mui/material/Button';

import './search-nav.css'

const SearchNav = () => {
    return (
        <form className="d-flex">
            <input className="form-control me-sm-2" type="search" placeholder="Search" />
            <Button type="submit">Search</Button>
        </form>
    )
}

export default SearchNav;