import { Routes } from '@angular/router';
import {HomeComponent} from './components/module/home/home.component';
import {AboutComponent} from './components/module/about/about.component';
import {ContactComponent} from './components/module/contact/contact.component';
import {ProjectsComponent} from './components/module/projects/projects.component';
import {NotFoundComponent} from './components/module/not-found/not-found.component';
import {ExperiencesComponent} from './components/module/experiences/experiences.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];
