import { Todos } from './../models/todos.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private readonly http: HttpClient) {}

  public getTodos(): Observable<Todos> {
    return this.http.get<Todos>('http://localhost:3000/todo');
  }
}
