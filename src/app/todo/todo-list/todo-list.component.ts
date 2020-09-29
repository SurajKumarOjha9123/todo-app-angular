import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // item = 4
  items_list=['play cricket','code','do project','go to market','sleep'];
  constructor() { }

  ngOnInit(): void {
  }

}
