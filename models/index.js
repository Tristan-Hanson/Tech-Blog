const Post = require('./post')
const User = require('./user');

User.hasMany(Post,{
    foreignKey: "creator_id",
});

Post.belongsTo(User,{
    foreignKey: "creator_id",
});
module.exports = {Post, User}