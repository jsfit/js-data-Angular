import { Schema } from 'js-data';

export const post = new Schema({
    type: 'object',
    properties: {
      id: { type: 'number' },
      // Only the DataStore and SimpleStore components care about the "indexed" attribute
      user_id: { type: 'number', indexed: true },
      title: { type: 'string' },
      body: { type: 'string' },
    }
  });
  
