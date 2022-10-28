const { Post } = require('../models');

const postData = [
    {
        title: "new post",
        text: "lorem ipsum is long",
    },
    {
        title: "old post",
        text: "lorem ipsum is too long",
    },    {
        title: "fun post",
        text: "lorem ipsum is not long",
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
