import { Component, signal } from '@angular/core';
import { TaskForm } from './components/task-form/task-form';


@Component({
  selector: 'app-root',
  imports: [TaskForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-manager');
}
