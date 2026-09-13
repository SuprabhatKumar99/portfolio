import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'glow' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      [type]="type" 
      [disabled]="disabled" 
      (click)="onClick($event)"
      [class]="buttonClasses"
      [attr.aria-label]="ariaLabel">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class ButtonComponent {
  private readonly router = inject(Router);

  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() href?: string;
  @Input() routerLink?: string;
  @Input() target?: string;
  @Input() download?: string;
  @Input() ariaLabel?: string;

  public onClick(event: MouseEvent): void {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    // Client-side Angular routing
    if (this.routerLink) {
      event.preventDefault();
      this.router.navigateByUrl(this.routerLink);
      return;
    }

    // External link or file download
    if (this.href) {
      event.preventDefault();
      if (this.download) {
        const link = document.createElement('a');
        link.href = this.href;
        link.download = this.download;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else if (this.target === '_blank') {
        window.open(this.href, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = this.href;
      }
    }
  }

  get buttonClasses(): string {
    const base = 'inline-flex items-center justify-center font-mono font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyber-cyan disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none rounded-lg';
    
    const sizeMap: Record<ButtonSize, string> = {
      sm: 'px-3 py-1.5 text-xs gap-1.5',
      md: 'px-5 py-2.5 text-sm gap-2',
      lg: 'px-7 py-3.5 text-base gap-2.5'
    };

    const variantMap: Record<ButtonVariant, string> = {
      primary: 'bg-cyber-cyan text-cyber-bg hover:bg-cyan-300 shadow-neon-cyan active:translate-y-0.5',
      secondary: 'bg-cyber-surface border border-cyber-border text-white hover:border-cyber-cyan hover:text-cyber-cyan active:translate-y-0.5',
      outline: 'bg-transparent border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10 hover:shadow-neon-cyan active:translate-y-0.5',
      glow: 'bg-gradient-to-r from-cyber-cyan to-cyber-violet text-white shadow-neon-cyan hover:brightness-110 active:translate-y-0.5',
      ghost: 'bg-transparent text-slate-300 hover:text-cyber-cyan hover:bg-white/5 active:translate-y-0.5'
    };

    return `${base} ${sizeMap[this.size]} ${variantMap[this.variant]}`;
  }
}