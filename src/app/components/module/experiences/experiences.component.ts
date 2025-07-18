import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {slideInAnimation, staggerAnimation} from '../../shared/animations/animation';
import {Experience, ExperiencesService} from '../../../core/services/experiences.service';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  animations: [slideInAnimation, staggerAnimation],
  template: `
    <section class="experience-hero">
      <div class="container">
        <div class="experience-content" [@slideIn]>
          <h1 class="page-title">Mes expériences Professionnelles</h1>
        </div>
      </div>
    </section>
    <section class="experiences-grid-section">
      <div class="container">
        <div class="experiences-grid" [@stagger]>
          <div class="experience-card" *ngFor="let experience of experiences">
            <div class="experience-image">
              <img [src]="experience.imageUrl" [alt]="experience.title" />
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
  experiences: Experience[] = [];

  constructor(private experiencesService: ExperiencesService) {}

  ngOnInit(): void {
    this.experiencesService.getExperiences().subscribe(experiences => {
      this.experiences = experiences;
    });
  }
}
