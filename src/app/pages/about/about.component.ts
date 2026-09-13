import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../core/seo/seo.service';
import { PROFILE_DATA } from '../../data/profile';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { CardComponent } from '../../shared/card/card.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { BadgeComponent } from '../../shared/badge/badge.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SectionHeaderComponent,
    CardComponent,
    ButtonComponent,
    BadgeComponent
  ],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      
      <app-section-header 
        code="// DOSSIER_M1"
        title="About & Background"
        subtitle="Full-stack engineer specializing in robust enterprise microservices, streaming topologies, and agentic workflows.">
      </app-section-header>

      <!-- Main Bio & Terminal Overview Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left: Bio Text -->
        <div class="lg:col-span-7 space-y-6">
          <div class="p-6 sm:p-8 rounded-2xl bg-cyber-surface border border-cyber-border space-y-4">
            <h3 class="text-xl font-bold text-white flex items-center space-x-2">
              <span class="text-cyber-cyan font-mono">&gt;</span>
              <span>Engineering Journey & Specialization</span>
            </h3>

            @for (paragraph of profile.bio; track paragraph) {
              <p class="text-sm sm:text-base text-slate-300 leading-relaxed">
                {{ paragraph }}
              </p>
            }
          </div>

          <!-- Key Areas of Interest -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <app-card [hoverGlow]="false" padding="md">
              <h4 class="font-mono text-xs font-bold text-cyber-cyan uppercase mb-2">
                01 // DISTRIBUTED ARCHITECTURES
              </h4>
              <p class="text-xs text-slate-400 leading-relaxed">
                Event-driven topologies using Kafka, fault-tolerant message deduplication, and low-latency cache fabrics via Redis.
              </p>
            </app-card>

            <app-card [hoverGlow]="false" padding="md">
              <h4 class="font-mono text-xs font-bold text-cyber-violet uppercase mb-2">
                02 // AGENTIC AI REASONING
              </h4>
              <p class="text-xs text-slate-400 leading-relaxed">
                Designing deterministic LangChain/LangGraph graphs with validation guards, reflection loops, and local LLM acceleration.
              </p>
            </app-card>

            <app-card [hoverGlow]="false" padding="md">
              <h4 class="font-mono text-xs font-bold text-cyber-emerald uppercase mb-2">
                03 // MODERN REACTIVE WEB
              </h4>
              <p class="text-xs text-slate-400 leading-relaxed">
                Angular 22 standalone components, signal primitives, WCAG 2.1 AA accessibility, and lightweight CSS token architectures.
              </p>
            </app-card>

            <app-card [hoverGlow]="false" padding="md">
              <h4 class="font-mono text-xs font-bold text-cyber-amber uppercase mb-2">
                04 // EMBEDDED & EDGE TELEMETRY
              </h4>
              <p class="text-xs text-slate-400 leading-relaxed">
                Bluetooth Low Energy beacons, sensor telemetry gateways, and air-gapped industrial monitoring software.
              </p>
            </app-card>
          </div>
        </div>

        <!-- Right: Technical Specification Dossier -->
        <div class="lg:col-span-5 space-y-6">
          <div class="rounded-2xl bg-cyber-bg border border-cyber-border p-6 font-mono text-xs space-y-4">
            <div class="flex items-center justify-between border-b border-cyber-border pb-3">
              <span class="text-cyber-cyan font-bold">SYSTEM_SPECIFICATION.ENV</span>
              <app-badge variant="emerald" [dot]="true">VERIFIED</app-badge>
            </div>

            <div class="space-y-3 text-slate-300">
              <div class="flex justify-between">
                <span class="text-slate-500">OPERATOR:</span>
                <span class="text-white font-bold">{{ profile.name }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500">PRIMARY_FOCUS:</span>
                <span class="text-cyber-cyan">Distributed Systems & AI</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500">CORE_RUNTIME:</span>
                <span>Java 21+, Node.js, Python</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500">FRONTEND_CORE:</span>
                <span>Angular 22, TypeScript 6</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500">DATA_PIPELINES:</span>
                <span>Kafka, Redis, PostgreSQL</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500">EDUCATION:</span>
                <span>B.Tech in Information Technology</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500">LOCATION:</span>
                <span>{{ profile.location }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500">STATUS:</span>
                <span class="text-cyber-emerald">Available for Deployment</span>
              </div>
            </div>

            <div class="pt-4 border-t border-cyber-border flex flex-col gap-2">
              <app-button href="assets/resume/resume.pdf" download="Suprabhat_Banerjee_Resume.pdf" variant="outline" size="sm">
                <svg class="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>DOWNLOAD RESUME (PDF)</span>
              </app-button>

              <app-button routerLink="/contact" variant="primary" size="sm">
                <span>CONNECT WITH SUPRABHAT</span>
              </app-button>
            </div>
          </div>
        </div>

      </div>

    </div>
  `
})
export class AboutComponent implements OnInit {
  private readonly seo = inject(SeoService);
  public readonly profile = PROFILE_DATA;

  ngOnInit(): void {
    this.seo.updateMetadata({
      title: 'About',
      description: 'Learn about Suprabhat Chandra Banerjee — Background in B.Tech Information Technology, distributed microservices, and AI engineering.'
    });
  }
}
