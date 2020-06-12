import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { RpgmdpProjectIntroComponent } from './blogs/RPG-MDP/rpgmdp-project-intro/rpgmdp-project-intro.component';
import { RpgmdpDevlog1Component } from './blogs/RPG-MDP/rpgmdp-devlog1/rpgmdp-devlog1.component';

import { SandwichkidProjectIntroComponent } from './blogs/SandwichKid/sandwichkid-project-intro/sandwichkid-project-intro.component';
import { SandwichkidDevlog1Component } from './blogs/SandwichKid/sandwichkid-devlog1/sandwichkid-devlog1.component';

const routes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'about', component: AboutComponent},
	{path: 'RPG-MDP', component: RpgmdpProjectIntroComponent},
	{path: 'RPG-MDP/devlog1', component: RpgmdpDevlog1Component},
	{path: 'SandwichKid', component: SandwichkidProjectIntroComponent},
	{path: 'SandwichKid/devlog1', component: SandwichkidDevlog1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
