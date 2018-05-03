import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { GanttComponent } from './user/Gantt/gantt.component';
import { TasksComponent } from './user/Tasks/tasks.component';
import { SortPipe } from './user/Tasks/sort.pipe';
import { IndentPipe } from './user/Tasks/indent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GanttComponent,
    TasksComponent,
    SortPipe,
    IndentPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
