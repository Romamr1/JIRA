import {Component, Input} from 'angular2/core';
import {CardService} from './cards.service';
import {Card} from "./cards";
import {OnInit} from 'angular2/core';
import {Lists} from "./lists";

@Component({
    selector: 'card-app',
    template: `
	<div class = 'card' *ngFor = "#card of cards">
		{{card.description}}
	</div>
    `,	
	providers: [CardService],
})

export class CardComponent implements OnInit {
	@Input() activeList: Lists;

	
	cards: Card[];
	constructor(private _cardService: CardService) {}
		
	getCards() {
		this.cards = this._cardService.getCard();
		
	}
	ngOnInit () {		
		this.getCards();
		console.log(activeList);
	}			
}