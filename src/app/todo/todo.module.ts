import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';

import { HttpClientModule } from '@angular/common/http';
import { TodoCardComponent } from './components/todo-card/todo-card.component';

@NgModule({
  declarations: [TodoComponent, TodoCardComponent],
  imports: [CommonModule, TodoRoutingModule, HttpClientModule],
})
export class TodoModule {}
