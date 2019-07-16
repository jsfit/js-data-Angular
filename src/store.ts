  import { DataStore} from 'js-data';
  import { HttpAdapter} from 'js-data-http';
  import { UserSchema, CommentSchema, PostSchema } from "./model";
  import { CommentRelation, PostRelation, UserRelation  } from "./model/relations";

  
  export const adapter = new HttpAdapter({
    basePath: 'https://jsonplaceholder.typicode.com/'
  });
  export const STORE = new DataStore({});
  
  STORE.registerAdapter('http', adapter, { default: true });
  
  STORE.defineMapper('user', {
    endpoint: 'users',
    schema: UserSchema,
    relations: UserRelation,
  });
  
  STORE.defineMapper('post', {
    endpoint: 'posts',
    schema: PostSchema,
    relations: PostRelation,
  });

  STORE.defineMapper('comment', {
    endpoint: 'comments',
    schema: CommentSchema,
    relations: CommentRelation
  });


