import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AddMyStoryComponent } from './components/add-my-story/add-my-story.component';
import { IHopeComponent } from './components/ihope/ihope.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login', component:LoginPageComponent},
  {path : 'addMyStory',component:AddMyStoryComponent},

  {path: '**',component:IHopeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
