import {Injectable} from "angular2/core";
import {CARDS} from "./mock-cards";

@Injectable()
export class CardService {	
	getCard() {
		return CARDS;
	}	
}