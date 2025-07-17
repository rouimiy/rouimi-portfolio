import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { slideInAnimation } from '../../shared/animations/animation';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  animations: [slideInAnimation],
  template: `
    <section class="contact-hero">
      <div class="container">
        <div class="hero-content" [@slideIn]>
          <h1 class="page-title">Contactez-moi</h1>
          <p class="hero-description">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de vos besoins
            et voir comment je peux vous aider à concrétiser vos idées.
          </p>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info" [@slideIn]>
            <h2>Informations de contact</h2>
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-details">
                <h3>Email</h3>
                <p>-------</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-phone"></i>
              </div>
              <div class="contact-details">
                <h3>Téléphone</h3>
                <p>+33 6 12 34 56 78</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="contact-details">
                <h3>Localisation</h3>
                <p>Paris, France</p>
              </div>
            </div>

            <div class="social-section">
              <h3>Réseaux sociaux</h3>
              <div class="social-links">
                <a href="https://github.com/rouimiyoussef" target="_blank" class="social-link">
                  <i class="fab fa-github"></i>
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/rouimiyoussef" target="_blank" class="social-link">
                  <i class="fab fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form-container" [@slideIn]>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
              <h2>Envoyez-moi un message</h2>

              <div class="form-group">
                <label for="name">Nom complet *</label>
                <input
                  type="text"
                  id="name"
                  formControlName="name"
                  class="form-control"
                  [class.error]="contactForm.get('name')?.touched && contactForm.get('name')?.invalid"
                  placeholder="Votre nom complet">
                <div class="error-message" *ngIf="contactForm.get('name')?.touched && contactForm.get('name')?.invalid">
                  Le nom est requis
                </div>
              </div>

              <div class="form-group">
                <label for="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  formControlName="email"
                  class="form-control"
                  [class.error]="contactForm.get('email')?.touched && contactForm.get('email')?.invalid"
                  placeholder="votre@email.com">
                <div class="error-message" *ngIf="contactForm.get('email')?.touched && contactForm.get('email')?.invalid">
                  <span *ngIf="contactForm.get('email')?.errors?.['required']">L'email est requis</span>
                  <span *ngIf="contactForm.get('email')?.errors?.['email']">Format d'email invalide</span>
                </div>
              </div>

              <div class="form-group">
                <label for="subject">Sujet *</label>
                <input
                  type="text"
                  id="subject"
                  formControlName="subject"
                  class="form-control"
                  [class.error]="contactForm.get('subject')?.touched && contactForm.get('subject')?.invalid"
                  placeholder="Sujet de votre message">
                <div class="error-message" *ngIf="contactForm.get('subject')?.touched && contactForm.get('subject')?.invalid">
                  Le sujet est requis
                </div>
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea
                  id="message"
                  formControlName="message"
                  class="form-control"
                  [class.error]="contactForm.get('message')?.touched && contactForm.get('message')?.invalid"
                  rows="6"
                  placeholder="Décrivez votre projet ou votre demande..."></textarea>
                <div class="error-message" *ngIf="contactForm.get('message')?.touched && contactForm.get('message')?.invalid">
                  Le message est requis
                </div>
              </div>

              <button
                type="submit"
                class="btn btn-primary"
                [disabled]="contactForm.invalid || isSubmitting">
                <i class="fas fa-paper-plane" *ngIf="!isSubmitting"></i>
                <i class="fas fa-spinner fa-spin" *ngIf="isSubmitting"></i>
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
              </button>

              <div class="form-status" *ngIf="formStatus">
                <div class="status-message" [class.success]="formStatus.type === 'success'" [class.error]="formStatus.type === 'error'">
                  <i class="fas fa-check-circle" *ngIf="formStatus.type === 'success'"></i>
                  <i class="fas fa-exclamation-circle" *ngIf="formStatus.type === 'error'"></i>
                  {{ formStatus.message }}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  formStatus: { type: 'success' | 'error', message: string } | null = null;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.formStatus = null;

      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.formStatus = {
          type: 'success',
          message: 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.'
        };
        this.contactForm.reset();
      }, 2000);

      // In a real application, you would send the form data to your backend
      // const formData = this.contactForm.value;
      // this.sendEmail(formData);
    }
  }

  private sendEmail(formData: any): void {
    // Implementation for sending email using EmailJS or your backend API
    console.log('Sending email with data:', formData);
  }
}
