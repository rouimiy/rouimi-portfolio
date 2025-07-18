import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

export interface Experience {
  title: string;
  company: string;
  imageUrl: string;
  period: string;
  description: string;
  technologies: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  private experiences: Experience[] = [
    {
      title: 'Développeur Full Stack Senior',
      company: 'Abeille Assurance',
      imageUrl: 'https://www.assinews.it/wp-content/uploads/2021/10/abeille.jpg',
      period: 'Jan 2024 – Aujourd’hui',
      description: 'Développement Angular & Java 17, IHM dynamiques avec JSP, services REST, intégration continue GitLab & Bitbucket.',
      technologies: ['Angular', 'Java 17', 'Spring boot', 'Jsp', 'Rest', 'Bitbucket', 'Git', 'PostGreSql']
    },
    {
      title: 'Développeur Full Stack Senior',
      company: 'GRTgaz',
      imageUrl: 'https://d9m1iyeq935g9.cloudfront.net/capture-decran-2016-10-17-a-1142591476697557.png',
      period: 'Avril 2022 – Déc 2023',
      description: 'Refonte SI modernes et responsive, optimisation des performances, CI/CD GitLab, architecture hexagonale, CQRS, Web Services et tests automatisés.',
      technologies: ['Angular 15', 'Java 17', 'Spring boot', 'MongoDb', 'Webflux', 'Kafka', 'AWS', 'Gitlab']
    },
    {
      title: 'Développeur Full Stack',
      company: 'Crédit Logement',
      imageUrl: 'https://www.artfeelsgood.com/wp-content/uploads/2024/04/ArtFeelsGood_Credit-Logement-vignette.jpg',
      period: 'Jan 2020 – Avril 2022',
      description: 'Migration Java 11, Spring Boot, Spring Batch, SOAP/REST, CI/CD GitLab, traitement batch & suivi production.',
      technologies: ['Java 11', 'Spring boot', 'Spring batch', 'Sql Server', 'Gitlab']
    },
    {
      title: 'Développeur Full Stack',
      company: 'Enedis',
      imageUrl: 'https://th.bing.com/th/id/R.5b913fe4ef9ecdb8748bddf585abb4a6?rik=6onrWX9OA8PKUA&riu=http%3a%2f%2fwww.lecentdeux.com%2fwp-content%2fuploads%2f2016%2f06%2flogo-gros-plan1.jpg&ehk=1FU6S7qNSLUJ7GmSHL92YCnnHKnKWQu9nqR63uDdtUI%3d&risl=1&pid=ImgRaw&r=0',
      period: 'Avril 2019 – Jan 2020',
      description: 'Refonte du portail client, intégration REST/SOAP, suivi qualité du code et documentation technique.',
      technologies: ['Angular', 'Java', 'Spring boot', 'Gitlab']
    },
    {
      title: 'Référent Technique',
      company: 'Viamedis',
      imageUrl: 'https://www.acuite.fr/sites/acuite.fr/files/styles/large/public/articles/viamedis_header.png?itok=_neCpTTQ',
      period: 'Oct 2018 – Avril 2019',
      description: 'Conception et pilotage de modules métier (devis, contrôles), Angular / Java, validation technique et suivi projet.',
      technologies: ['Angular', 'Java', 'Spring', 'Gitlab']
    },
    {
      title: 'Référent TMA',
      company: 'Viamedis',
      imageUrl: 'https://www.acuite.fr/sites/acuite.fr/files/styles/large/public/articles/viamedis_header.png?itok=_neCpTTQ',
      period: 'Sept 2016 – Août 2018',
      description: 'Coordination technique TMA, suivi des incidents, évolutions fonctionnelles du portail ViamedisNet.',
      technologies: ['Jsp', 'Java', 'Spring', 'Gitlab']
    },
    {
      title: 'Ingénieur d\'Études Java/JEE',
      company: 'Viamedis',
      imageUrl: 'https://www.acuite.fr/sites/acuite.fr/files/styles/large/public/articles/viamedis_header.png?itok=_neCpTTQ',
      period: 'Oct 2018 – Avril 2019',
      description: 'Développement de batchs & web services pour la gestion des fraudes. Suivi de logs avec XpoLog.',
      technologies: ['Jsp', 'Java', 'Spring', 'Svn']
    },
  ];

  getExperiences(): Observable<Experience[]> {
    return of(this.experiences);
  }
}
