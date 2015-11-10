import {Component, bootstrap, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'app',
    templateUrl: 'views/hero.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
class AppComponent {
    public title = 'My Heroes'
    public hero: Hero;
    public heroes: Hero[] = [
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

    public selected: number = 0;
    public new: boolean;


    onSelect(hero: Hero) {
        this.hero = hero;
        this.selected = hero.id;
    }

    compare(a, b) {
        if (a.id < b.id)
            return -1;
        if (a.id > b.id)
            return 1;
        return 0;
    }

    newHero() {
        this.hero = {
            id: this.maxId(),
            name: ''
        };
        this.new = true;
        this.selected = 0;
    }

    addHero() {
        this.heroes.push(this.hero)
        this.new = false;
    }

    maxId() {
        return Math.max.apply(Math, this.heroes.map(function(hero) {
            return hero.id + 1;
        }))
    }

    deselect() {
        this.selected = 0;
    }

}

bootstrap(AppComponent);
