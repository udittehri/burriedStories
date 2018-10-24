import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CommonModule } from '@angular/common';
import { DetailedStoryComponent } from './components/detailed-story/detailed-story.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DetailedStoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
