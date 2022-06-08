//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const BlogPost = require('./models/BlogPost')
const Comment = require('./models/Comment')
const Subscription = require('./models/Subscription')
const Tag = require('./models/Tag')

//associations could go here!
User.hasMany(Comment, {foreignKey: "commentorId"});
Comment.belongsTo(User);

BlogPost.hasMany(Comment, {foreignKey: "blogPostId"})
Comment.belongsTo(BlogPost);

User.belongsToMany(BlogPost, {through: "authors"})
BlogPost.belongsToMany(User, {through: "authors"})

User.belongsToMany(BlogPost, {through: "stacks"})
BlogPost.belongsToMany(User, {through: "stacks"})

Tag.belongsToMany(BlogPost, {through: "blogPost_tags"})
BlogPost.belongsToMany(Tag, {through: "blogPost_tags"})

User.belongsToMany(User, {through: "following", as: "authorId", foreignKey: "followerId"})
User.belongsToMany(User, {through: "following", as: "followerId", foreignKey: "authorId"})

User.hasOne(Subscription);
Subscription.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    BlogPost,
    Comment,
    Subscription,
    Tag
  },
}
