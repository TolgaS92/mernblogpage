import React from "react";
import Post from './Post/Post';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './style';

const Posts = ({ setPostId }) => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles();
    return(
            !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) =>(
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setPostId={setPostId} />
                    </Grid>
                    ))}
            </Grid>
            )
    )
}

export default Posts;