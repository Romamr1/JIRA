System.register(['angular2/core', './http-test.service'], function(exports_1, context_1) {
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
    var core_1, http_test_service_1;
    var HTTPTestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_test_service_1_1) {
                http_test_service_1 = http_test_service_1_1;
            }],
        execute: function() {
            HTTPTestComponent = (function () {
                function HTTPTestComponent(_httpServise) {
                    this._httpServise = _httpServise;
                }
                HTTPTestComponent.prototype.onTestGet = function () {
                    var _this = this;
                    this._httpServise.getCurrentTime()
                        .subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log('finished'); });
                };
                HTTPTestComponent.prototype.onTestPost = function () {
                    var _this = this;
                    this._httpServise.postJSON()
                        .subscribe(function (data) { return _this.postData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log('finished'); });
                };
                HTTPTestComponent = __decorate([
                    core_1.Component({
                        selector: 'http-test',
                        template: "\n\t\t<button (click) = \"onTestGet()\">Test GET Request</button>\n\t\t<p>Output: {{getData}}</p>\n\t\t\n\t\t<button (click) = \"onTestPost()\">Test POST Request</button>\n\t\t<p>Output: {{postData}}</p>\n    ",
                        providers: [http_test_service_1.HTTPTestService],
                    }), 
                    __metadata('design:paramtypes', [http_test_service_1.HTTPTestService])
                ], HTTPTestComponent);
                return HTTPTestComponent;
            }());
            exports_1("HTTPTestComponent", HTTPTestComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAtdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFJQywyQkFBcUIsWUFBNkI7b0JBQTdCLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtnQkFBRyxDQUFDO2dCQUV0RCxxQ0FBUyxHQUFUO29CQUFBLGlCQU9DO29CQU5BLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFO3lCQUNoQyxTQUFTLENBQ1QsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQW5DLENBQW1DLEVBQzNDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFaLENBQVksRUFDckIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQXZCLENBQXVCLENBQzdCLENBQUM7Z0JBQ0osQ0FBQztnQkFFRCxzQ0FBVSxHQUFWO29CQUFBLGlCQU9DO29CQU5BLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO3lCQUMxQixTQUFTLENBQ1QsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQXBDLENBQW9DLEVBQzVDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFaLENBQVksRUFDckIsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQXZCLENBQXVCLENBQzdCLENBQUM7Z0JBQ0osQ0FBQztnQkFsQ0Y7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLG1OQU1UO3dCQUNKLFNBQVMsRUFBRSxDQUFDLG1DQUFlLENBQUM7cUJBQzVCLENBQUM7O3FDQUFBO2dCQXlCRix3QkFBQztZQUFELENBdkJBLEFBdUJDLElBQUE7WUF2QkQsaURBdUJDLENBQUEiLCJmaWxlIjoiaHR0cC10ZXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtIVFRQVGVzdFNlcnZpY2V9IGZyb20gJy4vaHR0cC10ZXN0LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2h0dHAtdGVzdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG5cdFx0PGJ1dHRvbiAoY2xpY2spID0gXCJvblRlc3RHZXQoKVwiPlRlc3QgR0VUIFJlcXVlc3Q8L2J1dHRvbj5cclxuXHRcdDxwPk91dHB1dDoge3tnZXREYXRhfX08L3A+XHJcblx0XHRcclxuXHRcdDxidXR0b24gKGNsaWNrKSA9IFwib25UZXN0UG9zdCgpXCI+VGVzdCBQT1NUIFJlcXVlc3Q8L2J1dHRvbj5cclxuXHRcdDxwPk91dHB1dDoge3twb3N0RGF0YX19PC9wPlxyXG4gICAgYCxcclxuXHRwcm92aWRlcnM6IFtIVFRQVGVzdFNlcnZpY2VdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhUVFBUZXN0Q29tcG9uZW50IHtcclxuXHRnZXREYXRhOiBzdHJpbmc7XHJcblx0cG9zdERhdGE6IHN0cmluZztcclxuXHRcclxuXHRjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cFNlcnZpc2U6IEhUVFBUZXN0U2VydmljZSkge31cclxuXHRcclxuXHRvblRlc3RHZXQoKSB7XHJcblx0XHR0aGlzLl9odHRwU2VydmlzZS5nZXRDdXJyZW50VGltZSgpXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0ZGF0YSA9PiB0aGlzLmdldERhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuXHRcdFx0XHRlcnJvciA9PiBhbGVydChlcnJvciksXHJcblx0XHRcdFx0KCkgPT4gY29uc29sZS5sb2coJ2ZpbmlzaGVkJylcclxuXHRcdFx0KTtcclxuXHR9XHJcblx0XHJcblx0b25UZXN0UG9zdCgpIHtcclxuXHRcdHRoaXMuX2h0dHBTZXJ2aXNlLnBvc3RKU09OKClcclxuXHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHRkYXRhID0+IHRoaXMucG9zdERhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuXHRcdFx0XHRlcnJvciA9PiBhbGVydChlcnJvciksXHJcblx0XHRcdFx0KCkgPT4gY29uc29sZS5sb2coJ2ZpbmlzaGVkJylcclxuXHRcdFx0KTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
