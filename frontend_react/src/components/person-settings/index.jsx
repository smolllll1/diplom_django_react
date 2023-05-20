import React, { useContext } from 'react';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { motion as m } from "framer-motion";
import { AuthenticationData } from '../data/authentication-data';
import { Link, useNavigate } from 'react-router-dom';
import '../../svg/account-pipes.svg';

import './person-settings.css'

const PersonSettings = () => {

    const navigate = useNavigate();
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
            style={{ backgroundColor: "white", width: "100%" }}
        >
            <div className='d-flex row m-0'>
                <div className='d-flex col top-person-settings align-items-center'>
                    <div className='d-flex m-3 justify-content-center 
                        avatar-person-settings-circle'
                        style={{ cursor: "pointer" }}
                        onClick={() => { navigate(`/users/account/${responseLogin?.username}`) }}
                    >
                        <p className='text-white' style={{ fontSize: "2rem" }}>
                            {/* avatar first letter Username */}
                            {responseLogin?.username[0]}
                        </p>
                    </div>
                    <h2 className='m-1 fw-bold'>
                        {/* after avatar item Username */}
                        <Link to={`/users/account/${responseLogin?.username}`}
                            className="text-decoration-none text-white">
                            {responseLogin?.username}
                        </Link>
                    </h2>
                </div>
            </div>
            <Stack direction="row" spacing={2} sx={{ borderTop: '10px' }}>
                <Paper className='mt-3 mb-3 mx-5' style={{ width: "300px" }}>
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
                        <Link to={"/updated"}>
                            <MenuItem sx={useStyleMenuSettings.li}>
                                Edit Profile
                            </MenuItem>
                        </Link>
                        <Link>
                            <MenuItem sx={useStyleMenuSettings.li}>
                                Account Settings</MenuItem>
                        </Link>
                        <Link>
                            <MenuItem sx={useStyleMenuSettings.li}>
                                Streaming Services</MenuItem>
                        </Link>
                        <Link>
                            <MenuItem sx={useStyleMenuSettings.li}>
                                Notifications</MenuItem>
                        </Link>
                        <Link>
                            <MenuItem sx={useStyleMenuSettings.li}>
                                Blocked Users</MenuItem>
                        </Link>
                        <Link>
                            <MenuItem sx={useStyleMenuSettings.li}>
                                Import List
                            </MenuItem>
                        </Link>
                        <Link>
                            <MenuItem sx={useStyleMenuSettings.li}>
                                Sharing Settings</MenuItem>
                        </Link>
                        <Link>
                            <MenuItem sx={useStyleMenuSettings.li}>
                                Sessions</MenuItem>
                        </Link>
                        <Link to={"*"}>
                            <MenuItem sx={useStyleMenuSettings.li}>
                                API</MenuItem>
                        </Link>
                        <MenuItem sx={useStyleMenuSettings.li}
                            onClick={(() => { onHandlerDeleteAccount(); navigate(`/`) })}>
                            Delete Account
                        </MenuItem>
                    </MenuList>
                </Paper>
            </Stack>
        </m.div >
    )
}

export { PersonSettings };