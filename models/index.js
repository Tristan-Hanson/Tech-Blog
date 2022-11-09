const Post = require('./post')
const User = require('./User');

User.hasMany(Post,{
    foreignKey: "creator_id",
});

Post.belongsTo(User,{
    foreignKey: "creator_id",
});
module.exports = {Post, User}