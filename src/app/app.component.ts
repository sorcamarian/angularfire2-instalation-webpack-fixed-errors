import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
  items = null;
  
  constructor(af: AngularFire) {
   af.database.list('/').subscribe( (itemParamenter) => {
       // .subscribe() because asyncronous response
       this.items = itemParamenter;
   });
  }
}
