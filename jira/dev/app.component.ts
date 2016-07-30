import {Component} from 'angular2/core';
import {JiraComponent} from './contacts/jira.component';


@Component({
    selector: 'my-app',
    template: `
	<header>
		<div class='row'>
			<h1 class='app-name left'>JIRA</h1>
		</div>
	</header>
	
	<jira-app></jira-app>
		
    `,	
	directives: [JiraComponent],	
})

export class AppComponent {
	
}