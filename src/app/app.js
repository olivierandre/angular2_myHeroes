var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var heroService_1 = require('./heroService');
var AppComponent = (function () {
    function AppComponent(heroService) {
        var _this = this;
        this.heroes = [].sort(this.compare);
        this.title = 'My Heroes';
        this.selected = 0;
        this.heroService = heroService;
        this.heroService.getAllHeroes().subscribe(function (result) {
            return _this.heroes = result.heroes;
        });
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.hero = hero;
        this.selected = parseInt(hero._id);
        this.new = false;
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
        var _this = this;
        this.new = false;
        this.heroService.saveHero(this.hero).subscribe(function (result) {
            return _this.heroes.push(result);
        });
    };
    AppComponent.prototype.maxId = function () {
        return Math.max.apply(Math, this.heroes.map(function (hero) {
            return hero._id + 1;
        }));
    };
    AppComponent.prototype.deselect = function () {
        this.selected = 0;
    };
    AppComponent.prototype.deleteHero = function (hero) {
        var _this = this;
        var index = this.heroes.indexOf(hero);
        this.heroService.deleteHero(hero._id).subscribe(function (result) {
            return _this.heroes.splice(index, 1);
        });
    };
    ;
    AppComponent.prototype.modifyHero = function () {
        this.heroService.updateHero(this.hero).subscribe(function (result) {
            console.log(result);
        });
        this.deselect();
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'app',
            templateUrl: 'views/hero.html',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
            providers: [heroService_1.HeroService],
            bindings: [heroService_1.HeroService]
        }), 
        __metadata('design:paramtypes', [heroService_1.HeroService])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, [http_1.HTTP_PROVIDERS, heroService_1.HeroService]);
//# sourceMappingURL=app.js.map