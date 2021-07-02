import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPostsWithId } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form'
/* import Post from '../Posts/Post/Post'; */

const Profile = () => {
    const [postId, setPostId]= useState();
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
    useEffect(() => {
        dispatch(getPostsWithId(user?.result?._id));
        setUser();
    }, [user,postId,dispatch])

    return (
        <Grow in>
        <Container>
          <Grid  container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7} >
              <Posts 
              setPostId={setPostId}
               />
              {/* <Post post={posts} setPostId={setPostId} /> */}
            </Grid>
            <Grid item xs={12} sm={3} >
              <Form postId={postId} setPostId={setPostId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    )
}
export default Profile;