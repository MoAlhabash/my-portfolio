import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private appService: AppService) {
  }

  get isHamburgerActive(): boolean {
    return this.appService.isHamburgerActive;
  }

  headerClick(value: any) {
    switch (value) {
      case 'home':
        this.router.navigate(['/home'])
        return;
      case 'projects':
        this.router.navigate(['/projects'])
        return;
      case 'about':
        this.router.navigate(['/about'])
        return;
      case 'contact':
        this.router.navigate(['/contact'])
        return;
      default:
        return;
    }
  }

}
