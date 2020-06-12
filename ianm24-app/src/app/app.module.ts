import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TestBlogComponent } from './blogs/test-blog/test-blog.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RpgmdpDevlog1Component } from './blogs/RPG-MDP/rpgmdp-devlog1/rpgmdp-devlog1.component';
import { RpgmdpProjectIntroComponent } from './blogs/RPG-MDP/rpgmdp-project-intro/rpgmdp-project-intro.component';
import { SandwichkidProjectIntroComponent } from './blogs/SandwichKid/sandwichkid-project-intro/sandwichkid-project-intro.component';
import { SandwichkidDevlog1Component } from './blogs/SandwichKid/sandwichkid-devlog1/sandwichkid-devlog1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BlogListComponent,
    NavBarComponent,
    TestBlogComponent,
    HomeComponent,
    AboutComponent,
    RpgmdpDevlog1Component,
    RpgmdpProjectIntroComponent,
    SandwichkidProjectIntroComponent,
    SandwichkidDevlog1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
