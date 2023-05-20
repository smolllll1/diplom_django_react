import React from 'react';
import { Link } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import "./contacts.css"

const OurContacts = () => {

    return (
        <div className='w-100'
            style={{ backgroundColor: "#ffffff" }}>
            <Stack direction="row" spacing={2} sx={{ borderTop: '10px' }}>
                <Paper className='mt-3 mb-3 mx-5' style={{ width: "300px" }}>
                    <MenuList className='p-0'>
                        <li className='px-3 py-2 rounded-top'
                            style={{
                                backgroundColor: '#01b4e4',
                                color: 'white',
                                lineHeight: "2.5",
                                fontSize: '1.2rem',
                                letterSpacing: '0.00938em',
                            }}>
                            F.A.Q
                        </li>
                        <MenuItem className='contacts-link'>
                            <Link to={"/about"}>Our History</Link>
                        </MenuItem>
                        <MenuItem className='contacts-link'>
                            <Link>Logos & Attribution</Link>
                        </MenuItem>
                        <MenuItem className='contacts-link'>
                            <Link>General</Link>
                        </MenuItem>
                        <MenuItem className='contacts-link'>
                            <Link>Account</Link>
                        </MenuItem>
                        <MenuItem className='contacts-link'>
                            <Link>Website FAQ</Link>
                        </MenuItem>
                    </MenuList>
                </Paper>
            </Stack>
        </div>
    );
}

export { OurContacts };