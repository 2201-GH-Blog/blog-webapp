const Sequelize = require('sequelize')
const db = require('../db')

const Comment = db.define('comment', {
    parentCommentId: {
        type: Sequelize.INTEGER,
        defaultValue: null,
    },
    text: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
})

module.exports = Comment;