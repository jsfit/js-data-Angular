import { Schema, Record} from 'js-data';

export const UserSchema = new Schema({
  // $schema: 'http://json-schema.org/draft-04/schema#', // optional
  // title: 'User', // optional
  // description: 'Schema for User records', // optional
  type: 'object',
  properties: {
    id: { type: 'number' },
    name: { type: 'string' },
    username: { type: 'string' },
    email: { type: 'string' },
    address: { type: 'object' },
    phone: { type: 'string' },
    website: { type: 'string' },
    company: { type: 'string' },
  }
});

export interface IUser extends Record {
  id: string|number
  name: string,
  username: string,
  email: string,
  address: string,
  phone: string,
  website: string,
  company: string,
}




