
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()

export class TasksService {

	constructor (private http: Http) {}

	configUrl = './assets/tasks.json';

	getTasks () {
		return this.http.get(this.configUrl)
		.map (function (response){
			return response.json();
		})
	}
}
