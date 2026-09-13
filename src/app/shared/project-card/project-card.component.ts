import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Project } from '../../core/models/project.model';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterModule, BadgeComponent],
  template: `
    <article class="group relative flex flex-col h-full rounded-xl bg-cyber-surface border border-cyber-border hover:border-cyber-cyan/60 hover:shadow-cyber-card transition-all duration-300 overflow-hidden">
      
      <!-- Project Image / Mockup -->
      <div class="relative w-full h-48 bg-slate-900 overflow-hidden border-b border-cyber-border">
        <img 
          [src]="project.thumbnail" 
          [alt]="project.title + ' thumbnail'"
          loading="lazy"
          class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <!-- Cyber status tag -->
        <div class="absolute top-3 left-3">
          <app-badge [variant]="project.status === 'completed' ? 'emerald' : 'amber'" [dot]="true">
            {{ project.status | uppercase }}
          </app-badge>
        </div>
        <div *ngIf="project.featured" class="absolute top-3 right-3">
          <app-badge variant="cyan">FEATURED</app-badge>
        </div>
      </div>

      <!-- Content -->
      <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div class="space-y-2">
          <div class="flex items-center space-x-2 text-[11px] font-mono text-cyber-cyan/70">
            <span>// ARCHITECTURE</span>
            <span>•</span>
            <span>{{ project.category.join(' / ') }}</span>
          </div>

          <h3 class="text-lg font-bold text-white group-hover:text-cyber-cyan transition-colors">
            <a [routerLink]="['/projects', project.slug]" class="focus:outline-none focus:underline">
              {{ project.title }}
            </a>
          </h3>

          <p class="text-xs text-slate-400 line-clamp-3 leading-relaxed">
            {{ project.tagline }}
          </p>
        </div>

        <!-- Tech Stack Tags -->
        <div class="space-y-4 pt-2">
          <div class="flex flex-wrap gap-1.5">
            @for (tech of project.technologies.slice(0, 4); track tech.name) {
              <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-cyber-bg border border-cyber-border text-slate-300">
                {{ tech.name }}
              </span>
            }
            @if (project.technologies.length > 4) {
              <span class="px-1.5 py-0.5 rounded text-[10px] font-mono text-cyber-cyan/80">
                +{{ project.technologies.length - 4 }}
              </span>
            }
          </div>

          <!-- Bottom Action Buttons -->
          <div class="pt-3 border-t border-cyber-border/60 flex items-center justify-between text-xs font-mono">
            <a 
              [routerLink]="['/projects', project.slug]"
              class="inline-flex items-center space-x-1 text-cyber-cyan hover:underline font-semibold"
              [attr.aria-label]="'Read case study for ' + project.title">
              <span>EXPLORE CASE STUDY</span>
              <span>&rarr;</span>
            </a>

            <div class="flex items-center space-x-2">
              @if (project.githubUrl) {
                <a 
                  [href]="project.githubUrl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                  aria-label="GitHub Repository">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </a>
              }
            </div>
          </div>
        </div>

      </div>
    </article>
  `
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}
