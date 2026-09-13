import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/seo/seo.service';
import { EXPERIENCE_DATA } from '../../data/experience';
import { EDUCATION_DATA } from '../../data/education';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { TimelineComponent } from '../../shared/timeline/timeline.component';
import { BadgeComponent } from '../../shared/badge/badge.component';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    SectionHeaderComponent,
    TimelineComponent,
    BadgeComponent,
    ButtonComponent
  ],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <app-section-header 
          code="// TRACK_M6"
          title="Experience & Education"
          subtitle="Chronological record of software engineering roles, academic qualifications, research fellowships, and technical achievements.">
        </app-section-header>

        <div class="mb-8 sm:mb-12">
          <app-button href="assets/resume/resume.pdf" download="Suprabhat_Banerjee_Resume.pdf" variant="primary" size="md">
            <svg class="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>DOWNLOAD OFFICIAL RESUME</span>
          </app-button>
        </div>
      </div>

      <!-- Section 1: Professional Experience Timeline -->
      <div class="space-y-6">
        <div class="flex items-center space-x-3 border-b border-cyber-border pb-3">
          <span class="font-mono text-xs font-bold text-cyber-cyan uppercase">01 //</span>
          <h3 class="text-xl font-bold text-white font-mono">Professional Software Engineering Roles</h3>
        </div>

        <app-timeline [items]="experience"></app-timeline>
      </div>

      <!-- Section 2: Education & Academic Engineering -->
      <div class="space-y-6 pt-8">
        <div class="flex items-center space-x-3 border-b border-cyber-border pb-3">
          <span class="font-mono text-xs font-bold text-cyber-violet uppercase">02 //</span>
          <h3 class="text-xl font-bold text-white font-mono">Academic Degrees & Certifications</h3>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          @for (edu of education; track edu.id) {
            <div class="p-6 rounded-xl bg-cyber-surface border border-cyber-border hover:border-cyber-violet/50 transition-all space-y-4">
              <div class="flex items-center justify-between">
                <span class="font-mono text-xs text-cyber-violet font-bold">
                  {{ edu.period }}
                </span>
                <app-badge variant="violet">ACADEMIC</app-badge>
              </div>

              <div>
                <h4 class="text-lg font-bold text-white">{{ edu.degree }}</h4>
                <div class="text-xs font-mono text-cyber-cyan mt-0.5">{{ edu.field }}</div>
                <div class="text-xs text-slate-400 mt-1">{{ edu.institution }} • {{ edu.location }}</div>
              </div>

              @if (edu.description) {
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {{ edu.description }}
                </p>
              }

              <!-- Coursework -->
              <div class="space-y-2 pt-2 border-t border-cyber-border/60">
                <span class="font-mono text-[11px] text-slate-400 font-bold uppercase">Relevant Coursework:</span>
                <div class="flex flex-wrap gap-1.5">
                  @for (c of edu.coursework; track c) {
                    <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-cyber-bg border border-cyber-border text-slate-300">
                      {{ c }}
                    </span>
                  }
                </div>
              </div>

              <!-- Achievements -->
              @if (edu.achievements && edu.achievements.length > 0) {
                <div class="space-y-1 pt-2">
                  <span class="font-mono text-[11px] text-cyber-emerald font-bold uppercase">Honors & Milestones:</span>
                  <ul class="text-xs text-slate-400 space-y-1 list-disc list-inside">
                    @for (ach of edu.achievements; track ach) {
                      <li>{{ ach }}</li>
                    }
                  </ul>
                </div>
              }

            </div>
          }
        </div>
      </div>

    </div>
  `
})
export class ExperienceComponent implements OnInit {
  private readonly seo = inject(SeoService);
  public readonly experience = EXPERIENCE_DATA;
  public readonly education = EDUCATION_DATA;

  ngOnInit(): void {
    this.seo.updateMetadata({
      title: 'Experience & Education',
      description: 'Career milestones, engineering fellowships, B.Tech in IT, and certifications of Suprabhat Chandra Banerjee.'
    });
  }
}
