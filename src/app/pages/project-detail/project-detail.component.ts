import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SeoService } from '../../core/seo/seo.service';
import { PROJECTS_DATA } from '../../data/projects';
import { Project } from '../../core/models/project.model';
import { BadgeComponent } from '../../shared/badge/badge.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BadgeComponent,
    ButtonComponent,
    CardComponent
  ],
  template: `
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      @if (project) {
        <!-- Breadcrumb & Back Link -->
        <div class="flex items-center justify-between text-xs font-mono">
          <a routerLink="/projects" class="inline-flex items-center space-x-1 text-cyber-cyan hover:underline">
            <span>&larr;</span>
            <span>RETURN TO PROJECTS ARCHIVE</span>
          </a>
          <span class="text-slate-500">REF: {{ project.slug }}</span>
        </div>

        <!-- Hero Header -->
        <div class="space-y-4">
          <div class="flex flex-wrap items-center gap-2">
            <app-badge [variant]="project.status === 'completed' ? 'emerald' : 'amber'" [dot]="true">
              {{ project.status | uppercase }}
            </app-badge>
            @for (cat of project.category; track cat) {
              <app-badge variant="cyan">{{ cat }}</app-badge>
            }
          </div>

          <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {{ project.title }}
          </h1>

          <p class="text-base sm:text-lg text-cyber-cyan font-mono leading-relaxed">
            {{ project.tagline }}
          </p>

          <!-- External Links CTA -->
          <div class="flex flex-wrap items-center gap-3 pt-2">
            @if (project.liveUrl) {
              <app-button [href]="project.liveUrl" target="_blank" variant="primary" size="sm">
                <span>OPEN LIVE URL</span>
                <span>&nearr;</span>
              </app-button>
            }
            @if (project.githubUrl) {
              <app-button [href]="project.githubUrl" target="_blank" variant="secondary" size="sm">
                <svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>VIEW REPOSITORY</span>
              </app-button>
            }
          </div>
        </div>

        <!-- Project Hero Visual -->
        <div class="rounded-2xl overflow-hidden border border-cyber-border bg-slate-900 shadow-cyber-card">
          <img 
            [src]="project.heroImage || project.thumbnail" 
            [alt]="project.title + ' schematic'"
            class="w-full h-auto max-h-[460px] object-cover object-center"
          />
        </div>

        <!-- Technologies Stack Pill Matrix -->
        <div class="p-6 rounded-xl bg-cyber-surface border border-cyber-border space-y-3">
          <h3 class="text-xs font-mono font-bold text-cyber-cyan tracking-widest uppercase">
            // TECHNOLOGIES & INFRASTRUCTURE
          </h3>
          <div class="flex flex-wrap gap-2">
            @for (tech of project.technologies; track tech.name) {
              <div class="px-3 py-1.5 rounded-lg bg-cyber-bg border border-cyber-border text-xs font-mono text-slate-200 flex items-center space-x-2">
                <span class="w-1.5 h-1.5 rounded-full bg-cyber-cyan"></span>
                <span>{{ tech.name }}</span>
                <span class="text-[10px] text-slate-500 uppercase">({{ tech.category }})</span>
              </div>
            }
          </div>
        </div>

        <!-- Deep Dive Sections -->
        <div class="space-y-8">
          
          <!-- Problem Statement -->
          @if (project.problem) {
            <div class="p-6 rounded-xl bg-cyber-surface border border-cyber-border space-y-3">
              <h3 class="text-base font-bold text-cyber-rose font-mono flex items-center space-x-2">
                <span>01 //</span>
                <span>THE ARCHITECTURAL PROBLEM</span>
              </h3>
              <p class="text-sm sm:text-base text-slate-300 leading-relaxed">
                {{ project.problem }}
              </p>
            </div>
          }

          <!-- Solution & Architecture -->
          @if (project.solution) {
            <div class="p-6 rounded-xl bg-cyber-surface border border-cyber-border space-y-3">
              <h3 class="text-base font-bold text-cyber-emerald font-mono flex items-center space-x-2">
                <span>02 //</span>
                <span>THE DESIGNED SOLUTION</span>
              </h3>
              <p class="text-sm sm:text-base text-slate-300 leading-relaxed">
                {{ project.solution }}
              </p>
            </div>
          }

          <!-- System Architecture Pipeline -->
          @if (project.architecture) {
            <div class="p-6 rounded-xl bg-cyber-bg border border-cyber-cyan/40 space-y-3">
              <h3 class="text-base font-bold text-cyber-cyan font-mono flex items-center space-x-2">
                <span>03 //</span>
                <span>DATA PIPELINE & EXECUTION TOPOLOGY</span>
              </h3>
              <div class="p-4 rounded bg-slate-950/80 border border-cyber-border font-mono text-xs text-cyber-cyan leading-relaxed overflow-x-auto">
                {{ project.architecture }}
              </div>
            </div>
          }

          <!-- Challenges -->
          @if (project.challenges && project.challenges.length > 0) {
            <div class="p-6 rounded-xl bg-cyber-surface border border-cyber-border space-y-3">
              <h3 class="text-base font-bold text-cyber-amber font-mono flex items-center space-x-2">
                <span>04 //</span>
                <span>ENGINEERING CHALLENGES & MITIGATIONS</span>
              </h3>
              <ul class="space-y-2 text-sm text-slate-300 list-disc list-inside">
                @for (ch of project.challenges; track ch) {
                  <li class="leading-relaxed">{{ ch }}</li>
                }
              </ul>
            </div>
          }

          <!-- Measurable Outcomes -->
          @if (project.outcomes && project.outcomes.length > 0) {
            <div class="p-6 rounded-xl bg-cyber-surface border border-cyber-border space-y-3">
              <h3 class="text-base font-bold text-cyber-cyan font-mono flex items-center space-x-2">
                <span>05 //</span>
                <span>MEASURABLE BENCHMARKS & OUTCOMES</span>
              </h3>
              <ul class="space-y-2 text-sm text-slate-300 list-disc list-inside">
                @for (out of project.outcomes; track out) {
                  <li class="leading-relaxed">{{ out }}</li>
                }
              </ul>
            </div>
          }

        </div>

        <!-- Next Project / Back CTA -->
        <div class="pt-8 border-t border-cyber-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <a routerLink="/projects" class="font-mono text-xs text-cyber-cyan hover:underline">
            &larr; BACK TO ALL PROJECTS
          </a>

          <a routerLink="/contact" class="px-5 py-2.5 rounded-lg bg-cyber-surface border border-cyber-border text-white hover:border-cyber-cyan font-mono text-xs">
            DISCUSS THIS PROJECT
          </a>
        </div>

      } @else {
        <!-- 404 Not Found State for Invalid Slug -->
        <div class="py-20 text-center space-y-6">
          <div class="inline-flex p-4 rounded-2xl bg-cyber-rose/10 border border-cyber-rose text-cyber-rose font-mono text-3xl font-bold">
            404 // SLUG_NOT_FOUND
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-white font-mono">
            PROJECT NOT FOUND IN ARCHIVE
          </h2>
          <p class="text-sm text-slate-400 max-w-md mx-auto">
            The requested project slug does not exist or has been relocated in the portfolio database.
          </p>
          <div class="pt-4">
            <app-button routerLink="/projects" variant="primary" size="md">
              <span>RETURN TO PROJECTS ARCHIVE</span>
              <span>&rarr;</span>
            </app-button>
          </div>
        </div>
      }

    </div>
  `
})
export class ProjectDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  public project: Project | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.project = PROJECTS_DATA.find(p => p.slug === slug);

      if (this.project) {
        this.seo.updateMetadata({
          title: this.project.title,
          description: this.project.tagline,
          image: this.project.heroImage || this.project.thumbnail,
          type: 'article',
          keywords: this.project.technologies.map(t => t.name)
        });
      } else {
        this.seo.updateMetadata({
          title: 'Project Not Found',
          description: 'The requested project could not be found in the portfolio archive.'
        });
      }
    });
  }
}
