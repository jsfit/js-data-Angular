import {
    DataStore,
    Record,
} from 'js-data';
  import {HttpAdapter} from 'js-data-http';
  import { user } from "./model/user";
  import { post } from "./model/post";
  import { comment } from "./model/comment";
  import {Rcomment, Rpost, Ruser  } from "./model/relations";
  
  

  
  export const adapter = new HttpAdapter({
    basePath: 'https://jsonplaceholder.typicode.com/'
  })
  export const store = new DataStore({
  })
  
  store.registerAdapter('http', adapter, { default: true })
  
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
  

  
  store.defineMapper('user', {
    endpoint: 'users',
    schema: user,
    relations: Ruser,
  })
  
  export interface IPost extends Record {
    id: string|number
    title: string
    body: string
    user_id: string
  }
  
  store.defineMapper('post', {
    endpoint: 'posts',
    schema: post,
    relations: Rpost,
  })


  export interface IComment extends Record {
    id: string|number
    email: string
    post_id: string
    name: string
    body: string|Date
  }
  
  store.defineMapper('comment', {
    endpoint: 'comments',
    schema: comment,
    relations: Rcomment
  })


