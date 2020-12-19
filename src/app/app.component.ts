import {Component}                     from '@angular/core';
import {configure, makeAutoObservable} from 'mobx';

configure({observableRequiresReaction: true});

@Component({
             selector: 'app-root',
             template: `
               <h2>Open the console to see the warning</h2>
               <div *mobxAutorun>
                 {{autorun_state | json}}
               </div>
               <button (click)="removeAutorun()">remove</button>
               <br>
               <hr>
               <div *mobxReaction="getState.bind(this)">
                 {{reaction_state | json}}
               </div>
               <button (click)="removeReaction()">remove</button>
             `,
             styles  : []
           })
export class AppComponent {

  autorun_state = ['autorun state', 'autorun state', 'autorun state'];
  reaction_state = ['reaction state', 'reaction state', 'reaction state'];

  constructor() {
    makeAutoObservable(this);
  }

  getState() {
    return this.reaction_state;
  }

  removeAutorun() {
    this.autorun_state.splice(this.autorun_state.length - 1, 1);
  }

  removeReaction() {
    this.reaction_state.splice(this.reaction_state.length - 1, 1);
  }
}
