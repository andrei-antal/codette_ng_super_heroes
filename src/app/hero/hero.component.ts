import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';

@Component({
  selector: 'ngsh-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  hero: Hero = {
    name: 'Batman',
    description: `Tempor enim ea aliqua nulla occaecat. Elit ut veniam incididunt et.
      Voluptate duis reprehenderit deserunt culpa anim laborum enim magna ut nulla reprehenderit proident.`,
    photo: 'assets/hero/batman.jpg'
  };
  constructor() {}

  callHero() {
    alert(`${this.hero.name} has be called!`);
  }
}
