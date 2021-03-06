import React, { useState, useEffect } from 'react'
/* import BlogPosts from '../../images/Blog.png'; */
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import useStyles from './styles';
import Download from '../../images/Download.png';

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/');

        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;
        /*  JWT */
        if(token) {
            const decodedToken = decode(token);
            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Button component={Link} to="/">
                    <img src={Download} alt="BlogPosts" height="60" />
                </Button>
            </div>
            <div>
            </div>
            <Toolbar 
            className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Typography className={classes.heading} align="left">
                            <Button className={classes.button} component={Link} to="/" variant="contained" color="primary">Home</Button>
                        </Typography>
                        <Typography className={classes.heading} align="left">
                            <Button className={classes.button} component={Link} to="/profile" variant="contained" color="primary">Profile</Button>
                        </Typography>
                        <Typography className={classes.heading} align="left">
                            <Button variant="contained" className={classes.button} color="secondary" onClick={logout}>Logout</Button>
                        </Typography>
                    </div>
                ) : (
                    <Button className={classes.signIn} component={Link} to="/auth" variant="contained" color="primary">Sign in</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;