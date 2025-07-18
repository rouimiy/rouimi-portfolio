import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService, Project } from '../../../core/services/projects.service';
import { slideInAnimation, staggerAnimation } from '../../shared/animations/animation';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  animations: [slideInAnimation, staggerAnimation],
  template: `
    <section class="projects-hero">
      <div class="container">
        <div class="hero-content" [@slideIn]>
          <h1 class="page-title">Mes Projets</h1>
        </div>
      </div>
    </section>

<!--    <section class="projects-filters">-->
<!--      <div class="container">-->
<!--        <div class="filter-buttons" [@slideIn]>-->
<!--          <button-->
<!--            class="filter-btn"-->
<!--            [class.active]="selectedFilter === 'all'"-->
<!--            (click)="filterProjects('all')">-->
<!--            Tous-->
<!--          </button>-->
<!--          <button-->
<!--            class="filter-btn"-->
<!--            [class.active]="selectedFilter === 'Web'"-->
<!--            (click)="filterProjects('Web')">-->
<!--            Web-->
<!--          </button>-->
<!--          <button-->
<!--            class="filter-btn"-->
<!--            [class.active]="selectedFilter === 'Mobile'"-->
<!--            (click)="filterProjects('Mobile')">-->
<!--            Mobile-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->

    <section class="projects-grid-section">
      <div class="container">
        <div class="projects-grid" [@stagger]>
          <div class="project-card" *ngFor="let project of filteredProjects">
            <div class="project-image">
              <img [src]="project.imageUrl" [alt]="project.title" />
              <div class="project-overlay">
                <div class="project-info">
                  <h3>{{ project.title }}</h3>
                  <p>{{ project.description }}</p>
                  <div class="project-links">
                    <a [href]="project.githubUrl" target="_blank" class="project-link" *ngIf="project.githubUrl">
                      <i class="fab fa-github"></i>
                      <span>Code</span>
                    </a>
                    <a [href]="project.liveUrl" target="_blank" class="project-link" *ngIf="project.liveUrl">
                      <i class="fas fa-external-link-alt"></i>
                      <span>Démo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="project-content">
              <div class="project-header">
                <h3>{{ project.title }}</h3>
                <span class="project-category">{{ project.category }}</span>
              </div>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tech">
                <span class="tech-tag" *ngFor="let tech of project.technologies">{{ tech }}</span>
              </div>
              <div class="project-actions">
                <a [href]="project.githubUrl" target="_blank" class="btn btn-outline" *ngIf="project.githubUrl">
                  <i class="fab fa-github"></i>
                  Code
                </a>
                <a [href]="project.liveUrl" target="_blank" class="btn btn-primary" *ngIf="project.liveUrl">
                  <i class="fas fa-external-link-alt"></i>
                  Voir le projet
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="projects-cta" [@slideIn] *ngIf="filteredProjects.length === 0">
          <div class="cta-content">
            <h3>Aucun projet trouvé</h3>
            <p>Aucun projet ne correspond à votre filtre actuel.</p>
            <button class="btn btn-primary" (click)="filterProjects('all')">
              Voir tous les projets
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  selectedFilter = 'all';

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.filteredProjects = projects;
    });
  }

  filterProjects(category: string): void {
    this.selectedFilter = category;
    if (category === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }
}
