import {Component, EventEmitter, Output} from '@angular/core';
import {AppService} from "../../../app/app.service";

@Component({
  selector: 'nav-header-component',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavbarHeaderComponent {

  innerWidth: any;
  active: boolean = false;

  @Output()
  newEvent = new EventEmitter;

  constructor(private appService: AppService) {
    this.appService.isHamburgerActive = this.active;
  }

  onClick(value: any) {
    this.newEvent.emit(value);
    this.active = false;
    this.appService.isHamburgerActive = this.active;
  }

  headerContainerTheme() {
    return localStorage.getItem('THEME') == 'Dark' ? 'nav-header-container-dark-theme' : 'nav-header-container-light-theme';
  }

  get darkTheme(): boolean {
    return localStorage.getItem('THEME') === 'Dark';
  }

  isActive() {
    this.active = !this.active;
    this.appService.isHamburgerActive = this.active;
  }
}
