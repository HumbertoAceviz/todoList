import { Component, OnInit } from '@angular/core';
import { TodolistService } from 'src/app/services/todolist.service';
import { taskmodel } from 'src/app/shared/taskmodel';
import { formatDate } from '@angular/common';
import { TaskDataService } from 'src/app/services/task-data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: taskmodel[] = [];

  constructor(
    private TodoList: TodolistService,
    private task_data: TaskDataService
  ) {}

  ngOnInit(): void {
    this.task_data.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(id: string | undefined) {
    if (id !== undefined) {
      this.TodoList.deleteTask(id.toString()).subscribe((data) => {
        console.log(data);
      });
      console.log(this.tasks);
    }
    this.task_data.loadTasks();
  }

  updateStatusTask(task: taskmodel) {
    const formattedFecha = formatDate(
      task.fecha,
      'yyyy-MM-dd HH:mm:ss',
      'en-US'
    );

    const updatedTask: taskmodel = {
      ...task,
      fecha: formattedFecha,
    };

    this.TodoList.upadteTask(updatedTask).subscribe(
      (response) => {
        console.log('Estado de la tarea actualizado correctamente');
      },
      (error) => {
        console.error('Error al actualizar el estado de la tarea:', error);
      }
    );

    this.task_data.loadTasks();

    console.log(task);
  }

  hasTaskExpired(task: taskmodel): boolean {
    const currentDate = new Date();
    const taskDate = new Date(task.fecha);

    return currentDate > taskDate;
  }
}
