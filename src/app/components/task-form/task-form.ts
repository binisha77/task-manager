import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import { Task as TaskService } from '../../services/task';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css'],
})
export class TaskForm {
 taskService = inject(TaskService)


  taskForm = new FormGroup({
    task: new FormControl('',{
        nonNullable :true
    }),
    status: new FormControl('Todo',{
          nonNullable :true
    })
   
      
    })
  onSubmit() {
    const rawValue = this.taskForm.getRawValue();
    this.taskService.addTask(rawValue.task, rawValue.status);

    this.taskForm.reset();
  }
}
