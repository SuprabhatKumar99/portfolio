import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceItem } from '../../core/models/experience.model';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  template: `
    <div class="relative border-l-2 border-cyber-border ml-3 sm:ml-4 space-y-8">
      @for (item of items; track item.id; let idx = $index) {
        <div class="relative pl-6 sm:pl-8 group">
          
          <!-- Node Dot on Timeline -->
          <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyber-bg border-2 border-cyber-cyan group-hover:bg-cyber-cyan group-hover:shadow-neon-cyan transition-all"></div>

          <!-- Timeline Content Card -->
          <div class="p-5 rounded-xl bg-cyber-surface border border-cyber-border group-hover:border-cyber-cyan/50 transition-all">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <span class="font-mono text-xs text-cyber-cyan font-bold tracking-wider">
                {{ item.period }}
              </span>
              <app-badge variant="violet">{{ item.type | uppercase }}</app-badge>
            </div>

            <h3 class="text-base sm:text-lg font-bold text-white">
              {{ item.role }}
            </h3>

            <div class="text-xs font-mono text-slate-400 mb-3">
              <span class="text-cyber-cyan font-semibold">{{ item.company }}</span>
              <span class="mx-1.5">•</span>
              <span>{{ item.location }}</span>
            </div>

            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {{ item.description }}
            </p>

            <!-- Highlights -->
            <ul class="space-y-1.5 text-xs text-slate-400 mb-4 list-disc list-inside">
              @for (h of item.highlights; track h) {
                <li class="leading-relaxed">{{ h }}</li>
              }
            </ul>

            <!-- Tech stack pills -->
            <div class="flex flex-wrap gap-1.5 pt-2 border-t border-cyber-border/50">
              @for (tech of item.technologies; track tech) {
                <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-cyber-bg border border-cyber-border text-slate-300">
                  {{ tech }}
                </span>
              }
            </div>

          </div>
        </div>
      }
    </div>
  `
})
export class TimelineComponent {
  @Input({ required: true }) items: ExperienceItem[] = [];
}
