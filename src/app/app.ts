import { Component, computed, inject, signal } from '@angular/core';
import { TaskForm } from './components/task-form/task-form';
import { TaskList } from './components/task-list/task-list';
import { Task as TaskService } from './services/task';



@Component({
  selector: 'app-root',
  imports: [TaskForm, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  taskService = inject(TaskService);
 private tasks = this.taskService.tasks; 

  todoItems = computed(() =>{
    const tasks = this.tasks();
    return tasks.filter(x => x.status === 'Todo');
});

inProgressItems = computed(() =>{
    const tasks = this.tasks();
    return tasks.filter(x => x.status === 'In Progress');
});

doneItems = computed(() =>{
    const tasks = this.tasks();
    return tasks.filter(x => x.status === 'Done');
});
  

}
