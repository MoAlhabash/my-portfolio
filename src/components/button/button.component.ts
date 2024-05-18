import {Component, Input} from "@angular/core";

@Component({
  selector: 'button-component',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss']
})
export class ButtonComponent {

  @Input()
  btnName: string = 'Home';

  @Input()
  isSubmit: boolean;

  @Input()
  pageName: string;

  buttonColorTheme() {
    return localStorage.getItem('THEME') == 'Dark' ? 'button-component-container-dark-theme' : 'button-component-container-light-theme';
  }
}
