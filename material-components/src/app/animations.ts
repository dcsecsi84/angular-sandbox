import {
trigger,
animate,
transition,
style,
query,
stagger,
keyframes,
state
} from '@angular/animations';

export const RoutAnimation = trigger('RoutAnimation', [
transition('* => *', [
    query(':enter',
    style({ opacity: 0 }), {optional: true}),
    query(':leave',
    [style({ opacity: 1 }), animate('1s', style({ opacity: 0, transform: 'translateX(-100%)' }))], {optional: true}
    ),
    query(
    ':enter',
    [style({ opacity: 0 }), animate('500ms', style({ opacity: 1 }))], {optional: true}
    )
])
]);

export let list = trigger ('listAnimation', [

    transition('* => *', [
      query(':enter', style({ opacity: 0 }), {optional: true}),
      query(':enter', stagger('200ms', [
        animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0px)', offset: 1})
        ]))
      ]), {optional: true}),
      query(':leave', stagger('200ms', [
        animate('1s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0px)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75px)', offset: 1})
        ]))
      ]), {optional: true}),

    ]),
  ]);

  export let stateAnim = trigger('stateAnim', [
    state('small', style({
      transform: 'scale(1)'
    })),
    state('large', style({
      transform: 'scale(2)', background: '#757575'
    })),
    transition('small => large', animate('250ms cubic-bezier(1,.4,0,.63)', keyframes([
      style({background: '#e20074', transform: 'scale(1)', offset: 0}),
      style({transform: 'scale(1.5)', offset: 0.5}),
      style({background: '#757575', transform: 'scale(2)', offset: 1.0})
    ]))),
    transition('large => small', animate('250ms cubic-bezier(.13,.85,.86,.14)')),
  ]);
