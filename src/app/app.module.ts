import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsModule } from 'src/components/components.module';
import {HomeComponent} from "./home/home.component";
import {NavbarModule} from "../components/navbar/navbar.module";
import {ProjectsComponent} from "./projects/projects.component";
import {AppRoutingModule} from "./app-routing.module";
import {FooterComponent} from "./footer/footer.component";
import {NgOptimizedImage} from "@angular/common";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    NavbarModule,
    AppRoutingModule,
    NgOptimizedImage,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
