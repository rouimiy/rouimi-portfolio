import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsService, Project } from '../../../core/services/projects.service';
import { slideInAnimation, fadeInAnimation, staggerAnimation } from '../../shared/animations/animation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  animations: [slideInAnimation, fadeInAnimation, staggerAnimation],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredProjects: Project[] = [];

  services = [
    {
      title: 'Développement Web',
      description: 'Applications web modernes avec Angular',
      icon: 'fas fa-laptop-code'
    },
    {
      title: 'Développement Backend',
      description: 'Applications, Micro-service et integration continu',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Maintenance & Support',
      description: 'Maintenance et évolution d\'applications existantes',
      icon: 'fas fa-tools'
    }
  ];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.getFeaturedProjects().subscribe(
      projects => this.featuredProjects = projects
    );
  }
}
