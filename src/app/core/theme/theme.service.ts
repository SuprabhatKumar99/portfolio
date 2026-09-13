import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly STORAGE_KEY = 'portfolio-theme-mode';

  // Default to dark futuristic theme as per SPEC-1 M1 requirement
  public currentTheme = signal<ThemeMode>('dark');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem(this.STORAGE_KEY) as ThemeMode | null;
      if (savedTheme === 'light' || savedTheme === 'dark') {
        this.currentTheme.set(savedTheme);
      } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.currentTheme.set(prefersDark ? 'dark' : 'dark'); // default dark
      }

      this.applyTheme(this.currentTheme());

      effect(() => {
        const theme = this.currentTheme();
        this.applyTheme(theme);
        localStorage.setItem(this.STORAGE_KEY, theme);
      });
    }
  }

  public toggleTheme(): void {
    this.currentTheme.update(current => (current === 'dark' ? 'light' : 'dark'));
  }

  public setTheme(theme: ThemeMode): void {
    this.currentTheme.set(theme);
  }

  private applyTheme(theme: ThemeMode): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }
}
