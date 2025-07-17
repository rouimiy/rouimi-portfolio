import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Rouimi Youssef</h3>
            <p>Développeur web & mobile freelance passionné par les technologies modernes et l'innovation.</p>
          </div>

          <div class="footer-section">
            <h4>Liens rapides</h4>
            <ul>
              <li><a href="/public" class="footer-link">Accueil</a></li>
              <li><a href="/about" class="footer-link">À propos</a></li>
              <li><a href="/experiences" class="footer-link">Expériences</a></li>
              <li><a href="/projects" class="footer-link">Projets</a></li>
              <li><a href="/contact" class="footer-link">Contact</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Suivez-moi</h4>
            <div class="social-links">
              <a href="https://github.com/rouimiyoussef" target="_blank" class="social-link">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/rouimiyoussef" target="_blank" class="social-link">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/rouimiyoussef" target="_blank" class="social-link">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="mailto:contact@rouimiyoussef.fr" class="social-link">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Rouimi Youssef. Tous droits réservés.</p>
          <p>Développé avec <i class="fas fa-heart"></i> et Angular</p>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
