import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, BrowserAnimationsModule, NbThemeModule.forRoot({ name: 'default' }), NbLayoutModule, NbEvaIconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
