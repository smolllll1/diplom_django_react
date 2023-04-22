import React from "react";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { lightGreen } from '@mui/material/colors';

import './login-nav.css'

const LoginNav = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Link to={'/registration'}>
                <Button type="button" id="registration-btn">Registration</Button>
            </Link>
            <IconButton
                size="large"
                aria-label="show 7 new notifications">
                <Badge badgeContent={7} color="error">
                    <NotificationsIcon className="bell" />
                </Badge>
            </IconButton>
            <Avatar variant='circular' sx={{ bgcolor: lightGreen[500] }}>V</Avatar>
            <Link to={'/login'}>
                <Button type="button">Login</Button>
            </Link>
        </Stack>
    )
}

export default LoginNav;