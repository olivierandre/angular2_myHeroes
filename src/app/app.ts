import {Component, bootstrap, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {HeroService} from './heroService';

@Component({
    selector: 'app',
    templateUrl: 'views/hero.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
    providers: [HeroService],
    bindings: [HeroService]
})

class AppComponent {
    constructor(heroService: HeroService) {
        this.heroService = heroService;
    }

    public heroService: HeroService;

    // public heroes: Hero[] = [
    // ].sort(this.compare);

    public title = 'My Heroes'
    public hero: Hero;

    public selected: number = 0;
    public new: boolean;
    public modify: boolean;

    onSelect(hero: Hero) {
        this.hero = hero;
        this.selected = parseInt(hero._id);
        this.new = false;
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
            _id: '',
            name: '',
            editor: '',
            description: ''
        };
        this.new = true;
        this.selected = 0;
    }

    addHero() {
        this.new = false;
        this.heroService.saveHero(this.hero);
    }

    // maxId() {
    //     return Math.max.apply(Math, this.heroes.map(function(hero) {
    //         return hero._id + 1;
    //     }))
    // }

    deselect() {
        this.selected = 0;
    }

    deleteHero(hero) {
        this.heroService.deleteHero(hero);
    };

    modifyHero() {
        this.heroService.updateHero(this.hero);
        this.deselect();
    }

}

bootstrap(AppComponent, [HTTP_PROVIDERS, HeroService]);
