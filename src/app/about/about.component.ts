import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'about-component',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.scss']
})
export class AboutComponent {

  skills: string [] = [];

  constructor(private router: Router) {
    this.skills.push(
      'Angular', 'CSS', 'HTML', 'Java Script',
      'Java', 'Docker', 'Git', 'Quarkus', 'Laravel', 'SQL', 'SCSS', 'Python', 'Basic Networking');
  }

  aboutMeText: string = 'Here you can find more information about me, what I do, and my current skills mostly in terms of programming and technology';
  knowMe: string =
    'I\'m a software developer working on Frontend as well as Backend. I can do Websites and Web Application. For now I\'m a ' +
    'trainee at Dedalus HealthCare GmbH in Trier, Germany in the Framework team, working on a Product called Orbis. Orbis is a Software used by' +
    'many Hospitals and praises all over the world. You are free to contact me on the Contact page or by using any other platform such as LinkedIn.';

  onClick() {
    this.router.navigate(['/contact']);
  }

  get themeDark(): boolean {
    return localStorage.getItem('THEME') === 'Dark';
  }


}
