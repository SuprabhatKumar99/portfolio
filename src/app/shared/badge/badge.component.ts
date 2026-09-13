import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant = 'cyan' | 'emerald' | 'violet' | 'amber' | 'rose' | 'dim';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="badgeClasses">
      <span *ngIf="dot" [class]="dotClasses"></span>
      <ng-content></ng-content>
    </span>
  `
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'cyan';
  @Input() dot = false;
  @Input() size: 'sm' | 'md' = 'sm';

  get badgeClasses(): string {
    const base = 'inline-flex items-center font-mono font-medium rounded-full transition-colors border';
    const sizeMap = {
      sm: 'px-2.5 py-0.5 text-[11px] gap-1.5',
      md: 'px-3 py-1 text-xs gap-2'
    };

    const variantMap: Record<BadgeVariant, string> = {
      cyan: 'bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan/30',
      emerald: 'bg-cyber-emerald/10 text-cyber-emerald border-cyber-emerald/30',
      violet: 'bg-cyber-violet/10 text-cyber-violet border-cyber-violet/30',
      amber: 'bg-cyber-amber/10 text-cyber-amber border-cyber-amber/30',
      rose: 'bg-cyber-rose/10 text-cyber-rose border-cyber-rose/30',
      dim: 'bg-slate-800/60 text-slate-300 border-slate-700'
    };

    return `${base} ${sizeMap[this.size]} ${variantMap[this.variant]}`;
  }

  get dotClasses(): string {
    const colorMap: Record<BadgeVariant, string> = {
      cyan: 'bg-cyber-cyan',
      emerald: 'bg-cyber-emerald',
      violet: 'bg-cyber-violet',
      amber: 'bg-cyber-amber',
      rose: 'bg-cyber-rose',
      dim: 'bg-slate-400'
    };
    return `w-1.5 h-1.5 rounded-full ${colorMap[this.variant]}`;
  }
}
