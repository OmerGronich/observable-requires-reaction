import {ChangeDetectionStrategy, Component} from '@angular/core';
import {configure, makeAutoObservable}      from 'mobx';

configure({observableRequiresReaction: true});

@Component({
             selector       : 'app-root',
             template       : `
               <h2>Open the console to see the warning</h2>
               <select
                 #select
                 (change)="selectObserver(select.value)"
               >
                 <option value="both">Both</option>
                 <option value="autorun">Autorun</option>
                 <option value="reaction">Reaction</option>
               </select>

               <br>
               <hr>

               <div *mobxAutorun>
                 <div *ngIf="selected_directive !== 'reaction'">
                   {{autorun_state | json}}
                   <button (click)="removeAutorunState()">remove</button>
                 </div>
               </div>


               <div *mobxReaction="getReactionState.bind(this)">
                 <div *ngIf="selected_directive !== 'autorun'">
                   {{reaction_state | json}}
                   <button (click)="removeReactionState()">remove</button>
                 </div>
               </div>
             `,
             changeDetection: ChangeDetectionStrategy.OnPush,
             styles         : []
           })
export class AppComponent {

  autorun_state = ['autorun state', 'autorun state', 'autorun state'];
  reaction_state = ['reaction state', 'reaction state', 'reaction state'];
  selected_directive = 'both';


  constructor() {
    makeAutoObservable(this);
  }

  getReactionState() {
    return [this.reaction_state, this.selected_directive];
  }

  removeAutorunState() {
    this.autorun_state.splice(this.autorun_state.length - 1, 1);
  }

  removeReactionState() {
    this.reaction_state.splice(this.reaction_state.length - 1, 1);
  }

  selectObserver(value: string) {
    this.selected_directive = value;
  }
}
