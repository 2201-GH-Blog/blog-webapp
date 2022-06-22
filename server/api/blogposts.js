const router = require('express').Router()
const { models: { BlogPost, User }} = require('../db')
const { verifyAdmin, verifyToken } = require('./security')
module.exports = router

router.get('/', async(req, res, next) => {
    try{
        const blogPosts = await BlogPost.findAll({
            include: [{model: User,
            as: 'authors'}],
            attributes: [title]

        })
    } catch(err){
        next(err)
    }
})