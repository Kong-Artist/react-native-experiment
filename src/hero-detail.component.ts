import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
    <View *ngIf="hero">
      <Text>{{hero.name}} details!</Text>
      <Text>id: {{hero.id}}</Text>
      <View>
        <Text>name: </Text>
        <TextInput [value]="hero.name" (change)="hero.name=$event" placeholder="name"></TextInput>
      </View>
    </View>
  `
})

export class HeroDetailComponent {

  @Input()
  hero: Hero;
  styles: any;

  constructor() {

  }
}