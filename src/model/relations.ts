'use strict'

export const UserRelation =  {
  hasMany: {
    post: {
      foreignKey: 'userId',
      localField: 'posts'
    }
  }
}

export const PostRelation = {
  belongsTo: {
    user: {
      foreignKey: 'userId',
      localField: 'user'
    }
  },
  hasMany: {
    comment: {
      foreignKey: 'postId',
      localField: 'comments'
    }
  }
}

export const CommentRelation = {
  belongsTo: {
    post: {
      foreignKey: 'postId',
      localField: 'posts'
    }
  },
}