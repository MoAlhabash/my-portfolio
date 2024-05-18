import {Component} from "@angular/core";

@Component({
  selector: 'nav-social-component',
  templateUrl: './nav-social.component.html',
  styleUrls: ['./nav-social.component.scss']
})
export class NavbarSocialComponent {

  get themeColorDark(): boolean {
    return localStorage.getItem('THEME') === 'Dark';
  }
}
