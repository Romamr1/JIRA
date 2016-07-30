import {Component} from 'angular2/core';
import {HTTPTestService} from './http-test.service';

@Component({
    selector: 'http-test',
    template: `
		<button (click) = "onTestGet()">Test GET Request</button>
		<p>Output: {{getData}}</p>
		
		<button (click) = "onTestPost()">Test POST Request</button>
		<p>Output: {{postData}}</p>
    `,
	providers: [HTTPTestService],
})

export class HTTPTestComponent {
	getData: string;
	postData: string;
	
	constructor (private _httpServise: HTTPTestService) {}
	
	onTestGet() {
		this._httpServise.getCurrentTime()
			.subscribe(
				data => this.getData = JSON.stringify(data),
				error => alert(error),
				() => console.log('finished')
			);
	}
	
	onTestPost() {
		this._httpServise.postJSON()
			.subscribe(
				data => this.postData = JSON.stringify(data),
				error => alert(error),
				() => console.log('finished')
			);
	}
}