import {Component, ContentChildren, Input, QueryList} from "@angular/core";
import {TextSectionComponent} from "../text-section/text-section.component";

@Component({
  selector: 'project-component',
  templateUrl: 'project.component.html',
  styleUrls: ['project.component.scss']
})
export class ProjectComponent {

  @Input()
  image: string;

  @Input()
  altImage: string;

  @Input()
  width: number;

  @Input()
  height: number;

  @Input()
  btnName: string;

  @Input()
  link: string;

  @ContentChildren(TextSectionComponent)
  textSectionComponent: QueryList<TextSectionComponent>;

  get themeDark(): boolean {
    return localStorage.getItem('THEME') === 'Dark';
  }
}
