'use strict'

export const Ruser =  {
  hasMany: {
    post: {
      // database column, e.g. console.log(post.user_id) // 2
      foreignKey: 'user_id',
      // reference to related objects in memory, e.g. user.posts
      localField: 'postss'
    }
  }
}

export const Rpost = {
  belongsTo: {
    // comment belongsTo user
    user: {
      // database column, e.g. console.log(comment.user_id) // 2
      foreignKey: 'user_id',
      // reference to related object in memory, e.g. post.user
      localField: 'user'
    }
  }
}

export const Rcomment = {
  
}