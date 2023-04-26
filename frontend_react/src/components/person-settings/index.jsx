import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { motion as m } from "framer-motion";
import '../../svg/account-pipes.svg';

import './person-settings.css'

const PersonAccount = () => {

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className='d-flex row m-0'>
                <div className='d-flex col top-person-settings align-items-center'>
                    <div className='d-flex m-3 justify-content-center 
                        avatar-person-settings-circle'>
                        <p className='text-white' style={{ fontSize: "2rem" }}>V</p>
                    </div>
                    <h2 className='m-1 fw-bold text-white'>Username</h2>
                </div>
            </div>
            <Stack direction="row" spacing={2}>
                <Paper>
                    <MenuList>
                        <li className='text-center'
                            style={{
                                backgroundColor: '#01D277',
                                color: 'white',
                                lineHeight: "2.5",
                                fontSize: '1.2rem',
                                letterSpacing: '0.00938em'
                            }}>
                            Settings
                        </li>
                        <MenuItem>Edit Profile</MenuItem>
                        <MenuItem>Account Settings</MenuItem>
                        <MenuItem>Logout</MenuItem>
                        <MenuItem>Logout</MenuItem>
                        <MenuItem>Logout</MenuItem>
                        <MenuItem>Logout</MenuItem>
                        <MenuItem>Logout</MenuItem>
                        <MenuItem>Logout</MenuItem>
                        <MenuItem>Logout</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </MenuList>
                </Paper>
            </Stack>
        </m.div>
    )
}

export default PersonAccount