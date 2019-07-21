import { DataStore  } from 'js-data';
import { HttpAdapter } from 'js-data-http';
import * as dataModel from './index'

export const STORE = new DataStore({});
export const adapter = new HttpAdapter({
    basePath: 'https://jsonplaceholder.typicode.com'
});

STORE.registerAdapter('http', adapter, { default: true });

STORE.defineMapper('post', {
    endpoint: 'posts',
    schema: dataModel.PostSchema,
    relations: dataModel.PostRelations,
  });

STORE.defineMapper('user', {
    endpoint: 'users',
    schema: dataModel.UserSchema,
    relations: dataModel.UserRelations,
  });

STORE.defineMapper('comment', {
    endpoint: 'comments',
    schema: dataModel.CommentSchema,
    relations: dataModel.CommentRelations,
});