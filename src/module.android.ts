import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactNativeAndroidModule} from 'angular2-react-native';
import {HelloApp} from './hello';
import { AppComponent } from './app.component';

@NgModule({
  imports: [ReactNativeAndroidModule, CommonModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class HelloModule {}
