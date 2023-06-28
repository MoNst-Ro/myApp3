import { Component } from '@angular/core';
import { User } from './model/user'

@Component({
  selector: 'app-root',
  template: `
  <button class="btn btn-primary" [style.fontSize]="'50px'">
  <i class="fa fa-home">
  Button
  </i>
  </button>
  <li 
    *ngFor="let user of users" 
    [class.male]="user.gender === 'M'"
    [class.female]="user.gender === 'F'"
  >
  {{user.name}}
  </li>
<hr>
  <li 
    *ngFor="let user of users" 
    [ngClass]="{
      'male': user.gender === 'M',
      'female': user.gender === 'F',
      'big': true
    }"
  >
  {{user.name}}
  </li>
  <hr>
  <li 
    *ngFor="let user of users" 
    [style.color]="user.gender === 'M' ? 'blue' : 'purple'"
    [style.background-color]="user.gender === 'F' ? 'pink' : 'red'"
    [style.font-size]="user.gender === 'M' ? '40px' : '50px'"
  >
  {{user.name}}
  </li>
  <hr>
  <li 
    *ngFor="let user of users" 
    [style.color]="user.gender === 'M' ? 'blue' : 'purple'"
    [style.background-color]="user.gender === 'F' ? 'pink' : 'red'"
    [style.font-size.px]="user.age"
  >
  {{user.name}}
  </li>
  `,
  styles: [`
    .male { background-color: blue }
    .female { background-color: pink }
    .big { font-size: 30px }
  `]
})
export class AppComponent {
  
  users: User[] = [
    {id: 1, name:'Fabio', age: 30, gender:'M'},
    {id: 2, name:'Lucia', age: 20, gender:'F'},
    {id: 3, name:'Luca', age: 50, gender:'M'},
    {id: 4, name:'Anna', age: 100 ,gender:'F'}
  ]
}
