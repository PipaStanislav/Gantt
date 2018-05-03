import { Pipe, PipeTransform } from '@angular/core'

@Pipe ({
	name: 'Sort'
})

export class SortPipe implements PipeTransform {
	transform(tasks) {
		var sortsArray = tasks.sort(function (a,b){
			if (a.priority > b.priority){
				return 1;
			} if (a.priority < b.priority){
				return -1;
			} if (a.priority === b.priority){
				if (a.id > b.id){
					return 1;
				} if (a.id < b.id){
					return -1;
				} 
			}
		})
		return sortsArray;
	}
}