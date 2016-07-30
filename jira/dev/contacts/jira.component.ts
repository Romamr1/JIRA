import {Component} from 'angular2/core';
import {JiraService} from './jira.service';
import {Lists} from "./lists";
import {LISTS} from "./mock-data";
import {OnInit} from 'angular2/core';
import {CardComponent} from './card.component';

@Component({
    selector: 'jira-app',
    template: `
	<h1>Hello</h1>
	<section id = "lists-container" class = "lists-container">
		<div class = "rov">
			<section *ngFor = "#list of lists" 
				class = "list list-inline">
				
				<h1>{{list.listName}}</h1>	
				
				<a (click) = "removeList(list.id)">
					<div class = "remove remove-list"></div>
				</a>
				<card-app [activeList]="lists"></card-app>		
			</section>		
			
			<section class = "list new-list list-inline">
				<form (ngSubmit) = "addList(listName)">
					<input type = "text" id = "list-name" [(ngModel)]="listName">					
				</form>
			</section>
			
		</div>	
				
	</section>	
    `,	
	providers: [JiraService],
	directives: [CardComponent],
})

export class JiraComponent implements OnInit {
	
	activeList: Lists;
	public listName;

	lists: Lists[];
	constructor(private _jiraService: JiraService) {}	
	
	getLists () {
		this.lists = this._jiraService.getLists();		
	}	
	
	removeList(removeId) {
		this._jiraService.removeList(removeId);
		console.log(removeId);
	}
	
	addList(value) {
		this._jiraService.addList(value);
		this.listName = '';
	}
	
	ngOnInit () {		
		this.getLists();		
	}			
}