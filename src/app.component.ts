import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <Navigator barTintColor="#005eb8" tintColor="#00a9e0" titleTextColor="#FFFFFF" [itemWrapperStyle]="{backgroundColor: '#F5FCFF'}"></Navigator>
 `
})

export class AppComponent {
  constructor() {

  }
}
