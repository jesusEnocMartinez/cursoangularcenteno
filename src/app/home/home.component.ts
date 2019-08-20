import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
Animations:[
  trigger('goals',)[
    transition('* =>') [
      query(':enter', style({ opacity:0}),{option: true}),
    ])
  ])
]
))





})
export class HomeComponent implements OnInit {
  itemCount: number;
  btnText: string ='Add an item';
  goalText: string = 'My first life goal';
  goals = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }
  addTem(){
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }

}
