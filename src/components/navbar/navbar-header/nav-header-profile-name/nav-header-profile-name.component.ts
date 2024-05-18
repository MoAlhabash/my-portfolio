import { Component, Input } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'nav-header-profile-name-component',
  templateUrl: './nav-header-profile-name.component.html',
  styleUrls: ['./nav-header-profile-name.component.scss']
})
export class NavbarHeaderProfileNameComponent {

  constructor(private router: Router) {
  }

  @Input()
  photoNameSrc: string = "assets/my_photo.png";

  @Input()
  personName: string = "Mouhamad Alhabash";

  onClick() {
    this.router.navigate(['/home']);
  }

  imageColorTheme(): string {
    return localStorage.getItem('THEME') == 'Dark' ? 'nav-header-profile-photo-dark-theme' : 'nav-header-profile-photo-light-theme';
  }

  profileHeaderTheme() {
    return localStorage.getItem('THEME') == 'Dark' ? 'nav-header-profile-container-dark-theme' : 'nav-header-profile-container-light-theme';
  }
}
