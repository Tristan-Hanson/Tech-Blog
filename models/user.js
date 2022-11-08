const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');
const bcrypt = require('bcrypt');

class User extends Model{
  checkPassword(loginPw) {
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
      email: {
        type: DataTypes.STRING(500),
        allowNull: false,
        unique: "email",
        validate: {
          isEmail: true,
        },
      },
      password:{
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [5]
          }
      },
      Date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    },
    {
      hooks: {
        beforeCreate: async (newUserData) => {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
        beforeUpdate: async (updatedUserData) => {
          updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
          return updatedUserData;
        },
      },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'User'
    }
);

module.exports = User;