import { Component } from '@angular/core';
import {store, IUser, IComment, IPost} from '../store'
import { isBuffer } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'js-data-angular';
  userData: IUser = {} as IUser;
  constructor() {

   



    store.getMapper('post').findAll({
    }).then(function (page) {
      store.add('post', page)
    });
    store.getMapper('user').findAll({
    }).then(function (page) {
      store.add('user', page)
    });
   
   
    console.log(store.get('user', 1));

  }
  change() {
    
    let query = null;
    let opts = {
      with: [
        {
          relation: 'post',
          // This query will be mixed into the query
          // used to load the posts
         
        }
      ]
    };


    store.findAll('user', query, opts)
    .then((users) => {
      console.log(users);
    })
   

  }
}
