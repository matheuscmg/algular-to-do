import { Component, OnInit,NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  public items = ['item 1', 'item 2', 'item 3', 'item 4'];
  public tarefa = "";

  constructor() { }

  ngOnInit(): void {
  }

}
