import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { motion as m } from "framer-motion";
import '../../svg/account-pipes.svg';

import './person-settings.css'

const PersonSettings = ({ formikLogin }) => {

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className='d-flex row m-0'>
                <div className='d-flex col top-person-settings align-items-center'>
                    <div className='d-flex m-3 justify-content-center 
                        avatar-person-settings-circle'>
                        <p className='text-white' style={{ fontSize: "2rem" }}>
                            {/* avatar first letter Username */}
                            {formikLogin.values.name[0]}
                        </p>
                    </div>
                    <h2 className='m-1 fw-bold text-white'>
                        {/* after avatar item Username */}
                        {formikLogin.values.name}
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
                        <MenuItem>item1</MenuItem>
                        <MenuItem>item2</MenuItem>
                        <MenuItem>item3</MenuItem>
                        <MenuItem>item4</MenuItem>
                        <MenuItem>item5</MenuItem>
                        <MenuItem>item6</MenuItem>
                        <MenuItem>item7</MenuItem>
                        <MenuItem>item8</MenuItem>
                        <MenuItem>item9</MenuItem>
                        <MenuItem>item10</MenuItem>
                    </MenuList>
                </Paper>
            </Stack>
        </m.div>
    )
}

export default PersonSettings;