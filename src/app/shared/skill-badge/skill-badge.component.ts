import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillItem } from '../../core/models/skill.model';

@Component({
  selector: 'app-skill-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-3.5 rounded-lg bg-cyber-surface border border-cyber-border hover:border-cyber-cyan/60 hover:shadow-neon-cyan/20 transition-all group">
      <div class="flex items-center justify-between mb-2">
        <span class="font-mono text-xs font-semibold text-slate-200 group-hover:text-cyber-cyan transition-colors">
          {{ skill.name }}
        </span>
        <span class="font-mono text-[11px] text-cyber-cyan/80">
          {{ skill.level }}%
        </span>
      </div>
      
      <!-- Progress Bar -->
      <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div 
          class="h-full bg-gradient-to-r from-cyber-cyan to-cyber-emerald rounded-full transition-all duration-700 ease-out"
          [style.width.%]="skill.level">
        </div>
      </div>

      <div class="mt-2 flex items-center justify-between text-[10px] font-mono text-slate-500">
        <span>EXPERIENCE</span>
        <span>{{ skill.yearsExperience || 2 }}+ YEARS</span>
      </div>
    </div>
  `
})
export class SkillBadgeComponent {
  @Input({ required: true }) skill!: SkillItem;
}
