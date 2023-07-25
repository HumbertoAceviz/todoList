 import { Injectable } from '@angular/core';

import { taskmodel } from '../shared/taskmodel';
import { TodolistService } from './todolist.service';
import { BehaviorSubject, Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  private tasksSubject = new BehaviorSubject<taskmodel[]>([]);
  tasks$: Observable<taskmodel[]> = this.tasksSubject.asObservable();

  constructor(private TodoList: TodolistService) {
    this.loadTasks();
  }

  loadTasks() {
    this.TodoList.getTasks().subscribe((tasks) => {
      this.tasksSubject.next(tasks);
    });
  }

  getPendingTasks(): Observable<taskmodel[]> {
    return this.tasks$.pipe(

      map((tasks) => tasks.filter((task) => !task.done))
    );
  }




 
}




