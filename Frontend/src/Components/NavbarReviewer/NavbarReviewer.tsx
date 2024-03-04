import React from "react";
import { AppBar, IconButton, Toolbar, Typography, Stack, Button, Box} from "@mui/material";
import {ReactComponent as Icon} from '../Icon.svg';

const NavbarReviewer = () =>
{
    return(
        <Box display="flex" flexDirection="row">
        <AppBar position='static'style={{ background: '#FFFFFF'}}>
            <Toolbar >
                <Icon/>
                <Typography variant='h5' component='div' style={{ color: '#000000'}} sx={{ flexGrow: 0, m: 2}}>
                KSU Conference Planner
                </Typography>
                <Stack direction ='row' spacing = {2} sx={{ flexGrow: 1  }}>
                    <Button style={{ color: '#000000'}}>Home</Button>
                    <Button style={{ color: '#000000'}}>Sessions</Button>
                    <Button style={{ color: '#000000'}}>About</Button>
                    <Button style={{ color: '#000000'}}>FAQ</Button>
                    <Button style={{ color: '#000000'}}>Your Schedule</Button>
                    <Button style={{ color: '#000000'}}>Application Review</Button>
                </Stack>
                <Stack direction ='row' spacing = {2} sx={{ flexGrow: 0  }}>
                    <Button style={{ color: '#FFFFFF', backgroundColor: '#512888'}}>Sign Out</Button>
                </Stack>
            </Toolbar>
        </AppBar>
        </Box>
        
    )
}

export default NavbarReviewer;