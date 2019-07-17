import { Schema, Record} from 'js-data';

export const PostSchema = new Schema ({
  title: 'Post', 
  description: 'Schema for Post records', 
  type: 'object',
  properties: {
          id: { type: 'string' },
          userId: { type: 'string' },
          title: { type: 'string' },
          body: { type: 'string' },
        }
});

export interface IPost extends Record {
      id: { type: 'string' },
      userId: { type: 'string' },
      title: { type: 'string' },
      body: { type: 'string' },
  }

export const PostRelations =  {
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

