import { Schema } from 'js-data';
export class Profile {
    name: string;
    qoutes: string;
    links: object;
    jobTitle: string;
    sex: string;
    address: string;
    Eemail: string;
    phone: string;
    image: string;
    
}

export const user = new Schema({
  $schema: 'http://json-schema.org/draft-04/schema#', // optional
  title: 'User', // optional
  description: 'Schema for User records', // optional
  type: 'object',
  properties: {
    id: { type: 'number' },
    name: { type: 'string' }
  }
});

export const post = new Schema({
    type: 'object',
    properties: {
      id: { type: 'number' },
      // Only the DataStore and SimpleStore components care about the "indexed" attribute
      user_id: { type: 'number', indexed: true },
      title: { type: 'string' },
      content: { type: 'string' },
      date_published: { type: ['string', 'null'] }
    }
  });
  
  export const comment = new Schema({
    type: 'object',
    properties: {
      id: { type: 'number' },
      // Only the DataStore and SimpleStore components care about the "indexed" attribute
      post_id: { type: 'number', indexed: true },
      // Only the DataStore and SimpleStore components care about the "indexed" attribute
      user_id: { type: 'number', indexed: true },
      content: { type: 'string' }
    }
  });