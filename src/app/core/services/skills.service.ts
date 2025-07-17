import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skills: Skill[] = [
    { name: 'Angular', level: 95, category: 'Frontend', icon: 'fab fa-angular' },
    { name: 'JavaScript', level: 90, category: 'Frontend', icon: 'fab fa-js' },
    { name: 'TypeScript', level: 85, category: 'Frontend', icon: 'fab fa-js' },
    { name: 'HTML5', level: 85, category: 'Frontend', icon: 'fab fa-html5' },
    { name: 'CSS3', level: 85, category: 'Frontend', icon: 'fab fa-css3-alt' },
    { name: 'Java', level: 80, category: 'Backend', icon: 'fab fa-java' },
    { name: 'Spring Boot', level: 75, category: 'Backend', icon: 'fab fa-java' },
    { name: 'Spring MVC', level: 75, category: 'Backend', icon: 'fab fa-java' },
    { name: 'JPA/Hibernate', level: 75, category: 'Backend', icon: 'fas fa-database' },
    { name: 'Sql', level: 85, category: 'Backend', icon: 'fas fa-database' },
    { name: 'Rest Api', level: 85, category: 'Backend', icon: 'fas fa-plug' },
    { name: 'Flutter', level: 70, category: 'Mobile', icon: 'fab fa-flutter' },
    { name: 'Docker', level: 75, category: 'DevOps', icon: 'fab fa-docker' },
    { name: 'Git', level: 75, category: 'DevOps', icon: 'fab fa-git-alt' },
    { name: 'Github', level: 75, category: 'DevOps', icon: 'fab fa-github' },
  ];

  private experiences: Experience[] = [
    {
      title: 'Développeur Full Stack Senior',
      company: 'Abeille Assurance',
      period: 'Jan 2024 – Aujourd’hui',
      description: 'Développement Angular & Java 17, IHM dynamiques avec JSP, services REST, intégration continue GitLab & Bitbucket.',
      technologies: ['Angular', 'Java 17', 'Spring boot', 'Jsp', 'Rest', 'Bitbucket', 'Git', 'PostGreSql']
    },
    {
      title: 'Développeur Full Stack Senior',
      company: 'GRTgaz',
      period: 'Avril 2022 – Déc 2023',
      description: 'Refonte SI modernes et responsive, optimisation des performances, CI/CD GitLab, architecture hexagonale, CQRS, Web Services et tests automatisés.',
      technologies: ['Angular 15', 'Java 17', 'Spring boot', 'MongoDb', 'Webflux', 'Kafka', 'AWS', 'Gitlab']
    },
    {
      title: 'Développeur Full Stack',
      company: 'Crédit Logement',
      period: 'Jan 2020 – Avril 2022',
      description: 'Migration Java 11, Spring Boot, Spring Batch, SOAP/REST, CI/CD GitLab, traitement batch & suivi production.',
      technologies: ['Java 11', 'Spring boot', 'Spring batch', 'Sql Server', 'Gitlab']
    },
    {
      title: 'Développeur Full Stack',
      company: 'Enedis',
      period: 'Avril 2019 – Jan 2020',
      description: 'Refonte du portail client, intégration REST/SOAP, suivi qualité du code et documentation technique.',
      technologies: ['Angular', 'Java', 'Spring boot', 'Gitlab']
    },
    {
      title: 'Référent Technique',
      company: 'Viamedis',
      period: 'Oct 2018 – Avril 2019',
      description: 'Conception et pilotage de modules métier (devis, contrôles), Angular / Java, validation technique et suivi projet.',
      technologies: ['Angular', 'Java', 'Spring', 'Gitlab']
    },
    {
      title: 'Référent TMA',
      company: 'Viamedis',
      period: 'Sept 2016 – Août 2018',
      description: 'Coordination technique TMA, suivi des incidents, évolutions fonctionnelles du portail ViamedisNet.',
      technologies: ['Jsp', 'Java', 'Spring', 'Gitlab']
    },
    {
      title: 'Ingénieur d\'Études Java/JEE',
      company: 'Viamedis',
      period: 'Oct 2018 – Avril 2019',
      description: 'Développement de batchs & web services pour la gestion des fraudes. Suivi de logs avec XpoLog.',
      technologies: ['Jsp', 'Java', 'Spring', 'Svn']
    },
  ];

  getSkills(): Observable<Skill[]> {
    return of(this.skills);
  }

  getExperiences(): Observable<Experience[]> {
    return of(this.experiences);
  }
}
