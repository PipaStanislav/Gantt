import { Component } from '@angular/core';
import { ViewChild, ViewChildren, QueryList, AfterViewInit, ElementRef } from '@angular/core';

import { TasksService } from './config/tasks.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [TasksService]  
})
export class AppComponent {
	tasks = [];
	month = [];

	constructor (private tasksService: TasksService) {}

	ngOnInit () {
		this.tasksService.getTasks().subscribe(tasks => (
			this.tasks = tasks.tasks,
			this.month = tasks.month
		))
	}
}
