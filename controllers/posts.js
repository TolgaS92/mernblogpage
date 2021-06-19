const db = require("../models");
const data = require("../models/PostMessage.js")

module.exports = {
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
        db.PostMessage
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
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
        const { likeCount } = req.body;
        const post = data.findById(id);
        /* const updatedPost2 = { likeCount: post.likeCount + 1, _id: id };
        const updatedPost = db.PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true }); */
        data
            .findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err)
                res.status(422).json(err)
            });
    }
};
