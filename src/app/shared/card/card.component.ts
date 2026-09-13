import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="cardClasses">
      <!-- Decorative Cyber Corner Accent -->
      <div *ngIf="techCorners" class="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyber-cyan/60 pointer-events-none"></div>
      <div *ngIf="techCorners" class="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyber-cyan/60 pointer-events-none"></div>
      
      <ng-content></ng-content>
    </div>
  `
})
export class CardComponent {
  @Input() hoverGlow = true;
  @Input() techCorners = true;
  @Input() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';

  get cardClasses(): string {
    const base = 'relative rounded-xl bg-cyber-surface border border-cyber-border transition-all duration-300 overflow-hidden';
    const hover = this.hoverGlow ? 'hover:border-cyber-cyan/50 hover:shadow-cyber-card hover:-translate-y-1' : '';
    
    const padMap = {
      none: '',
      sm: 'p-3 sm:p-4',
      md: 'p-5 sm:p-6',
      lg: 'p-6 sm:p-8'
    };

    return `${base} ${hover} ${padMap[this.padding]}`;
  }
}
