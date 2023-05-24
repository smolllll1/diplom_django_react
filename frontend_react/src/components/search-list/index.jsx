import React from 'react';
import { Link, Outlet } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import "./search-list.css";

const SearchList = () => {

    return (
        <section className='row g-0'
            style={{ backgroundColor: "#ffffff" }}>
            <Stack className='col-md-4' direction="row" spacing={2} sx={{ borderTop: '10px' }}>
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
                            <span className='count-span'>0</span>
                        </MenuItem>
                        <MenuItem className='search-item'>
                            <Link to={"people"}>People</Link>
                            <span className='count-span'>0</span>
                        </MenuItem>
                    </MenuList>
                </Paper>
            </Stack>
            <div className='col-md-8 d-flex mt-3 mb-3 px-5 justify-content-center'>
                <Outlet />
            </div>
        </section>
    );
}

export { SearchList };