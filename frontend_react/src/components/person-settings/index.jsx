import React, { useContext } from 'react';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { motion as m } from "framer-motion";
import { AuthenticationData } from '../data/authentication-data';
import { NavLink } from 'react-router-dom';
import '../../svg/account-pipes.svg';

import './person-settings.css'

const PersonSettings = () => {

    const { responseLogin, onHandlerDeleteAccount } = useContext(AuthenticationData)

    const useStyleMenuSettings = {
        li: {
            color: 'gray',
            textTransform: "capitalize",
            ':hover': {
                color: "#01D277",
            },
        }
    }
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ backgroundColor: "white" }}
        >
            <div className='d-flex row m-0'>
                <div className='d-flex col top-person-settings align-items-center'>
                    <div className='d-flex m-3 justify-content-center 
                        avatar-person-settings-circle'>
                        <p className='text-white' style={{ fontSize: "2rem" }}>
                            {/* avatar first letter Username */}
                            {responseLogin?.username[0]}
                        </p>
                    </div>
                    <h2 className='m-1 fw-bold text-white'>
                        {/* after avatar item Username */}
                        {responseLogin?.username}
                    </h2>
                </div>
            </div>
            <Stack direction="row" spacing={2} sx={{ borderTop: '10px' }}>
                <Paper className='mt-3 mb-3 mx-5 w-25'>
                    <MenuList className='p-0'>
                        <li className='px-3 py-2 rounded-top'
                            style={{
                                backgroundColor: '#01D277',
                                color: 'white',
                                lineHeight: "2.5",
                                fontSize: '1.2rem',
                                letterSpacing: '0.00938em',
                            }}>
                            Settings
                        </li>
                        <NavLink to={"edit-profile"}>
                            <MenuItem sx={useStyleMenuSettings.li}>
                                Edit Profile
                            </MenuItem>
                        </NavLink>
                        <NavLink>
                            <MenuItem sx={useStyleMenuSettings.li}>
                                Account Settings</MenuItem>
                        </NavLink>
                        <NavLink>
                            <MenuItem sx={useStyleMenuSettings.li}>
                                Streaming Services</MenuItem>
                        </NavLink>
                        <NavLink>
                            <MenuItem sx={useStyleMenuSettings.li}>
                                Notifications</MenuItem>
                        </NavLink>
                        <NavLink>
                            <MenuItem sx={useStyleMenuSettings.li}>
                                Blocked Users</MenuItem>
                        </NavLink>
                        <NavLink>
                            <MenuItem sx={useStyleMenuSettings.li}>
                                Import List
                            </MenuItem>
                        </NavLink>
                        <NavLink>
                            <MenuItem sx={useStyleMenuSettings.li}>
                                Sharing Settings</MenuItem>
                        </NavLink>
                        <NavLink>
                            <MenuItem sx={useStyleMenuSettings.li}>
                                Sessions</MenuItem>
                        </NavLink>
                        <NavLink to={"*"}>
                            <MenuItem sx={useStyleMenuSettings.li}>
                                API</MenuItem>
                        </NavLink>
                        <MenuItem sx={useStyleMenuSettings.li}
                            onClick={(() => { onHandlerDeleteAccount() })}>
                            Delete Account
                        </MenuItem>
                    </MenuList>
                </Paper>
            </Stack>
        </m.div>
    )
}

export default PersonSettings;