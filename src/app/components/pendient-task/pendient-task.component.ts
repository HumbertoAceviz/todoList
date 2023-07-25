import { Component, OnInit } from '@angular/core';
import { TaskDataService } from 'src/app/services/task-data.service';
import { taskmodel } from 'src/app/shared/taskmodel';

@Component({
  selector: 'app-pendient-task',
  templateUrl: './pendient-task.component.html',
  styleUrls: ['./pendient-task.component.css'],
})
export class PendientTaskComponent implements OnInit {
  pendingTasks: taskmodel[] = [];

  constructor(private task_data: TaskDataService) {}

  ngOnInit(): void {
    this.task_data.getPendingTasks().subscribe((pendingTasks) => {
      this.pendingTasks = pendingTasks;
    });
  }
}
