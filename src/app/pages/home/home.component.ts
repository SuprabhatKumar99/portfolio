import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../core/seo/seo.service';
import { PROFILE_DATA } from '../../data/profile';
import { PROJECTS_DATA } from '../../data/projects';
import { SKILLS_DATA } from '../../data/skills';
import { ButtonComponent } from '../../shared/button/button.component';
import { BadgeComponent } from '../../shared/badge/badge.component';
import { CardComponent } from '../../shared/card/card.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonComponent,
    BadgeComponent,
    CardComponent,
    SectionHeaderComponent,
    ProjectCardComponent
  ],
  template: `
    <div class="space-y-20 sm:space-y-28 pb-16">
      
      <!-- HERO SECTION -->
      <section class="relative pt-8 sm:pt-16 pb-6 overflow-hidden">
        <!-- Ambient Cyber Background Gradients -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-cyber-cyan/10 via-cyber-violet/5 to-transparent blur-3xl pointer-events-none -z-10"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Hero Content -->
            <div class="lg:col-span-8 space-y-6">
              
              <!-- Terminal Status Badge -->
              <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyber-surface border border-cyber-cyan/30 text-xs font-mono text-cyber-cyan">
                <span class="w-2 h-2 rounded-full bg-cyber-cyan animate-ping"></span>
                <span>SYSTEM_ONLINE // DISTRIBUTED SYSTEMS & AGENTIC AI</span>
              </div>

              <!-- Main Title -->
              <div class="space-y-2">
                <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-teal-300 to-cyber-violet">{{ profile.name }}</span>
                </h1>
                <p class="text-lg sm:text-xl font-mono text-cyber-cyan font-medium">
                  {{ profile.title }}
                </p>
              </div>

              <!-- Tagline & Brief -->
              <p class="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                {{ profile.tagline }}
              </p>

              <p class="text-sm text-slate-400 max-w-2xl leading-relaxed">
                Specialized in architecting high-throughput Spring Boot microservices, Kafka event streams, Redis caching fabrics, and autonomous LangGraph agentic reasoning loops.
              </p>

              <!-- Hero CTAs -->
              <div class="flex flex-wrap items-center gap-3 pt-4">
                <app-button routerLink="/projects" variant="primary" size="md">
                  <span>EXPLORE PROJECTS</span>
                  <span>&rarr;</span>
                </app-button>

                <app-button href="assets/resume/resume.pdf" download="Suprabhat_Banerjee_Resume.pdf" variant="outline" size="md">
                  <svg class="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>GET RESUME</span>
                </app-button>

                <app-button routerLink="/contact" variant="ghost" size="md">
                  <span>INITIATE CONTACT</span>
                </app-button>
              </div>

              <!-- Live Telemetry Coordinates -->
              <div class="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
                <span>LOC: {{ profile.location }}</span>
                <span>•</span>
                <span class="text-cyber-emerald">{{ profile.availability }}</span>
              </div>

            </div>

            <!-- Right Hero Visual / Interactive Cyber Emblem -->
            <div class="lg:col-span-4 flex justify-center">
              <div class="relative w-64 sm:w-72 aspect-square group">
                <!-- Outer Rotating Circuit Ring -->
                <div class="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyber-cyan/20 via-cyber-violet/20 to-cyber-emerald/20 p-1 blur-sm group-hover:blur-md transition-all"></div>
                
                <div class="relative w-full h-full rounded-2xl bg-cyber-surface border border-cyber-cyan/40 p-4 flex flex-col items-center justify-between text-center overflow-hidden">
                  <!-- Decorative Scanline -->
                  <div class="absolute inset-0 bg-scanline-pattern pointer-events-none opacity-40"></div>
                  
                  <div class="w-full flex justify-between items-center text-[10px] font-mono text-cyber-cyan/80">
                    <span>HOST: PRODUCTION</span>
                    <span class="text-cyber-emerald">ACTIVE_NODE</span>
                  </div>

                  <!-- Center Avatar SVG -->
                  <div class="w-36 h-36 rounded-xl overflow-hidden border border-cyber-border bg-cyber-bg p-2 my-auto">
                    <img 
                      [src]="profile.avatarUrl" 
                      [alt]="profile.name" 
                      class="w-full h-full object-contain"
                    />
                  </div>

                  <div class="w-full pt-2 border-t border-cyber-border text-center">
                    <span class="font-mono text-xs font-bold text-slate-200">B.TECH IN IT</span>
                    <p class="text-[10px] font-mono text-cyber-dim">SYSTEMS & DISTRIBUTED COMPUTE</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- STATS & BENCHMARK BAR -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          @for (stat of profile.stats; track stat.label) {
            <div class="p-5 rounded-xl bg-cyber-surface border border-cyber-border hover:border-cyber-cyan/40 transition-all">
              <span class="font-mono text-2xl sm:text-3xl font-extrabold text-cyber-cyan">
                {{ stat.value }}
              </span>
              <div class="text-xs font-bold text-white mt-1">
                {{ stat.label }}
              </div>
              @if (stat.detail) {
                <div class="text-[11px] font-mono text-slate-400 mt-0.5">
                  {{ stat.detail }}
                </div>
              }
            </div>
          }
        </div>
      </section>

      <!-- FEATURED PROJECTS SHOWCASE -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <app-section-header 
            code="// ARCHIVE_M5"
            title="Featured Projects"
            subtitle="Mission-critical distributed pipelines, agentic AI execution frameworks, and responsive cloud applications.">
          </app-section-header>

          <app-button routerLink="/projects" variant="outline" size="sm" class="mb-8 sm:mb-12">
            <span>VIEW ALL PROJECTS ({{ allProjects.length }})</span>
            <span>&rarr;</span>
          </app-button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (proj of featuredProjects; track proj.slug) {
            <app-project-card [project]="proj"></app-project-card>
          }
        </div>
      </section>

      <!-- ENGINEERING PHILOSOPHY CARDS -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-section-header 
          code="// PROTOCOLS_M2"
          title="Engineering Principles"
          subtitle="How I approach architectural decisions, state isolation, concurrency, and reliability.">
        </app-section-header>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          @for (phil of profile.philosophies; track phil.title) {
            <app-card [hoverGlow]="true" padding="lg">
              <div class="space-y-4">
                <div class="w-10 h-10 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-white">{{ phil.title }}</h3>
                <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">{{ phil.description }}</p>
              </div>
            </app-card>
          }
        </div>
      </section>

      <!-- CONTACT CTA BANNER -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative rounded-2xl bg-gradient-to-r from-cyber-surface via-cyber-card to-cyber-surface border border-cyber-cyan/40 p-8 sm:p-12 overflow-hidden text-center space-y-6">
          <div class="max-w-2xl mx-auto space-y-3">
            <span class="font-mono text-xs text-cyber-cyan uppercase tracking-widest">// SECURE_CHANNEL_READY</span>
            <h2 class="text-2xl sm:text-4xl font-extrabold text-white">Let's Build Something Resilient</h2>
            <p class="text-sm sm:text-base text-slate-300">
              Open to discussions regarding distributed backend roles, microservices architecture, and agentic AI pipelines.
            </p>
          </div>
          <div class="flex flex-wrap justify-center items-center gap-4">
            <app-button routerLink="/contact" variant="primary" size="lg">
              <span>ESTABLISH TRANSMISSION</span>
              <span>&rarr;</span>
            </app-button>
            <app-button href="mailto:suprabhat.banerjee@example.com" variant="secondary" size="lg">
              <span>EMAIL DIRECTLY</span>
            </app-button>
          </div>
        </div>
      </section>

    </div>
  `
})
export class HomeComponent implements OnInit {
  private readonly seo = inject(SeoService);
  public readonly profile = PROFILE_DATA;
  public readonly allProjects = PROJECTS_DATA;
  public readonly featuredProjects = PROJECTS_DATA.filter(p => p.featured);

  ngOnInit(): void {
    this.seo.updateMetadata({
      title: 'Home',
      description: 'Portfolio of Suprabhat Chandra Banerjee — Distributed Systems Engineer, Spring Boot, Apache Kafka, Angular 22, and Agentic AI.'
    });
  }
}
