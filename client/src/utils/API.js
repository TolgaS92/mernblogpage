import axios from 'axios';

const API = axios.create({ baseURL: 'https://sleepy-ridge-43911.herokuapp.com/' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    fetchWeather: function (cityPicked) {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityPicked}&units=imperial&appid=1690177fc6acff4c67ec2d90d2b1d0c6`)
    },
    fetchIp: function () {
        return axios.get(`https://ipapi.co/json`)
    },
    fetchPosts: function () {
        return API.get('/posts');
    },
    fetchPostsId: function (creator) {
        return API.get(`/posts/${creator}`);
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