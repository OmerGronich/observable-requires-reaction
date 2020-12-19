import {Component}                     from '@angular/core';
import {configure, makeAutoObservable} from 'mobx';

configure({observableRequiresReaction: true});

@Component({
             selector: 'app-root',
             template: `
               <h2>Open the console to see the warning</h2>
               <div *mobxAutorun>
                 {{state | json}}
               </div>
             `,
             styles  : []
           })
export class AppComponent {

  state = ['random state', 'random state', 'random state'];

  constructor() {
    makeAutoObservable(this);
  }
}
