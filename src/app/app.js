var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var AppComponent = (function () {
    function AppComponent(http) {
        var _this = this;
        this.heroes = [
            { "_id": 11, "name": "Mr. Nice" },
            { "_id": 12, "name": "Narco" },
            { "_id": 13, "name": "Bombasto" },
            { "_id": 14, "name": "Celeritas" },
            { "_id": 15, "name": "Magneta" },
            { "_id": 16, "name": "RubberMan" },
            { "_id": 17, "name": "Dynama" },
            { "_id": 18, "name": "Dr IQ" },
            { "_id": 19, "name": "Magma" },
            { "_id": 20, "name": "Tornado" }
        ].sort(this.compare);
        this.title = 'My Heroes';
        this.selected = 0;
        http.get('/heroes')
            .map(function (res) { return res.json(); })
            .subscribe(function (docs) {
            var heroes = docs.heroes;
            for (var index = 0; index < heroes.length; index++) {
                _this.heroes.push(heroes[index]);
            }
        });
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.hero = hero;
        this.selected = hero._id;
    };
    AppComponent.prototype.compare = function (a, b) {
        if (a.id < b.id)
            return -1;
        if (a.id > b.id)
            return 1;
        return 0;
    };
    AppComponent.prototype.newHero = function () {
        this.hero = {
            _id: this.maxId(),
            name: ''
        };
        this.new = true;
        this.selected = 0;
    };
    AppComponent.prototype.addHero = function () {
        this.heroes.push(this.hero);
        this.new = false;
    };
    AppComponent.prototype.maxId = function () {
        return Math.max.apply(Math, this.heroes.map(function (hero) {
            return hero._id + 1;
        }));
    };
    AppComponent.prototype.deselect = function () {
        this.selected = 0;
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'app',
            templateUrl: 'views/hero.html',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
            viewProviders: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map