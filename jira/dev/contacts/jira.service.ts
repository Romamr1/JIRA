import {Injectable} from "angular2/core";
import {LISTS} from "./mock-data";

@Injectable()
export class JiraService {
	getLists() {
		return LISTS;
	}
	
	addList(value) {		
		LISTS.push({
		id: LISTS[LISTS.length - 1].id + 1,
		listName: value		
		})
	}
	
	removeList(listId) {
		for (var i=0; i<LISTS.length; i++) {
			
			if (LISTS[i].id === listId) {
				console.log(i);
				LISTS.splice(i,1);
			}
		}
	}
	
}