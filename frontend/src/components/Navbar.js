import {AppBar, Toolbar, Typography, Button, Container} from '@mui/material'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Typography 
                    variant="h6"
                    component={Link}
                    to="/"
                    sx={{flexGrow:1, textDecoration:'none', color:'white'}}
                    >
                        My Blog
                    </Typography>
                    <Button
                        color='inherit'
                        component={Link}
                        to="/create"
                    >
                        New Post
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar