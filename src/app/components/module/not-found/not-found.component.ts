import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { slideInAnimation } from '../../shared/animations/animation';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  animations: [slideInAnimation],
  template: `
    <section class="not-found-section">
      <div class="container">
        <div class="not-found-content" [@slideIn]>
          <div class="error-illustration">
            <div class="error-number">404</div>
            <div class="error-icon">
              <i class="fas fa-exclamation-triangle"></i>
            </div>
          </div>
          <h1 class="error-title">Page non trouvée</h1>
          <p class="error-description">
            Oops ! La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <div class="error-actions">
            <a routerLink="/" class="btn btn-primary">
              <i class="fas fa-home"></i>
              Retour à l'accueil
            </a>
            <a routerLink="/projects" class="btn btn-outline">
              <i class="fas fa-briefcase"></i>
              Voir mes projets
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {}
