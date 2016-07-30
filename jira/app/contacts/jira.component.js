System.register(['angular2/core', './jira.service', './card.component'], function(exports_1, context_1) {
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
    var core_1, jira_service_1, card_component_1;
    var JiraComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (jira_service_1_1) {
                jira_service_1 = jira_service_1_1;
            },
            function (card_component_1_1) {
                card_component_1 = card_component_1_1;
            }],
        execute: function() {
            JiraComponent = (function () {
                function JiraComponent(_jiraService) {
                    this._jiraService = _jiraService;
                }
                JiraComponent.prototype.getLists = function () {
                    this.lists = this._jiraService.getLists();
                };
                JiraComponent.prototype.removeList = function (removeId) {
                    this._jiraService.removeList(removeId);
                    console.log(removeId);
                };
                JiraComponent.prototype.addList = function (value) {
                    this._jiraService.addList(value);
                    this.listName = '';
                };
                JiraComponent.prototype.ngOnInit = function () {
                    this.getLists();
                };
                JiraComponent = __decorate([
                    core_1.Component({
                        selector: 'jira-app',
                        template: "\n\t<h1>Hello</h1>\n\t<section id = \"lists-container\" class = \"lists-container\">\n\t\t<div class = \"rov\">\n\t\t\t<section *ngFor = \"#list of lists\" \n\t\t\t\tclass = \"list list-inline\">\n\t\t\t\t\n\t\t\t\t<h1>{{list.listName}}</h1>\t\n\t\t\t\t\n\t\t\t\t<a (click) = \"removeList(list.id)\">\n\t\t\t\t\t<div class = \"remove remove-list\"></div>\n\t\t\t\t</a>\n\t\t\t\t<card-app [activeList]=\"lists\"></card-app>\t\t\n\t\t\t</section>\t\t\n\t\t\t\n\t\t\t<section class = \"list new-list list-inline\">\n\t\t\t\t<form (ngSubmit) = \"addList(listName)\">\n\t\t\t\t\t<input type = \"text\" id = \"list-name\" [(ngModel)]=\"listName\">\t\t\t\t\t\n\t\t\t\t</form>\n\t\t\t</section>\n\t\t\t\n\t\t</div>\t\n\t\t\t\t\n\t</section>\t\n    ",
                        providers: [jira_service_1.JiraService],
                        directives: [card_component_1.CardComponent],
                    }), 
                    __metadata('design:paramtypes', [jira_service_1.JiraService])
                ], JiraComponent);
                return JiraComponent;
            }());
            exports_1("JiraComponent", JiraComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2ppcmEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0NBO2dCQU1DLHVCQUFvQixZQUF5QjtvQkFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQUcsQ0FBQztnQkFFakQsZ0NBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzNDLENBQUM7Z0JBRUQsa0NBQVUsR0FBVixVQUFXLFFBQVE7b0JBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2QixDQUFDO2dCQUVELCtCQUFPLEdBQVAsVUFBUSxLQUFLO29CQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQztnQkFFRCxnQ0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDakIsQ0FBQztnQkF2REY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsUUFBUSxFQUFFLHN1QkF3QlQ7d0JBQ0osU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQzt3QkFDeEIsVUFBVSxFQUFFLENBQUMsOEJBQWEsQ0FBQztxQkFDM0IsQ0FBQzs7aUNBQUE7Z0JBMkJGLG9CQUFDO1lBQUQsQ0F6QkEsQUF5QkMsSUFBQTtZQXpCRCx5Q0F5QkMsQ0FBQSIsImZpbGUiOiJjb250YWN0cy9qaXJhLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtKaXJhU2VydmljZX0gZnJvbSAnLi9qaXJhLnNlcnZpY2UnO1xyXG5pbXBvcnQge0xpc3RzfSBmcm9tIFwiLi9saXN0c1wiO1xyXG5pbXBvcnQge0xJU1RTfSBmcm9tIFwiLi9tb2NrLWRhdGFcIjtcclxuaW1wb3J0IHtPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0NhcmRDb21wb25lbnR9IGZyb20gJy4vY2FyZC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ppcmEtYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcblx0PGgxPkhlbGxvPC9oMT5cclxuXHQ8c2VjdGlvbiBpZCA9IFwibGlzdHMtY29udGFpbmVyXCIgY2xhc3MgPSBcImxpc3RzLWNvbnRhaW5lclwiPlxyXG5cdFx0PGRpdiBjbGFzcyA9IFwicm92XCI+XHJcblx0XHRcdDxzZWN0aW9uICpuZ0ZvciA9IFwiI2xpc3Qgb2YgbGlzdHNcIiBcclxuXHRcdFx0XHRjbGFzcyA9IFwibGlzdCBsaXN0LWlubGluZVwiPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxoMT57e2xpc3QubGlzdE5hbWV9fTwvaDE+XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8YSAoY2xpY2spID0gXCJyZW1vdmVMaXN0KGxpc3QuaWQpXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzID0gXCJyZW1vdmUgcmVtb3ZlLWxpc3RcIj48L2Rpdj5cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PGNhcmQtYXBwIFthY3RpdmVMaXN0XT1cImxpc3RzXCI+PC9jYXJkLWFwcD5cdFx0XHJcblx0XHRcdDwvc2VjdGlvbj5cdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQ8c2VjdGlvbiBjbGFzcyA9IFwibGlzdCBuZXctbGlzdCBsaXN0LWlubGluZVwiPlxyXG5cdFx0XHRcdDxmb3JtIChuZ1N1Ym1pdCkgPSBcImFkZExpc3QobGlzdE5hbWUpXCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGlkID0gXCJsaXN0LW5hbWVcIiBbKG5nTW9kZWwpXT1cImxpc3ROYW1lXCI+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHRcclxuXHRcdDwvZGl2Plx0XHJcblx0XHRcdFx0XHJcblx0PC9zZWN0aW9uPlx0XHJcbiAgICBgLFx0XHJcblx0cHJvdmlkZXJzOiBbSmlyYVNlcnZpY2VdLFxyXG5cdGRpcmVjdGl2ZXM6IFtDYXJkQ29tcG9uZW50XSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBKaXJhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRcclxuXHRhY3RpdmVMaXN0OiBMaXN0cztcclxuXHRwdWJsaWMgbGlzdE5hbWU7XHJcblxyXG5cdGxpc3RzOiBMaXN0c1tdO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2ppcmFTZXJ2aWNlOiBKaXJhU2VydmljZSkge31cdFxyXG5cdFxyXG5cdGdldExpc3RzICgpIHtcclxuXHRcdHRoaXMubGlzdHMgPSB0aGlzLl9qaXJhU2VydmljZS5nZXRMaXN0cygpO1x0XHRcclxuXHR9XHRcclxuXHRcclxuXHRyZW1vdmVMaXN0KHJlbW92ZUlkKSB7XHJcblx0XHR0aGlzLl9qaXJhU2VydmljZS5yZW1vdmVMaXN0KHJlbW92ZUlkKTtcclxuXHRcdGNvbnNvbGUubG9nKHJlbW92ZUlkKTtcclxuXHR9XHJcblx0XHJcblx0YWRkTGlzdCh2YWx1ZSkge1xyXG5cdFx0dGhpcy5famlyYVNlcnZpY2UuYWRkTGlzdCh2YWx1ZSk7XHJcblx0XHR0aGlzLmxpc3ROYW1lID0gJyc7XHJcblx0fVxyXG5cdFxyXG5cdG5nT25Jbml0ICgpIHtcdFx0XHJcblx0XHR0aGlzLmdldExpc3RzKCk7XHRcdFxyXG5cdH1cdFx0XHRcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
