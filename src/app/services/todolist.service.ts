import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { taskmodel } from '../shared/taskmodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<taskmodel[]>(this.BASE_URL + '/tasks');
  }

  getTask(id: string) {
    return this.http.get<taskmodel[]>(`${this.BASE_URL}/tasks/${id}`);
  }

  addTask(task: taskmodel): Observable<any>{
    return this.http.post<any>(`${this.BASE_URL}/tasks/add`, task);
  }

  upadteTask(task: taskmodel) {
    return this.http.put<string>(
      `${this.BASE_URL}/tasks/update/${task.id}`, task
    );
  }

  deleteTask(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/tasks/delete/${id}`);
  }
}
