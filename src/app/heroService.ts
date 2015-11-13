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
    }

    getAllHeroes() {
        return this.http.get('/heroes')
            .map(res => res.json());
    }

    saveHero(hero) {
        return this.http.post('/heroes', JSON.stringify(hero), {
            headers: this.headers
        })
            .map(res => res.json());
    }

    deleteHero(id) {
        var url = '/heroes/' + id;
        return this.http.delete(url,  {
            headers: this.headers
        })
            .map(res => res.json());
    }
}
