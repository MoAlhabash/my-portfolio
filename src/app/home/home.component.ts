import {Component, HostBinding} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  sectionHeader: string = 'hey, i\'m mouhamad alhabash';
  sectionText: string = 'A software developer. Currently I\'m a trainee at Dedalus HealthCare GmbH in Germany, working as frontend developer.';

  theme: string | null;

  constructor(private router: Router) {
  }

  get themeColor() {
    return this.theme = localStorage.getItem('THEME');
  }

  themeClass(): string {
    return this.themeColor == 'Dark' ? 'home-dark-theme' :  'home-light-theme'
  }

  onClick(): void {
    this.router.navigate(['/projects'])
  }
}
