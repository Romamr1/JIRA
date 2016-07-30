System.register(['angular2/core', './cards.service', "./lists"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cards_service_1, lists_1;
    var CardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cards_service_1_1) {
                cards_service_1 = cards_service_1_1;
            },
            function (lists_1_1) {
                lists_1 = lists_1_1;
            }],
        execute: function() {
            CardComponent = (function () {
                function CardComponent(_cardService) {
                    this._cardService = _cardService;
                }
                CardComponent.prototype.getCards = function () {
                    this.cards = this._cardService.getCard();
                };
                CardComponent.prototype.ngOnInit = function () {
                    this.getCards();
                    console.log(activeList);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', lists_1.Lists)
                ], CardComponent.prototype, "activeList", void 0);
                CardComponent = __decorate([
                    core_1.Component({
                        selector: 'card-app',
                        template: "\n\t<div class = 'card' *ngFor = \"#card of cards\">\n\t\t{{card.description}}\n\t</div>\n    ",
                        providers: [cards_service_1.CardService],
                    }), 
                    __metadata('design:paramtypes', [cards_service_1.CardService])
                ], CardComponent);
                return CardComponent;
            }());
            exports_1("CardComponent", CardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUtDLHVCQUFvQixZQUF5QjtvQkFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQUcsQ0FBQztnQkFFakQsZ0NBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBRTFDLENBQUM7Z0JBQ0QsZ0NBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBYkQ7b0JBQUMsWUFBSyxFQUFFOztpRUFBQTtnQkFYVDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUUsZ0dBSVQ7d0JBQ0osU0FBUyxFQUFFLENBQUMsMkJBQVcsQ0FBQztxQkFDeEIsQ0FBQzs7aUNBQUE7Z0JBaUJGLG9CQUFDO1lBQUQsQ0FmQSxBQWVDLElBQUE7WUFmRCx5Q0FlQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3RzL2NhcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtDYXJkU2VydmljZX0gZnJvbSAnLi9jYXJkcy5zZXJ2aWNlJztcclxuaW1wb3J0IHtDYXJkfSBmcm9tIFwiLi9jYXJkc1wiO1xyXG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TGlzdHN9IGZyb20gXCIuL2xpc3RzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY2FyZC1hcHAnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuXHQ8ZGl2IGNsYXNzID0gJ2NhcmQnICpuZ0ZvciA9IFwiI2NhcmQgb2YgY2FyZHNcIj5cclxuXHRcdHt7Y2FyZC5kZXNjcmlwdGlvbn19XHJcblx0PC9kaXY+XHJcbiAgICBgLFx0XHJcblx0cHJvdmlkZXJzOiBbQ2FyZFNlcnZpY2VdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpIGFjdGl2ZUxpc3Q6IExpc3RzO1xyXG5cclxuXHRcclxuXHRjYXJkczogQ2FyZFtdO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2NhcmRTZXJ2aWNlOiBDYXJkU2VydmljZSkge31cclxuXHRcdFxyXG5cdGdldENhcmRzKCkge1xyXG5cdFx0dGhpcy5jYXJkcyA9IHRoaXMuX2NhcmRTZXJ2aWNlLmdldENhcmQoKTtcclxuXHRcdFxyXG5cdH1cclxuXHRuZ09uSW5pdCAoKSB7XHRcdFxyXG5cdFx0dGhpcy5nZXRDYXJkcygpO1xyXG5cdFx0Y29uc29sZS5sb2coYWN0aXZlTGlzdCk7XHJcblx0fVx0XHRcdFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
