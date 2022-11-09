const { Post } = require('../models');

const postData = [
    {
        title: "new post",
        text: "This is Tristan's post",
        creator_id: 1
    },
    {
        title: "old post",
        text: "lorem ipsum is too long",
        creator_id: 4
    },
    {
        title: "fun post",
        text: "lorem ipsum is not long",
        creator_id:4
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
