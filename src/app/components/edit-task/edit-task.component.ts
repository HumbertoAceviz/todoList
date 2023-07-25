import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskDataService } from 'src/app/services/task-data.service';
import { TodolistService } from 'src/app/services/todolist.service';
import { taskmodel } from 'src/app/shared/taskmodel';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {


 task : taskmodel =  new taskmodel("", false, "");
  taskDataService: any;

 constructor(
  private todolistService:TodolistService,
   private router:Router,
   private task_data:TaskDataService){

 }

 aggTask(){
  this.todolistService.addTask(this.task).subscribe(
    (response) => {
      console.log('Tarea agregada correctamente. ID:', response.taskId);
      this.task_data.loadTasks();

    },
    (error) => {
      console.error('Error al agregar la tarea:', error);
    }
  );
  this.router.navigate(['/tasks']);

 }

}
