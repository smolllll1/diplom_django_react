import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './form-registration.css';

const FormRegiatration = () => {

    return (

        <div className="wrapper-registration">
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <h2>Let's get started</h2>
                <TextField
                    required
                    id="name"
                    label="Name"
                />
                <TextField
                    required
                    id="email"
                    label="Email"
                    type="email"
                />
                <TextField
                    required
                    id="password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <TextField
                    required
                    id="confirm-password-input"
                    label="Confirm password"
                    type="password"
                    autoComplete="current-password"
                />
                <Button id="submit-button" variant="outlined">SUBMIT</Button>
            </Box>
        </div>
    )
}

export default FormRegiatration;