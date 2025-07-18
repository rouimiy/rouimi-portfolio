import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { slideInAnimation } from '../../shared/animations/animation';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  animations: [slideInAnimation],
  templateUrl: './contact.component.html',
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

       this.sendEmail();
    }
  }

  private sendEmail(): void {
      emailjs.sendForm(
        'service_s4q7grf',
        'template_q4k9wrl',
        document.querySelector('form') as HTMLFormElement,
        'uKIJupGKf4Eef-PX9'
      ).then(
        (result: any) => {
          alert('Message envoyé avec succès !');
        },
        (error: any) => {
          alert('Erreur : ' + error.text);
        }
      );
  }
}
