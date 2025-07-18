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
              <a href="https://www.linkedin.com/in/youssef-rouimi-14b0a8138/" target="_blank" class="social-link">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Rouimi Youssef. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
