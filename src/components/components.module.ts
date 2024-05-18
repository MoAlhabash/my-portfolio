import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarModule } from './navbar/navbar.module';
import {TextSectionComponent} from "./text-section/text-section.component";
import {ButtonComponent} from "./button/button.component";
import {FormComponent} from "./form/form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RadioSwitchComponent} from "./radio-switch/radio-switch.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ProjectComponent} from "./project/project.component";
import {NgOptimizedImage} from "@angular/common";



@NgModule({
  declarations: [
    TextSectionComponent,
    ButtonComponent,
    FormComponent,
    RadioSwitchComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    FormsModule,
    NgOptimizedImage,
  ],
  exports: [
    TextSectionComponent,
    ButtonComponent,
    FormComponent,
    RadioSwitchComponent,
    ProjectComponent
  ],
})
export class ComponentsModule { }

