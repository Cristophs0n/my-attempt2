import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({

    selector: 'hero-detail',
    template: `
    <div id="heroDetails" *ngIf="selectedHero">
        <h3>{{selectedHero.name}} details:</h3>
        <p><label>ID: </label>{{selectedHero.id}}</p>
        <p><label>Name: </label>{{selectedHero.name}}</p>
        <input [(ngModel)]="selectedHero.name" placeholder="name">
    </div>
    `

})

export class HeroDetailComponent {

    @Input () selectedHero: Hero;

}