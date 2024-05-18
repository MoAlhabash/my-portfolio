import {Component} from "@angular/core";

@Component({
  selector: 'contact-component',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})
export class ContactComponent {

  get themeDark(): boolean {
    return localStorage.getItem('THEME') === 'Dark';
  }
}
