import { Component, OnInit } from '@angular/core';
import { StyleSheet } from 'react-native';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  host: {position: 'absolute', top: '0', left: '0', bottom: '0', right: '0'},
  template: `
    <View [styleSheet]="styles.container">
      <Text [styleSheet]="styles.header">
        {{title}}
      </Text>
      <Text [styleSheet]="styles.header2">
        Hero details!
      </Text>
    </View>

    <View [styleSheet]="styles.content">
      <View *ngFor="let hero of heroes" [styleSheet]="styles.menuItem" opacityFeedback (tap)="selectHero($event, hero)">
        <Text [styleSheet]="styles.menuText">{{hero.id}} {{hero.name}}</Text>
      </View>
    </View>

    <View [styleSheet]="styles.container">
      <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    </View>
  `
})

export class HeroesComponent implements OnInit { 
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];
  styles: any;
  constructor(private heroService: HeroService) {
    this.styles = this._getStyles(); 

  }

  ngOnInit() {
    this.getHeroes();
  }

  selectHero(event, hero) {
    console.log(event);
    console.log(hero);
    this.selectedHero = hero;
  }

  getHeroes(): void {
  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
}

  _getStyles() {
    return StyleSheet.create({
      container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flex: 1
      },
      header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      header2: {
        fontSize: 15,
        textAlign: 'center',
        margin: 5
      },
      content: {
        flex: 3
      },
      input: {
        width: 300
      },
      menuItem: {
        backgroundColor: '#FFFFFF',
        borderColor: '#005eb8',
        borderBottomWidth: 1
      },
      menuText: {
        fontSize: 20,
        margin: 10
      }
    });
  }
}
