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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'My Heroes';
        this.heroes = [
            { "id": 11, "name": "Mr. Nice" },
            { "id": 12, "name": "Narco" },
            { "id": 13, "name": "Bombasto" },
            { "id": 14, "name": "Celeritas" },
            { "id": 15, "name": "Magneta" },
            { "id": 16, "name": "RubberMan" },
            { "id": 17, "name": "Dynama" },
            { "id": 18, "name": "Dr IQ" },
            { "id": 19, "name": "Magma" },
            { "id": 20, "name": "Tornado" }
        ].sort(this.compare);
        this.selected = 0;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.hero = hero;
        this.selected = hero.id;
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
            id: this.maxId(),
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
            return hero.id + 1;
        }));
    };
    AppComponent.prototype.deselect = function () {
        this.selected = 0;
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'app',
            templateUrl: 'views/hero.html',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map