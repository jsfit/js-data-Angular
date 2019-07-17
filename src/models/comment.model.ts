import { Schema, Record} from 'js-data';

export const CommentSchema = new Schema ({
  title: 'Comment', 
  description: 'Schema for Comment records', 
  type: 'object',
  properties: {
          id: { type: 'string' },
          postId: { type: 'number' },
          name: { type: 'string' },
          email: { type: 'string' },
          body: { type: 'string' },
        }
});

export interface IComment extends Record {
      id: { type: 'string' },
      postId: { type: 'number' },
      name: { type: 'string' },
      email: { type: 'string' },
      body: { type: 'string' },
  }

export const CommentRelations =  {
  
}

