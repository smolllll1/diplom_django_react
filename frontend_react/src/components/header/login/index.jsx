import React from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { lightGreen } from '@mui/material/colors';

import './login.css'

const Login = () => {
    return (
        <Stack direction="row" spacing={2}>
            <IconButton
                size="large"
                aria-label="show 17 new notifications">
                <Badge badgeContent={17} color="error">
                    <NotificationsIcon className="bell" />
                </Badge>
            </IconButton>
            <Avatar variant='rounded' sx={{ bgcolor: lightGreen[500] } }>V</Avatar>
            <Button type="button">Login</Button>
        </Stack>
    )
}

export default Login;