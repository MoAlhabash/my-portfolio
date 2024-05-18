import {Component} from "@angular/core";

@Component({
  selector: 'projects-component',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.scss']
})
export class ProjectsComponent {

  get themeDark(): boolean {
    return localStorage.getItem('THEME') === 'Dark';
  }
}
