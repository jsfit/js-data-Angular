import { Schema } from 'js-data';

export const user = new Schema({
  // $schema: 'http://json-schema.org/draft-04/schema#', // optional
  // title: 'User', // optional
  // description: 'Schema for User records', // optional
  type: 'object',
  properties: {
    id: { type: 'number' },
    name: { type: 'string' },
    username: { type: 'string' },
    email: { type: 'string' },
    address: { type: 'string' },
    phone: { type: 'string' },
    website: { type: 'string' },
    company: { type: 'string' },
  }
});
