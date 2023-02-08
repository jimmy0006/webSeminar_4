const express = require("express");
const router = express.Router();

const {Comment} = require('../sequelize/Models')

router.route('/:id')
.get(async (req,res)=>{
    const comments = await Comment.findAll({
        where:{
            userId:req.params.id
        }
    })
    res.json(comments)
})
.post(async (req,res)=>{
    await Comment.create({
        userId:req.params.id,
        title:req.body.title,
        content:req.body.content
    })
    console.log(`content ${req.body.title} joined!`)
    res.send(`content ${req.body.title} joined!`)
})
.delete(async (req,res)=>{
    await Comment.destroy({
        where:{
            userId:req.params.id,
            title:req.body.title
        }
    })
    res.send(`content ${req.body.title} deleted!`)
})
.put(async (req,res)=>{
    const comment = await Comment.findOne({
        where:{
            userId:req.params.id,
            title:req.body.title
        }
    })
    comment.content = req.body.content;
    comment.save();
    res.json(`content ${req.body.title} has changed!`)
})

module.exports = router;