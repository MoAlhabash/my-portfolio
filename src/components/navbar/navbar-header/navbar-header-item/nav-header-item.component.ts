import {Component, Input} from '@angular/core';

@Component({
  selector: 'nav-header-item-component',
  templateUrl: './nav-header-item.component.html',
  styleUrls: ['./nav-header-item.component.scss']
})
export class NavbarHeaderItemComponent {

  @Input()
  btnText: string = 'test btn';

  btnHeaderTheme() {
    return localStorage.getItem('THEME') == 'Dark' ? 'btnHeader-dark-theme' : 'btnHeader-light-theme';
  }
}
