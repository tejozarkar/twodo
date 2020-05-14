import { Todos } from './models/todos.model';
import { Todo } from './models/todo.model';
import { TodoService } from './services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  public todos: Todo[];

  constructor(private readonly todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService
      .getTodos()
      .subscribe((data: Todos) => (this.todos = data.todos));
  }
}
