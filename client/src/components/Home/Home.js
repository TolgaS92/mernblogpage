import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form'
import WeatherBar from '../WeatherBar/WeatherBar';

const Home = () => {
    const [postId, setPostId]= useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [postId,dispatch])

    return (
        <Grow in>
        <Container fixed>
          <Grid  container justify="space-between" alignItems="stretch" spacing={3}>
          <WeatherBar 
            item xs={12} sm={5}
            style={{
              marginLeft: "0",
              floatLeft: "true"
            }}
            />
            <Grid item xs={12} sm={5} >
              <Posts setPostId={setPostId} />
            </Grid>
            <Grid item xs={12} sm={3} >
              <Form postId={postId} setPostId={setPostId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    )
}
export default Home;