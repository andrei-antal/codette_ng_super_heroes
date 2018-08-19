import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../model/hero';

@Component({
  selector: 'ngsh-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input()
  hero: Hero;
  @Input()
  small = true;
  constructor() {}

  callHero() {
    alert(`${this.hero.name} has be called!`);
  }
}
