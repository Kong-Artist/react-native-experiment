import {NgModule} from '@angular/core';
import {CommonModule, LocationStrategy} from '@angular/common';
import { ReactNativeiOSModule, ReactNativeRouterModule, ReactNativeHttpModule, ReactNativeLocationStrategy} from 'angular2-react-native';
import { routingProviders } from './app.routing';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';

@NgModule({
  imports: [
    ReactNativeiOSModule, 
    CommonModule,
    ReactNativeRouterModule,
    ReactNativeHttpModule
  ],
  declarations: [
    AppComponent, 
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [
    routingProviders,
    HeroService,
    {provide: LocationStrategy, useClass: ReactNativeLocationStrategy}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
