import {Component} from "@angular/core";

@Component({
  selector: 'footer-component',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss']
})
export class FooterComponent {
  footerContainerTheme() {
    return localStorage.getItem('THEME') == 'Dark' ? 'footer-component-container-dark-theme' : 'footer-component-container-light-theme';
  }
}
