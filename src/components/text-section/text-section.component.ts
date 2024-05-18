import {Component, Input} from "@angular/core";

@Component({
  selector: 'text-section-component',
  templateUrl: './text-section.component.html',
  styleUrls: ['text-section.component.scss']
})
export class TextSectionComponent {

  @Input()
  header: string;

  @Input()
  text: string;

  @Input()
  textColor: string;

  @Input()
  textAlignLeft: boolean;

  @Input()
  littleGap: boolean;

  get themeDark(): boolean {
    return localStorage.getItem('THEME') === 'Dark';
  }
}
