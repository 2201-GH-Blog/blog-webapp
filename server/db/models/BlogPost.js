const Sequelize = require('sequelize')
const db = require('../db')

const BlogPost = db.define('blogPost', {
    title: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    text: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    mediumLink: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isUrl: true
        }
    },
    image: {
        type: Sequelize.TEXT,
    },
    summary: {
        type: Sequelize.TEXT,
    }
})

module.exports = BlogPost;
