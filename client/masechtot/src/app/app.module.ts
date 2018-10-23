import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/components/home/home.component';
import { UserInfoComponent } from './modules/components/home/user-info/user-info.component';
import { ProjectsListComponent } from './modules/components/home/projects-list/projects-list.component';
import { ProjectComponent } from './modules/components/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserInfoComponent,
    ProjectsListComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
