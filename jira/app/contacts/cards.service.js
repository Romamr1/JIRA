System.register(["angular2/core", "./mock-cards"], function(exports_1, context_1) {
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
    var core_1, mock_cards_1;
    var CardService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_cards_1_1) {
                mock_cards_1 = mock_cards_1_1;
            }],
        execute: function() {
            CardService = (function () {
                function CardService() {
                }
                CardService.prototype.getCard = function () {
                    return mock_cards_1.CARDS;
                };
                CardService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CardService);
                return CardService;
            }());
            exports_1("CardService", CardService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NhcmRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFBQTtnQkFJQSxDQUFDO2dCQUhBLDZCQUFPLEdBQVA7b0JBQ0MsTUFBTSxDQUFDLGtCQUFLLENBQUM7Z0JBQ2QsQ0FBQztnQkFKRjtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkFLYixrQkFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQscUNBSUMsQ0FBQSIsImZpbGUiOiJjb250YWN0cy9jYXJkcy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0NBUkRTfSBmcm9tIFwiLi9tb2NrLWNhcmRzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYXJkU2VydmljZSB7XHRcclxuXHRnZXRDYXJkKCkge1xyXG5cdFx0cmV0dXJuIENBUkRTO1xyXG5cdH1cdFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
