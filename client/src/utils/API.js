import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    fetchPosts: function () {
        return axios.get('/posts');
    },
    createPost: function (newPost) {
        return axios.post('/posts', newPost);
    },
    updatePost: function (id, updatedPost) {
        return axios.patch(`/posts/${id}`, updatedPost);
    },
    deletePost: function (id) {
        return axios.delete(`/posts/${id}`);
    },
    likePost: function (id) {
        return axios.patch(`/posts/${id}/likePost`);
    }
};