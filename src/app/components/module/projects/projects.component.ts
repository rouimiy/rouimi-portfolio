import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService, Project } from '../../../core/services/projects.service';
import { slideInAnimation, staggerAnimation } from '../../shared/animations/animation';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  animations: [slideInAnimation, staggerAnimation],
  templateUrl: './projects.component.html',
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
