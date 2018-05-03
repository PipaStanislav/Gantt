import { Component, 
         Input, 
         ViewChild, 
         AfterViewInit, 
         ElementRef 
       } from '@angular/core';

import { GanttComponent } from '../Gantt/gantt.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
  
})
export class TasksComponent {
	@Input () task;

	@ViewChild('sizeAll') sizeAll: ElementRef;
	@ViewChild('sizeProgress') sizeProgress: ElementRef;
	@ViewChild('sizeProgressBar') sizeProgressBar: ElementRef;
	@ViewChild('paddPrior') paddPrior: ElementRef;

	array = [];
 	ngAfterViewInit() {
 		var sizeAll = this.sizeAll.nativeElement.offsetWidth;
 		var resize = sizeAll / 31 / 8;

 		var sizeProgressBar = this.sizeProgressBar.nativeElement;
 		this.sizeProgressBar.nativeElement.style.width = this.task.estimate * resize + 'px';

    var sizeProgress = this.sizeProgress.nativeElement;
    this.sizeProgress.nativeElement.style.width = this.task.estimate * resize + 'px';

    var paddPrior = this.paddPrior.nativeElement
    this.paddPrior.nativeElement.style.paddingLeft = this.task.indent * resize + 'px';
  }
}

