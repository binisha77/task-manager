import { Component, input ,computed} from '@angular/core';
import { TaskItem } from '../../models/task-item.model';
import { inject } from '@angular/core';
import { Task  } from '../../services/task';

@Component({
  selector: 'app-task-list-item',
  imports: [],
  templateUrl: './task-list-item.html',
  styleUrl: './task-list-item.css',
})
export class TaskListItem {
 taskItem = input.required<TaskItem>();
  statusValues = ['Todo', 'In Progress', 'Done'];
  taskService = inject(Task);



action = computed(() =>{
  const taskItemValue = this.taskItem();

  return this.statusValues.filter(x => taskItemValue.status !== x)
  ;

})
markAs(text:string, updatedStatus: string){
 this.taskService.markAsStatus(text, updatedStatus);
}
}

