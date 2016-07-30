System.register(['angular2/core', './contacts/jira.component'], function(exports_1, context_1) {
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
    var core_1, jira_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (jira_component_1_1) {
                jira_component_1 = jira_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t<header>\n\t\t<div class='row'>\n\t\t\t<h1 class='app-name left'>JIRA</h1>\n\t\t</div>\n\t</header>\n\t\n\t<jira-app></jira-app>\n\t\t\n    ",
                        directives: [jira_component_1.JiraComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFqQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLGtKQVNUO3dCQUNKLFVBQVUsRUFBRSxDQUFDLDhCQUFhLENBQUM7cUJBQzNCLENBQUM7O2dDQUFBO2dCQUlGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7SmlyYUNvbXBvbmVudH0gZnJvbSAnLi9jb250YWN0cy9qaXJhLmNvbXBvbmVudCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG5cdDxoZWFkZXI+XHJcblx0XHQ8ZGl2IGNsYXNzPSdyb3cnPlxyXG5cdFx0XHQ8aDEgY2xhc3M9J2FwcC1uYW1lIGxlZnQnPkpJUkE8L2gxPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9oZWFkZXI+XHJcblx0XHJcblx0PGppcmEtYXBwPjwvamlyYS1hcHA+XHJcblx0XHRcclxuICAgIGAsXHRcclxuXHRkaXJlY3RpdmVzOiBbSmlyYUNvbXBvbmVudF0sXHRcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5cdFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
