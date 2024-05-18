import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarHeaderComponent } from './navbar-header/navbar.header.component';
import { NavbarHeaderItemComponent } from './navbar-header/navbar-header-item/nav-header-item.component';
import { NavbarHeaderProfileNameComponent } from "./navbar-header/nav-header-profile-name/nav-header-profile-name.component";
import { NgOptimizedImage } from "@angular/common";
import { NavbarSocialComponent } from "./navbar-social/nav-social.component";

@NgModule({
  declarations: [
    NavbarHeaderComponent,
    NavbarHeaderItemComponent,
    NavbarHeaderProfileNameComponent,
    NavbarSocialComponent,
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
  ],
  exports: [
    NavbarHeaderComponent,
    NavbarHeaderItemComponent,
    NavbarHeaderProfileNameComponent,
    NavbarSocialComponent,
  ],
  providers: [],
})
export class NavbarModule { }
