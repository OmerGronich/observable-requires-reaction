# mobx + mobx-angular

## observable requires reaction

The `*mobxAutorun` and `*mobxReaction` directives do not get picked up as reactive contexts by the mobx configuration
option observable requires reaction. Reproduced example in src/app/app.component.ts

(open the console to see the warning)
