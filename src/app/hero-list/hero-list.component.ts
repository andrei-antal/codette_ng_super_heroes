import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';

@Component({
  selector: 'ngsh-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
  heroes: Hero[] = [
    {
      id: 1,
      name: 'Batman',
      description: `Tempor enim ea aliqua nulla occaecat. Elit ut veniam incididunt et.
        Voluptate duis reprehenderit deserunt culpa anim laborum enim magna ut nulla reprehenderit proident.`,
      photo: 'assets/hero/batman.jpg',
      universe: 'dc'
    },
    {
      id: 2,
      name: 'Batman2',
      description: `Dolore do fugiat ut minim et sit deserunt. Officia esse non laboris nostrud sunt quis ipsum.`,
      photo: 'assets/hero/batman.jpg',
      universe: 'marvel'
    },
    {
      id: 3,
      name: 'Batma3',
      description: `Est minim Lorem esse irure amet magna mollit minim sint deserunt adipisicing proident magna ex.
        Qui commodo ad pariatur duis laborum elit.`,
      photo: 'assets/hero/batman.jpg',
      universe: 'dc'
    }
  ];
  selectedUniverse = 'all';
  selectedHero: Hero;
  constructor() {}

  changeUniverse(selectedUniverse) {
    this.selectedUniverse = selectedUniverse;
  }

  editHero(heroId) {
    this.selectedHero = null;
    for (let i = 0; i < this.heroes.length; i++) {
      if (this.heroes[i].id === heroId) {
        this.selectedHero = this.heroes[i];
      }
    }
  }
}
