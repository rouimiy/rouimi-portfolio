import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled">
      <div class="navbar-container">
        <div class="navbar-brand">
          <a routerLink="/" class="brand-link">
            <span class="brand-text">Rouimi Youssef</span>
          </a>
        </div>

        <div class="navbar-menu" [class.active]="isMenuOpen">
          <a *ngFor="let link of navLinks"
             [routerLink]="link.path"
             class="navbar-link"
             [class.active]="currentRoute === link.path"
             (click)="closeMenu()">
            <i [class]="link.icon"></i>
            <span>{{ link.label }}</span>
          </a>

          <button class="theme-toggle" (click)="toggleTheme()">
            <i class="fas fa-moon" *ngIf="!isDarkMode"></i>
            <i class="fas fa-sun" *ngIf="isDarkMode"></i>
          </button>
        </div>

        <button class="menu-toggle" (click)="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  isScrolled = false;
  isDarkMode = false;
  currentRoute = '';

  navLinks = [
    { path: '/', label: 'Accueil', icon: 'fas fa-home' },
    { path: '/about', label: 'À propos', icon: 'fas fa-user' },
    { path: '/experiences', label: 'Experiences', icon: 'fas fa-user-tie' },
    { path: '/projects', label: 'Projets', icon: 'fas fa-briefcase' },
    { path: '/contact', label: 'Contact', icon: 'fas fa-envelope' }
  ];

  constructor(
    private themeService: ThemeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Track scroll position
    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 50;
    });

    // Subscribe to theme changes
    this.themeService.isDarkMode$.subscribe(
      isDark => this.isDarkMode = isDark
    );

    // Track current route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects;
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
