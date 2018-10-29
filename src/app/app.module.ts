import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CommonModule } from '@angular/common';
import { DetailedStoryComponent } from './components/detailed-story/detailed-story.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AddMyStoryComponent } from './components/add-my-story/add-my-story.component';
import { IHopeComponent } from './components/ihope/ihope.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DetailedStoryComponent,
    LoginPageComponent,
    AddMyStoryComponent,
    IHopeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
