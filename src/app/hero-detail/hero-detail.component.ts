import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../model/hero';

@Component({
  selector: 'ngsh-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
  @Output()
  close = new EventEmitter();

  closeEdit() {
    this.close.emit();
  }
}
