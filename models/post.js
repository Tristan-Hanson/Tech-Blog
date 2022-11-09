const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class Post extends Model{}

Post.init(
    {
        id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        text:{
            type: DataTypes.STRING,
            allowNull: false
        },
        creator_id:{
            type: DataTypes.INTEGER,
            references: {
              model: "User",
              key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Post'
    }
)
module.exports = Post;