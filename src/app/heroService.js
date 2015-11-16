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
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.heroes = [];
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.getAllHeroes();
    }
    HeroService.prototype.getAllHeroes = function () {
        var _this = this;
        return this.http.get('/heroes')
            .map(function (res) { return res.json(); }).subscribe(function (response) { return _this.heroes = response.heroes; }, function (err) { return console.log(err); }, function () { return console.log('Get all heroes'); });
    };
    HeroService.prototype.setHeroes = function (heroes) {
        this.heroes = heroes;
    };
    HeroService.prototype.getHeroes = function () {
        return this.heroes;
    };
    HeroService.prototype.saveHero = function (hero) {
        var _this = this;
        return this.http.post('/heroes', JSON.stringify(hero), {
            headers: this.headers
        })
            .map(function (res) { return res.json(); }).subscribe(function (response) { return _this.heroes.push(response); }, function (err) { return console.log(err); }, function () { return console.log('add hero OK'); });
    };
    HeroService.prototype.updateHero = function (hero) {
        var _this = this;
        return this.http.put('/heroes', JSON.stringify(hero), {
            headers: this.headers
        })
            .map(function (res) { return res.json(); }).subscribe(function (response) {
            var index = _this.heroes.indexOf(hero);
            _this.heroes[index] = response;
        }, function (err) { return console.log(err); }, function () { return console.log('Update ok'); });
    };
    HeroService.prototype.deleteHero = function (hero) {
        var _this = this;
        var url = '/heroes/' + hero._id;
        var ok = false;
        return this.http.delete(url, {
            headers: this.headers
        })
            .map(function (res) { return res.json(); }).subscribe(function (response) { return ok = response.response; }, function (err) { return console.log(err); }, function () {
            if (ok) {
                var index = _this.heroes.indexOf(hero);
                _this.heroes.splice(index, 1);
            }
        });
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
})();
exports.HeroService = HeroService;
//# sourceMappingURL=heroService.js.map