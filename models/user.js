const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');
const bcrypt = require('bcrypt');

class User extends Model{
  chckPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
    {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      username:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      password:{
          type: DataTypes.STRING,
      }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'User'
    }
);

module.exports = User;