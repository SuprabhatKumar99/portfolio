import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-2 mb-8 md:mb-12">
      <div class="flex items-center space-x-2">
        <span class="font-mono text-xs font-bold text-cyber-cyan tracking-widest uppercase">
          {{ code }}
        </span>
        <div class="h-px w-8 bg-cyber-cyan/40"></div>
      </div>
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
        {{ title }}
      </h2>
      <p *ngIf="subtitle" class="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
        {{ subtitle }}
      </p>
    </div>
  `
})
export class SectionHeaderComponent {
  @Input() code = '// PORTFOLIO_MODULE';
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
}
