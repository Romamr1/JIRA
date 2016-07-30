System.register(["angular2/core", "./mock-data"], function(exports_1, context_1) {
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
    var core_1, mock_data_1;
    var JiraService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_data_1_1) {
                mock_data_1 = mock_data_1_1;
            }],
        execute: function() {
            JiraService = (function () {
                function JiraService() {
                }
                JiraService.prototype.getLists = function () {
                    return mock_data_1.LISTS;
                };
                JiraService.prototype.addList = function (value) {
                    mock_data_1.LISTS.push({
                        id: mock_data_1.LISTS[mock_data_1.LISTS.length - 1].id + 1,
                        listName: value
                    });
                };
                JiraService.prototype.removeList = function (listId) {
                    for (var i = 0; i < mock_data_1.LISTS.length; i++) {
                        if (mock_data_1.LISTS[i].id === listId) {
                            console.log(i);
                            mock_data_1.LISTS.splice(i, 1);
                        }
                    }
                };
                JiraService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], JiraService);
                return JiraService;
            }());
            exports_1("JiraService", JiraService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2ppcmEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUFBO2dCQXNCQSxDQUFDO2dCQXJCQSw4QkFBUSxHQUFSO29CQUNDLE1BQU0sQ0FBQyxpQkFBSyxDQUFDO2dCQUNkLENBQUM7Z0JBRUQsNkJBQU8sR0FBUCxVQUFRLEtBQUs7b0JBQ1osaUJBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ1gsRUFBRSxFQUFFLGlCQUFLLENBQUMsaUJBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7d0JBQ2xDLFFBQVEsRUFBRSxLQUFLO3FCQUNkLENBQUMsQ0FBQTtnQkFDSCxDQUFDO2dCQUVELGdDQUFVLEdBQVYsVUFBVyxNQUFNO29CQUNoQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLGlCQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBRW5DLEVBQUUsQ0FBQyxDQUFDLGlCQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2YsaUJBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixDQUFDO29CQUNGLENBQUM7Z0JBQ0YsQ0FBQztnQkFyQkY7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBdUJiLGtCQUFDO1lBQUQsQ0F0QkEsQUFzQkMsSUFBQTtZQXRCRCxxQ0FzQkMsQ0FBQSIsImZpbGUiOiJjb250YWN0cy9qaXJhLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7TElTVFN9IGZyb20gXCIuL21vY2stZGF0YVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSmlyYVNlcnZpY2Uge1xyXG5cdGdldExpc3RzKCkge1xyXG5cdFx0cmV0dXJuIExJU1RTO1xyXG5cdH1cclxuXHRcclxuXHRhZGRMaXN0KHZhbHVlKSB7XHRcdFxyXG5cdFx0TElTVFMucHVzaCh7XHJcblx0XHRpZDogTElTVFNbTElTVFMubGVuZ3RoIC0gMV0uaWQgKyAxLFxyXG5cdFx0bGlzdE5hbWU6IHZhbHVlXHRcdFxyXG5cdFx0fSlcclxuXHR9XHJcblx0XHJcblx0cmVtb3ZlTGlzdChsaXN0SWQpIHtcclxuXHRcdGZvciAodmFyIGk9MDsgaTxMSVNUUy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKExJU1RTW2ldLmlkID09PSBsaXN0SWQpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhpKTtcclxuXHRcdFx0XHRMSVNUUy5zcGxpY2UoaSwxKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
