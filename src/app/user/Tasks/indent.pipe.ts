import { Pipe, PipeTransform } from '@angular/core'

@Pipe ({
	name: 'Indent'
})

export class IndentPipe implements PipeTransform {
	transform(tasks) {
		function Indent (){
			var resTasks = tasks;
			var resIndent = 0;
			for (var i = 0; i < resTasks.length; i++){
				if (i > 0){
					 resIndent += resTasks[i-1].estimate;
					resTasks[i].indent = resIndent;
				}
			}
			return resTasks;
		}
		return	Indent ();
	}
}
