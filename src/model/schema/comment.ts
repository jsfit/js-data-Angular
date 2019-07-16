import { Schema, Record} from 'js-data';
  
  export const CommentSchema = new Schema({
    type: 'object',
    properties: {
      id: { type: 'number' },
      // Only the DataStore and SimpleStore components care about the "indexed" attribute
      postId: { type: 'number', indexed: true },
      // Only the DataStore and SimpleStore components care about the "indexed" attribute
      name: { type: 'number', indexed: true },
      email: { type: 'string' },
      body: { type: 'string' }
    }
  });

  export interface IComment extends Record {
    id: string|number
    postId: string
    name: string
    email: string
    body: string|Date
  }