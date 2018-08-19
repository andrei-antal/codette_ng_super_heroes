import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output()
  edit = new EventEmitter<number>();

  constructor() {}

  callHero() {
    alert(`${this.hero.name} has be called!`);
  }

  editHero() {
    this.edit.emit(this.hero.id);
  }
}
