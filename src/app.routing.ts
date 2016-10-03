import { Provider }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }         from './app.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

const appRoutes: Routes = [
  { 
    path: '', 
    component: HeroesComponent,
    data: {title: 'Tour of Heroes', backButtonTitle: 'Home'}
  }
];

export const routingProviders: Provider[] = RouterModule.forRoot(appRoutes)['providers'];
