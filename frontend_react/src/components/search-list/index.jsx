import React, { useContext } from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { SearchData } from '../data/search-data';
import { SearchCardsMovies } from '../search-cards-movies';
import { SearchCardsPeople } from '../search-cards-people';

import "./search-list.css";

const SearchList = () => {

    const location = useLocation();

    const { searchMoviesResults, searchPeopleResults } = useContext(SearchData);

    return (
        <section className='row g-0'
            style={{ backgroundColor: "#ffffff" }}>
            <div className='col-md-4'>
                <Stack direction="row" spacing={2} sx={{ borderTop: '10px' }}>
                    <Paper className='mt-3 mb-3 ms-5' style={{ width: "300px" }}>
                        <MenuList className='w-100 p-0'>
                            <li className='px-3 py-2 rounded-top'
                                style={{
                                    backgroundColor: '#01b4e4',
                                    color: 'white',
                                    lineHeight: "2.5",
                                    fontSize: '1.2rem',
                                    letterSpacing: '0.00938em',
                                }}>
                                Search Results
                            </li>
                            <MenuItem className='search-item'>
                                <Link to={"movies"}>Movies</Link>
                                <span className='count-span'>
                                    {searchMoviesResults?.data?.count}
                                </span>
                            </MenuItem>
                            <MenuItem className='search-item'>
                                <Link to={"people"}>People</Link>
                                <span className='count-span'>
                                    {searchPeopleResults?.data?.count}
                                </span>
                            </MenuItem>
                        </MenuList>
                    </Paper>
                </Stack>
            </div>
            {location?.search.split("=")[1] === ""
                ||
                (searchMoviesResults?.data?.count === 0 && searchPeopleResults?.data?.count === 0) ?
                <div className='col-md-8 d-flex row mt-3 mb-3 m-0 pe-5 justify-content-center'>
                    <h6 className='text-danger fw-light'>Enter the value in the search lield.</h6>
                </div>
                :
                <div className='col-md-8 d-flex row mt-3 mb-3 m-0 pe-5 justify-content-center'>
                    <SearchCardsMovies />
                    <SearchCardsPeople />
                    <Outlet />
                </div>
            }
        </section>
    );
}

export { SearchList };