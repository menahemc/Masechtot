import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 


import { AppComponent } from './app.component';
import { HomeComponent } from './modules/components/home/home.component';
import { UserInfoComponent } from './modules/components/home/user-info/user-info.component';
import { ProjectsListComponent } from './modules/components/home/projects-list/projects-list.component';
import { ProjectComponent } from './modules/components/project/project.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserInfoComponent,
    ProjectsListComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
