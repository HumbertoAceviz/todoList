import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { PendientTaskComponent } from './components/pendient-task/pendient-task.component';

const routes: Routes = [
  {path: 'tasks', component: TasksComponent},
  {path: 'tasks/update', component: EditTaskComponent },
  {path: 'tasks/pendient', component: PendientTaskComponent},
  { path: '**', redirectTo: '/tasks', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
