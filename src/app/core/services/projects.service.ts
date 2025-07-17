import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'SaaS to Handle Invoices, Clients, and Cash Flow',
      description: 'Outil SaaS pour créer devis/factures, suivre revenus/dépenses et gérer les clients.',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Stripe'],
      imageUrl: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/rouimiyoussef/ecommerce-app',
      liveUrl: 'https://taajir.ma',
      featured: true,
      category: 'Web'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Site portfolio responsive avec animations modernes et optimisé pour les performances.',
      technologies: ['Angular', 'SCSS', 'Animations', 'PWA'],
      imageUrl: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/rouimiyoussef/portfolio',
      liveUrl: 'https://rouimiyoussef.fr',
      featured: true,
      category: 'Web'
    }
  ];

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getFeaturedProjects(): Observable<Project[]> {
    return of(this.projects.filter(project => project.featured));
  }

  getProjectById(id: number): Observable<Project | undefined> {
    return of(this.projects.find(project => project.id === id));
  }
}
