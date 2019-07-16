import { Schema, Record} from 'js-data';

export const PostSchema = new Schema({
    type: 'object',
    properties: {
      id: { type: 'number' },
      // Only the DataStore and SimpleStore components care about the "indexed" attribute
      userId: { type: 'number', indexed: true },
      title: { type: 'string' },
      body: { type: 'string' },
    }
  });
  
  export interface IPost extends Record {
    id: string|number
    title: string
    body: string
    user_id: string
  }