import { Injectable, signal } from '@angular/core';
import { TaskItem } from '../models/task-item.model';

@Injectable({
  providedIn: 'root',
})
export class Task {
  tasks = signal<TaskItem[]>([]);

  addTAsk(task: string, status: string) {
    this.tasks
  }

}
