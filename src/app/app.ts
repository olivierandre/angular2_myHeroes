import {Component, bootstrap, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'app',
    templateUrl: 'views/hero.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
    viewProviders: [HTTP_PROVIDERS]
})
class AppComponent {
    public heroes: Hero[] = [
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

    constructor(http: Http) {
        http.get('/heroes')
            .map(res => res.json())
            .subscribe(docs => {
                var heroes = docs.heroes
                for (var index = 0; index < heroes.length; index++) {
                    this.heroes.push(heroes[index]);
                }
            }
        )
    }

    public title = 'My Heroes'
    public hero: Hero;


    public selected: number = 0;
    public new: boolean;


    onSelect(hero: Hero) {
        this.hero = hero;
        this.selected = hero._id;
    }

    compare(a, b) {
        if (a.id < b.id)
            return -1;
        if (a.id > b.id)
            return 1;
        return 0;
    }

    newHero(): any {
        this.hero = {
            _id: this.maxId(),
            name: ''
        };
        this.new = true;
        this.selected = 0;
    }

    addHero(): any {
        this.heroes.push(this.hero)
        this.new = false;
    }

    maxId(): any {
        return Math.max.apply(Math, this.heroes.map(function(hero) {
            return hero._id + 1;
        }))
    }

    deselect(): any {
        this.selected = 0;
    }

}

bootstrap(AppComponent);
