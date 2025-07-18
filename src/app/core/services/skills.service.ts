import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skills: Skill[] = [
    {name: 'Angular', level: 95, category: 'Frontend', icon: 'fab fa-angular'},
    {name: 'JavaScript', level: 90, category: 'Frontend', icon: 'fab fa-js'},
    {name: 'TypeScript', level: 85, category: 'Frontend', icon: 'fab fa-js'},
    {name: 'HTML5', level: 85, category: 'Frontend', icon: 'fab fa-html5'},
    {name: 'CSS3', level: 85, category: 'Frontend', icon: 'fab fa-css3-alt'},
    {name: 'Java', level: 80, category: 'Backend', icon: 'fab fa-java'},
    {name: 'Spring Boot', level: 75, category: 'Backend', icon: 'fab fa-java'},
    {name: 'Spring MVC', level: 75, category: 'Backend', icon: 'fab fa-java'},
    {name: 'JPA/Hibernate', level: 75, category: 'Backend', icon: 'fas fa-database'},
    {name: 'Sql', level: 85, category: 'Backend', icon: 'fas fa-database'},
    {name: 'Rest Api', level: 85, category: 'Backend', icon: 'fas fa-plug'},
    {name: 'Flutter', level: 70, category: 'Mobile', icon: 'fab fa-flutter'},
    {name: 'Docker', level: 75, category: 'DevOps', icon: 'fab fa-docker'},
    {name: 'Git', level: 75, category: 'DevOps', icon: 'fab fa-git-alt'},
    {name: 'Github', level: 75, category: 'DevOps', icon: 'fab fa-github'},
  ];

  getSkills(): Observable<Skill[]> {
    return of(this.skills);
  }
}
