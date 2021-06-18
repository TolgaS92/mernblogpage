import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import BlogPosts from './images/Blog.png';
import React, { useState, useEffect } from 'react';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

function App() {
  const [postId, setPostId]= useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Blog Post
        </Typography>
        <img src={BlogPosts} alt="BlogPosts" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7} >
              <Posts setPostId={setPostId} />
            </Grid>
            <Grid item xs={12} sm={4} >
              <Form postId={postId} setPostId={setPostId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
