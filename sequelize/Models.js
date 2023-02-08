const sequelize = require('./DBconnection')
const {DataTypes} = require('sequelize')
const User = sequelize.define('user',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
      name:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      age:{
        type:DataTypes.INTEGER
      }
    },{
      freezeTableName:true,
      timestamps:true,
      createdAt:false,
      updatedAt:true
})

const Comment = sequelize.define('comment',{
  id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
  },
  title:{
      type:DataTypes.STRING,
  },
  content:{
      type:DataTypes.STRING,
  }
},{
  freezeTableName:true,
  timestamps:true,
  createdAt:true,
  updatedAt:true,
})

User.sync()

User.hasMany(Comment,{
  onDelete:'CASCADE'
})
Comment.belongsTo(User)
Comment.sync({force:true})

module.exports = {User,Comment}