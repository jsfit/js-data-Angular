import { Component } from "@angular/core";
import { STORE } from "../store";
import { IUser } from '../model';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "js-data-angular";
  constructor() {
    
    STORE
    .findAll("comment")
    .then(function(page) {
      STORE.add("comment", page);
    });
  
    STORE
    .findAll("user")
    .then(function(page) {
      STORE.add("user", page);
    });
  
    STORE
    .findAll("post")
    .then(function(page) {
      STORE.add("post", page);
    });
  
    // console.log(STORE.get("user", 1));
  }
  change() {
    console.log(STORE.get("user", 1));
    

    // let query = null;
    // let opts = {
    //   with: ['post']
    // };
    // store.findAll('user', query, opts)
    //   .then((users) => {
    //     console.log(users); // [{...}, {...}, ...]
    //   });
   
  }
}
