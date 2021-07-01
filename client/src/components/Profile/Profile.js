import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form'

const Profile = () => {
    const [postId, setPostId]= useState();
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        dispatch(getPosts());
        /* console.log(user.result._id) */
    }, [postId,dispatch])

    return (
        <Grow in>
        <Container>
            {/* {user._id.map(res => ( */}
          <Grid  container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={5} >
              <Posts setPostId={setPostId} />
            </Grid>
            <Grid item xs={12} sm={3} >
              <Form postId={postId} setPostId={setPostId}/>
            </Grid>
          </Grid>
          {/* ))} */}
        </Container>
      </Grow>
    )
}
export default Profile;