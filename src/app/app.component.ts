import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
  template: `
  <h1>{{title}}</h1>
  <div id="heroesList">
    <ul class="heroes">
      <li *ngFor="let hero of heroes" (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul> 
  </div>
  <hr />

  <hero-detail [selectedHero]="selectedHero"></hero-detail>
  
  `,
})

export class AppComponent  { 
  
  title = 'Tour of Heroes 3';
  id = 1;
  name = 'Windstorm';

  heroes = [
    {id: 11, name: "Chris"},
    {id: 12, name: "Catherine"},
    {id: 13, name: "Rose"},
    {id: 14, name: "Superman"},
    {id: 15, name: "Batman"},
    {id: 16, name: "Spiderman"},
    {id: 17, name: "Wonderwoman"},
    {id: 18, name: "Hulk"},
    {id: 19, name: "Mr. Fantastic"},
    {id: 20, name: "Ironman"},
  ]

  selectedHero: Hero;

  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }
}
