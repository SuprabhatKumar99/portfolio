import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../core/seo/seo.service';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  template: `
    <div class="min-h-[60vh] flex items-center justify-center px-4 py-16 text-center">
      <div class="max-w-md space-y-6">
        
        <div class="inline-flex p-4 rounded-2xl bg-cyber-rose/10 border border-cyber-rose text-cyber-rose font-mono text-4xl font-extrabold shadow-lg">
          404 // ROUTE_NOT_FOUND
        </div>

        <div class="space-y-2">
          <h1 class="text-2xl sm:text-3xl font-bold text-white font-mono">
            SECTOR UNCHARTED
          </h1>
          <p class="text-xs sm:text-sm text-slate-400 leading-relaxed font-mono">
            The requested URI path is not recognized by the routing protocol. Verify the endpoint address or return to base navigation.
          </p>
        </div>

        <div class="pt-4 flex justify-center gap-3">
          <app-button routerLink="/" variant="primary" size="md">
            <span>RETURN TO BASE (HOME)</span>
            <span>&rarr;</span>
          </app-button>
          <app-button routerLink="/projects" variant="secondary" size="md">
            <span>BROWSE PROJECTS</span>
          </app-button>
        </div>

      </div>
    </div>
  `
})
export class NotFoundComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateMetadata({
      title: '404 - Page Not Found',
      description: 'The requested page was not found.'
    });
  }
}
