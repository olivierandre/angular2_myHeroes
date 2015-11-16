import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class HeroService {
    heroes: Hero[];
    private http: Http;
    private headers: Headers;

    constructor(http: Http) {
        this.http = http;
        this.heroes = [];
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.getAllHeroes();
    }

    getAllHeroes() {
        return this.http.get('/heroes')
            .map(res => res.json()).subscribe(
            response => this.heroes = response.heroes,
            err => console.log(err),
            () => console.log('Get all heroes')
            );
    }

    setHeroes(heroes: Hero[]) {
        this.heroes = heroes;
    }

    getHeroes() {
        return this.heroes;
    }

    saveHero(hero) {
        return this.http.post('/heroes', JSON.stringify(hero), {
            headers: this.headers
        })
            .map(res => res.json()).subscribe(
            response => this.heroes.push(response),
            err => console.log(err),
            () => console.log('add hero OK')
            );
    }

    updateHero(hero) {
        return this.http.put('/heroes', JSON.stringify(hero), {
            headers: this.headers
        })
            .map(res => res.json()).subscribe(
            response => {
                var index = this.heroes.indexOf(hero)
                this.heroes[index] = response;
            },
            err => console.log(err),
            () => console.log('Update ok')
            );
    }

    deleteHero(hero) {
        var url = '/heroes/' + hero._id;
        var ok = false;

        return this.http.delete(url, {
            headers: this.headers
        })
            .map(res => res.json()).subscribe(
            response => ok = response.response,
            err => console.log(err),
            () => {
                if (ok) {
                    var index = this.heroes.indexOf(hero);
                    this.heroes.splice(index, 1);
                }

            }
            );
    }
}
