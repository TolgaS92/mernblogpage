import { FETCH_ALL, CREATE, UPDATE, DELETE  } from '../constants/actionTypes';

import API from '../utils/API';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await API.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await API.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await API.updatePost(id, post);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
       await API.deletePost(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error);
    }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await API.likePost(id);
  
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};