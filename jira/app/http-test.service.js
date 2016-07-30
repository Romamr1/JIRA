System.register(["angular2/core", "angular2/http", 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1, http_2;
    var HTTPTestService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            HTTPTestService = (function () {
                function HTTPTestService(_http) {
                    this._http = _http;
                }
                HTTPTestService.prototype.getCurrentTime = function () {
                    return this._http.get('http://date.jsontest.com')
                        .map(function (res) { return res.json(); });
                };
                HTTPTestService.prototype.postJSON = function () {
                    var json = JSON.stringify({ val1: "test", val2: 3 });
                    var params = "json=" + json;
                    var headers = new http_2.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this._http.post('http://validate.jsontest.com', params, {
                        headers: headers
                    })
                        .map(function (res) { return res.json(); });
                };
                HTTPTestService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HTTPTestService);
                return HTTPTestService;
            }());
            exports_1("HTTPTestService", HTTPTestService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAtdGVzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFDQyx5QkFBcUIsS0FBVztvQkFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO2dCQUFHLENBQUM7Z0JBRXBDLHdDQUFjLEdBQWQ7b0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDO3lCQUMvQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBRTFCLENBQUM7Z0JBR0Qsa0NBQVEsR0FBUjtvQkFDQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztvQkFDbkQsSUFBSSxNQUFNLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDNUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFFNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztvQkFDcEUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLDhCQUE4QixFQUFDLE1BQU0sRUFBRTt3QkFDN0QsT0FBTyxFQUFFLE9BQU87cUJBQ2hCLENBQUM7eUJBQ0QsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQXJCRjtvQkFBQyxpQkFBVSxFQUFFOzttQ0FBQTtnQkF1QmIsc0JBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBO1lBdEJELDZDQXNCQyxDQUFBIiwiZmlsZSI6Imh0dHAtdGVzdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0IHtIZWFkZXJzfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSFRUUFRlc3RTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cclxuXHRcclxuXHRnZXRDdXJyZW50VGltZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2RhdGUuanNvbnRlc3QuY29tJylcclxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcblx0XHRcdFxyXG5cdH1cclxuXHRcclxuXHRcclxuXHRwb3N0SlNPTiAoKSB7XHJcblx0XHR2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KHt2YWwxOiBcInRlc3RcIiwgdmFsMjogM30pO1xyXG5cdFx0dmFyIHBhcmFtcyA9IFwianNvbj1cIiArIGpzb247XHJcblx0XHR2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblx0XHRcclxuXHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vdmFsaWRhdGUuanNvbnRlc3QuY29tJyxwYXJhbXMsIHtcclxuXHRcdFx0aGVhZGVyczogaGVhZGVyc1xyXG5cdFx0fSlcclxuXHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG5cdH1cclxuXHRcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
