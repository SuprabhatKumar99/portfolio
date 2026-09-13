import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../theme/theme.service';

interface NavItem {
  label: string;
  path: string;
  code: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive],
  template: `
    <header class="sticky top-0 z-50 w-full backdrop-blur-md bg-cyber-bg/85 dark:bg-cyber-bg/90 border-b border-cyber-border transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        <!-- Logo / Terminal Identifier -->
        <a routerLink="/" class="flex items-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-cyber-cyan rounded-md p-1" aria-label="Portfolio Home">
          <div class="w-8 h-8 rounded bg-cyber-surface border border-cyber-cyan/40 flex items-center justify-center group-hover:border-cyber-cyan group-hover:shadow-neon-cyan transition-all">
            <span class="text-cyber-cyan font-mono font-bold text-sm">&gt;_</span>
          </div>
          <div class="flex flex-col">
            <span class="font-mono text-sm font-bold tracking-wider text-slate-900 dark:text-white group-hover:text-cyber-cyan transition-colors">
              SUPRABHAT<span class="text-cyber-cyan">.SYS</span>
            </span>
            <span class="text-[10px] font-mono text-slate-500 dark:text-cyber-dim tracking-tight">v2.6 // DISTRIBUTED_ENG</span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
          @for (item of navItems; track item.path) {
            <a 
              [routerLink]="item.path" 
              routerLinkActive="text-cyber-cyan border-cyber-cyan/60 bg-cyber-cyan/5 dark:bg-cyber-cyan/10 shadow-sm"
              [routerLinkActiveOptions]="{ exact: item.path === '/' }"
              class="px-3 py-1.5 text-xs lg:text-sm font-mono tracking-wide text-slate-600 dark:text-slate-300 hover:text-cyber-cyan dark:hover:text-cyber-cyan border border-transparent hover:border-cyber-cyan/30 rounded transition-all focus:outline-none focus:ring-2 focus:ring-cyber-cyan">
              <span class="text-cyber-cyan/60 text-[10px] mr-1">{{ item.code }}</span>
              {{ item.label }}
            </a>
          }
        </nav>

        <!-- Right Action Controls -->
        <div class="flex items-center space-x-3">
          <!-- Theme Toggle -->
          <button 
            (click)="themeService.toggleTheme()" 
            class="p-2 rounded-lg bg-slate-100 dark:bg-cyber-surface border border-slate-200 dark:border-cyber-border text-slate-700 dark:text-cyber-cyan hover:border-cyber-cyan focus:outline-none focus:ring-2 focus:ring-cyber-cyan transition-all"
            [attr.aria-label]="themeService.currentTheme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'">
            @if (themeService.currentTheme() === 'dark') {
              <!-- Sun icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-cyber-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            } @else {
              <!-- Moon icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-cyber-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            }
          </button>

          <!-- Download Resume Button (Desktop) -->
          <a 
            href="assets/resume/resume.pdf" 
            download="Suprabhat_Banerjee_Resume.pdf"
            class="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-cyber-cyan/10 hover:bg-cyber-cyan/20 border border-cyber-cyan/40 text-cyber-cyan font-mono text-xs font-semibold tracking-wider hover:shadow-neon-cyan transition-all focus:outline-none focus:ring-2 focus:ring-cyber-cyan"
            aria-label="Download Resume PDF">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>RESUME.PDF</span>
          </a>

          <!-- Mobile Menu Button -->
          <button 
            (click)="toggleMobileMenu()" 
            class="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-cyber-surface border border-slate-200 dark:border-cyber-border text-slate-700 dark:text-slate-300 hover:text-cyber-cyan focus:outline-none focus:ring-2 focus:ring-cyber-cyan"
            [attr.aria-expanded]="isMobileMenuOpen()"
            aria-label="Toggle navigation menu">
            @if (isMobileMenuOpen()) {
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            } @else {
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            }
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      @if (isMobileMenuOpen()) {
        <div class="md:hidden border-b border-cyber-border bg-cyber-bg/95 dark:bg-cyber-bg/98 px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          <div class="text-[10px] font-mono text-cyber-cyan/70 tracking-widest px-2 py-1 border-b border-cyber-border/40">
            NAVIGATION_PORTS //
          </div>
          @for (item of navItems; track item.path) {
            <a 
              [routerLink]="item.path" 
              (click)="closeMobileMenu()"
              routerLinkActive="text-cyber-cyan bg-cyber-cyan/10 border-l-2 border-cyber-cyan font-bold"
              [routerLinkActiveOptions]="{ exact: item.path === '/' }"
              class="flex items-center justify-between px-3 py-2 text-sm font-mono text-slate-700 dark:text-slate-300 hover:text-cyber-cyan rounded transition-colors">
              <span>{{ item.label }}</span>
              <span class="text-xs text-cyber-cyan/50 font-mono">{{ item.code }}</span>
            </a>
          }
          <div class="pt-3 border-t border-cyber-border/50">
            <a 
              href="assets/resume/resume.pdf" 
              download="Suprabhat_Banerjee_Resume.pdf"
              (click)="closeMobileMenu()"
              class="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded bg-cyber-cyan/15 border border-cyber-cyan/50 text-cyber-cyan font-mono text-xs font-bold tracking-wider">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>
          </div>
        </div>
      }
    </header>
  `
})
export class NavbarComponent {
  public readonly themeService = inject(ThemeService);
  public isMobileMenuOpen = signal(false);

  public readonly navItems: NavItem[] = [
    { label: 'Home', path: '/', code: '01' },
    { label: 'About', path: '/about', code: '02' },
    { label: 'Skills', path: '/skills', code: '03' },
    { label: 'Projects', path: '/projects', code: '04' },
    { label: 'Experience', path: '/experience', code: '05' },
    { label: 'Contact', path: '/contact', code: '06' }
  ];

  public toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  public closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
