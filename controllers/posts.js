/* const db = require("../models");

module. = {
    findAll: function(req, res) {
        db.PostMessage
            .find()
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.PostMessage
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        const post = req.body;
        db.PostMessage
          .create({ ...post, creator: req.userId, createdAt: new Date().toISOString() })
          .then(dbModel => res.json(dbModel))
          .catch(err => {
              console.log(err)
              res.status(422).json(err)
            });
      },
    update: function(req, res) {
        const { id } = req.params;
        const { title, message, creator, selectedFile, tags } = req.body;
        const updatedPost = { creator, title, message, tags, selectedFile, _id: id };
        db.PostMessage
            .findOneAndUpdate(id, updatedPost, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.PostMessage
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    likePost: function(req, res) {
        const { id } = req.params;
        if(!req.userId) return res.json({ message: 'Unauthenticated' });
        const post = db.PostMessage.findById(id);
        const index = post.likes.findIndex((id) => id === String(req.userId));
        if(index === -1){
            //like the post
            post.likes.push(req, userId);
        } else {
            //dislike the post
            post.likes = post.likes.filter((id) => id !== String(req.userId));
        }
        db.PostMessage
            .findByIdAndUpdate(id, post, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err)
                res.status(422).json(err)
            });
    }
};
 */

const express = require('express');
const mongoose = require('mongoose');

const PostMessage = require('../models/PostMessage.js');

const router = express.Router();

const findAll = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const findById = async (req, res) => { 
    const { creator } = req.params;

    try {
        const post = await PostMessage.findById(creator);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json(console.log(error),{ message: error.message });
    }
}

const create = async (req, res) => {
    const post = req.body;

    const newPostMessage = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const update = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

const remove = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

const likePost = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
      }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    const index = post.likes.findIndex((id) => id ===String(req.userId));

    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
    res.status(200).json(updatedPost);
}


module.exports = {
    findAll,
    findById,
    create,
    update,
    remove,
    likePost
  };