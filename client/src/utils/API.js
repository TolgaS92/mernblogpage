import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    fetchPosts: function () {
        return API.get('/posts');
    },
    createPost: function (newPost) {
        return API.post('/posts', newPost);
    },
    updatePost: function (id, updatedPost) {
        return API.patch(`/posts/${id}`, updatedPost);
    },
    deletePost: function (id) {
        return API.delete(`/posts/${id}`);
    },
    likePost: function (id) {
        return API.patch(`/posts/${id}/likePost`);
    },
    signIn: function (formData) {
        return API.post('/users/signin', formData);
    },
    signUp: function (formData) {
        return API.post('/users/signup', formData);
    }
};