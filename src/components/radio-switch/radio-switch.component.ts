import {Component, OnInit} from "@angular/core";
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'radio-switch-component',
  templateUrl: 'radio-switch.component.html',
  styleUrls: ['radio-switch.component.scss']
})
export class RadioSwitchComponent implements OnInit{

  selected: boolean = false;

  toggled() {
    this.selected = !this.selected;
    if (this.selected) {
      localStorage.setItem('THEME', 'Dark');
    } else {
      localStorage.setItem('THEME', 'Light');
    }
  }

  ngOnInit() {
    if (localStorage.getItem('THEME')) {
      if (localStorage.getItem('THEME') == 'Dark')
      this.selected = true;
    } else {
      localStorage.setItem('THEME', 'Light');
    }
  }
}
