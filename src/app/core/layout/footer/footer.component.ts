import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SOCIAL_LINKS } from '../../../data/social-links';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="w-full border-t border-cyber-border bg-cyber-bg text-cyber-dim pt-12 pb-8 px-4 sm:px-6 lg:px-8 transition-colors">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        
        <!-- Col 1: Identity & Telemetry -->
        <div class="space-y-4 md:col-span-2">
          <div class="flex items-center space-x-2">
            <div class="w-6 h-6 rounded bg-cyber-surface border border-cyber-cyan/50 flex items-center justify-center">
              <span class="text-cyber-cyan font-mono text-xs font-bold">&gt;_</span>
            </div>
            <span class="font-mono font-bold tracking-wider text-white">SUPRABHAT KUMAR | S.C.B</span>
          </div>
          <p class="text-xs text-slate-400 max-w-md leading-relaxed">
            Engineering scalable distributed microservices, event-driven streaming topologies, and resilient agentic AI loops.
          </p>
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cyber-surface border border-cyber-emerald/30 text-xs font-mono text-cyber-emerald">
            <span class="w-2 h-2 rounded-full bg-cyber-emerald animate-ping"></span>
            <span>SYSTEM STATUS: 100% OPERATIONAL // ALL SERVICES DEPLOYED</span>
          </div>
        </div>

        <!-- Col 2: Navigation Links -->
        <div class="space-y-2">
          <h3 class="text-xs font-mono font-bold uppercase tracking-widest text-cyber-cyan">Architecture</h3>
          <ul class="space-y-1.5 text-xs font-mono">
            <li><a routerLink="/" class="hover:text-cyber-cyan transition-colors">/home</a></li>
            <li><a routerLink="/about" class="hover:text-cyber-cyan transition-colors">/about</a></li>
            <li><a routerLink="/skills" class="hover:text-cyber-cyan transition-colors">/skills</a></li>
            <li><a routerLink="/projects" class="hover:text-cyber-cyan transition-colors">/projects</a></li>
            <li><a routerLink="/experience" class="hover:text-cyber-cyan transition-colors">/experience</a></li>
            <li><a routerLink="/contact" class="hover:text-cyber-cyan transition-colors">/contact</a></li>
          </ul>
        </div>

        <!-- Col 3: Network Ports & Socials -->
        <div class="space-y-2">
          <h3 class="text-xs font-mono font-bold uppercase tracking-widest text-cyber-cyan">Network Links</h3>
          <ul class="space-y-1.5 text-xs font-mono">
            @for (item of socialLinks; track item.platform) {
              <li>
                <a [href]="item.url" target="_blank" rel="noopener noreferrer" class="hover:text-cyber-cyan transition-colors flex items-center space-x-1.5">
                  <span class="text-cyber-cyan">&gt;</span>
                  <span>{{ item.platform }}</span>
                </a>
              </li>
            }
            <li>
              <a href="assets/resume/resume.pdf" download class="text-cyber-emerald hover:underline flex items-center space-x-1.5">
                <span>&gt;</span>
                <span>Resume (PDF)</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="max-w-7xl mx-auto pt-6 border-t border-cyber-border/60 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500">
        <p>&copy; 2026 Suprabhat Chandra Banerjee. Designed with Angular 22 & Tailwind CSS.</p>
        <div class="flex items-center space-x-4 mt-3 sm:mt-0">
          <span>HOSTED ON GITHUB PAGES</span>
          <span>•</span>
          <span>WCAG 2.1 AA ACCESSIBLE</span>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  public readonly socialLinks = SOCIAL_LINKS;
}
