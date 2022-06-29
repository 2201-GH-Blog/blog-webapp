const router = require('express').Router()
const { models: { User, BlogPost, Author } } = require('../db')
const { verifyAdmin, verifyToken } = require('./security')
module.exports = router

router.get('/', verifyAdmin, async (req, res, next) => {
  try {
    console.log('users route entry')
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// '/:id'
router.get('/profile', verifyToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.get('/authors', async (req, res, next) => {
  try {
    console.log('users route entry')
    const authors = await Author.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['userId'],
      include: [{ model: User }]
    })

    // const authors = await User.findAll({
    //   include: [{ model: 'authors' }]
    // })

    res.json(authors)
  } catch (err) {
    next(err)
  }
})


// '/authors' -- accessing the through table, not the users table

// '/authors/:id' 