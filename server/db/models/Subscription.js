const Sequelize = require('sequelize')
const db = require('../db')

const Subscription = db.define('subscription', {
    newPosts: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    },
    allNews: {
        type: Sequelize.BOOLEAN,
        defaultValue: true, 
    }
})

module.exports = Subscription;