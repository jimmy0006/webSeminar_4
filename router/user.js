const express = require("express");
const router = express.Router();

const {User} = require('../sequelize/Models')

router.route('/')
.get(async (req,res)=>{
    const users = await User.findAll({})
    res.json(users)
})
.post(async (req,res)=>{
    await User.create({
        name:req.body.name,
        age:req.body.age
    })
    console.log(`user ${req.body.name} joined!`)
    res.send(`user ${req.body.name} joined!`)
})
.delete(async (req,res)=>{
    await User.destroy({
        where:{
            name:req.body.name
        }
    })
    res.send(`user ${req.body.name} deleted!`)
})
.put(async (req,res)=>{
    const user = await User.findOne({
        where:{
            name:req.body.name
        }
    })
    user.age=req.body.age;
    user.save()
    res.json(`user ${req.body.name} has changed!`)
})

module.exports = router;