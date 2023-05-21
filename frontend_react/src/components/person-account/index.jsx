import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { motion as m } from "framer-motion";
import '../../svg/account-pipes.svg';

import './person-account.css'

const PersonAccount = ({ responseLogin }) => {

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ width: "100%" }}
        >
            <div className='d-flex row m-0'>
                <div className='d-flex col top-person-account align-items-center'>
                    <div className='d-flex m-5 justify-content-center 
                            align-items-center avatar-person-account-circle'>
                        <p style={{ fontSize: "4rem" }}>
                            {/* avatar first letter Username */}
                            <Link className='text-white py-3 px-4' to={"#"} style={{ textDecoration: 'none' }}>
                                {responseLogin?.username[0]}
                            </Link>
                        </p>
                    </div>
                    <p className='fs-2 m-1 fw-bold text-white'>
                        {/* after avatar item Username */}
                        <Link to={"#"} style={{ textDecoration: 'none', color: "white" }}>
                            {responseLogin?.username}
                        </Link>
                        <span className='fs-5 m-3 fw-normal text-secondary'>Member since
                            {responseLogin !== null ?
                                <span className='mx-2'>
                                    {responseLogin?.date_joined.split('', 7)}
                                </span>
                                :
                                null
                            }
                        </span>
                    </p>
                </div>
                <Stack spacing={2}
                    backgroundColor="white"
                    borderBottom="1px solid gray"
                    justifyContent="center"
                    direction="row">
                    <Button variant="text">Button</Button>
                    <Button variant="text">Button</Button>
                    <Button variant="text">Button</Button>
                </Stack>
                <div className='d-flex row m-0 bg-white'>
                    <h4>Stats</h4>
                    <div className='d-flex col m-0'>
                        <div className='m-2'>
                            <p className='fs-5'>Total Edits</p>
                            <p className='fw-bold'
                                style={{ color: "#01D277", fontSize: "4rem" }}>0</p>
                        </div>
                        <div className='m-2'>
                            <p className='fs-5'>Total Ratings</p>
                            <p className='fw-bold'
                                style={{ color: "#01D277", fontSize: "4rem" }}>0</p>
                        </div>
                    </div>
                </div>
            </div>
        </m.div >
    )
}

export default PersonAccount