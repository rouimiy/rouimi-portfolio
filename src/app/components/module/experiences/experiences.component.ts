import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Experience, Skill, SkillsService} from '../../../core/services/skills.service';
import {slideInAnimation, staggerAnimation} from '../../shared/animations/animation';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  animations: [slideInAnimation, staggerAnimation],
  template: `
    <section class="experience-hero">
      <div class="container">
        <div class="experience-content" [@slideIn]>
          <h1 class="page-title">Expérience Professionnelle</h1>
          <p class="experience-description">
            Découvrez un aperçu de mes expériences professionnelles, sur des missions à fort enjeu,
            avec des technologies modernes et des solutions innovantes.
          </p>
        </div>
      </div>
    </section>
    <section class="experiences-grid-section">
      <div class="container">
        <div class="experiences-grid" [@stagger]>
          <div class="experience-card" *ngFor="let experience of experiences">
            <div class="experience-image">
              <img [src]="" [alt]="experience.title" />
              <div class="experience-overlay">
                <div class="experience-info">
                  <h3>{{ experience.title }}</h3>
                  <p>{{ experience.description }}</p>
                </div>
              </div>
            </div>
            <div class="experience-content">
              <div class="experience-header">
                <h3>{{ experience.title }}</h3>
              </div>
              <p class="experience-description">{{ experience.description }}</p>
              <div class="experience-tech">
                <span class="tech-tag" *ngFor="let tech of experience.technologies">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  skills: Skill[] = [];
  experiences: Experience[] = [];
  skillCategories: any[] = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe(skills => {
      this.skills = skills;
      this.organizeSkillsByCategory();
    });

    this.skillsService.getExperiences().subscribe(experiences => {
      this.experiences = experiences;
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
