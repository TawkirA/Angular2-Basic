import {Component} from '@angular/core';

import {FriendComponent} from 'app/friend.component';

@Component({
  selector: 'app',
  directives: [FriendComponent],
  styles: [`
        h1 {
    color:#545454;
    background:#02A8F4;
    padding:15px;
    box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
    }
    `],
  // template: '<b>Bootstrapping {{componentName}}!</b>',
  template: `
      <div>
        <h1 class="main-text">Hello from the {{componentName}}!</h1>
        
        <my-friends></my-friends>
      </div>
    `  
  
})

export class App {
  componentName: 'AppComponent'
}