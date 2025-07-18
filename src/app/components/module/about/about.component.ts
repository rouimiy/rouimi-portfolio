import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Skill, SkillsService} from '../../../core/services/skills.service';
import {slideInAnimation, staggerAnimation} from '../../shared/animations/animation';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  animations: [slideInAnimation, staggerAnimation],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  skills: Skill[] = [];
  skillCategories: any[] = [];

  constructor(private skillsService: SkillsService) {
  }

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe(skills => {
      this.skills = skills;
      this.organizeSkillsByCategory();
    });
  }

  private organizeSkillsByCategory(): void {
    const categories = [...new Set(this.skills.map(skill => skill.category))];
    this.skillCategories = categories.map(category => ({
      name: category,
      skills: this.skills.filter(skill => skill.category === category)
    }));
  }
}
