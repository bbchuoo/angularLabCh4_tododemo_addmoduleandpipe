import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDonePipe } from './todo-done.pipe';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { AddFormComponent } from './add-form/add-form.component';
import { TodoListService } from './todo-list.service';
import { FormsModule } from '@angular/forms';
import { TodoAppComponent } from './todo-app/todo-app.component';

@NgModule({
  declarations: [
    AddFormComponent,
    TodoItemsComponent,
    TodoDonePipe,
    TodoAppComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [TodoListService],
  exports: [
    TodoAppComponent,
  ]
})
export class TodoAppModule { }
