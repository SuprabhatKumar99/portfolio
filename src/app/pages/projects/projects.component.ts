import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../core/seo/seo.service';
import { PROJECTS_DATA } from '../../data/projects';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SectionHeaderComponent,
    ProjectCardComponent,
    ButtonComponent
  ],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      <app-section-header 
        code="// ARCHIVE_CATALOG"
        title="Projects & Case Studies"
        subtitle="Explore detailed technical case studies covering architectural decisions, benchmarks, distributed challenges, and open-source implementations.">
      </app-section-header>

      <!-- Filter Controls Bar -->
      <div class="p-4 sm:p-5 rounded-xl bg-cyber-surface border border-cyber-border space-y-4">
        
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <!-- Category Pills -->
          <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
            @for (cat of categories; track cat) {
              <button 
                (click)="selectedCategory.set(cat)"
                [class]="selectedCategory() === cat 
                  ? 'bg-cyber-cyan text-cyber-bg font-bold shadow-neon-cyan' 
                  : 'bg-cyber-bg border border-cyber-border text-slate-300 hover:border-cyber-cyan/40 hover:text-white'"
                class="px-3.5 py-1.5 rounded-md font-mono text-xs transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-cyber-cyan">
                {{ cat | uppercase }}
              </button>
            }
          </div>

          <!-- Search Input -->
          <div class="relative w-full md:w-72">
            <input 
              type="text" 
              [ngModel]="searchQuery()" 
              (ngModelChange)="searchQuery.set($event)"
              placeholder="Search tech, stack, title..." 
              class="w-full bg-cyber-bg border border-cyber-border rounded-lg px-3.5 py-1.5 pl-9 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan"
            />
            <svg class="w-4 h-4 text-slate-500 absolute left-2.5 top-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            @if (searchQuery()) {
              <button 
                (click)="searchQuery.set('')" 
                class="absolute right-2.5 top-1.5 text-slate-400 hover:text-white text-xs font-mono">
                &times;
              </button>
            }
          </div>
        </div>

        <!-- Telemetry Status Line -->
        <div class="flex items-center justify-between pt-2 border-t border-cyber-border/50 text-[11px] font-mono text-slate-400">
          <span>QUERY FILTER STATUS: OK</span>
          <span class="text-cyber-cyan font-bold">
            SHOWING {{ filteredProjects().length }} OF {{ allProjects.length }} PROJECTS
          </span>
        </div>

      </div>

      <!-- Projects Grid -->
      @if (filteredProjects().length > 0) {
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (proj of filteredProjects(); track proj.slug) {
            <app-project-card [project]="proj"></app-project-card>
          }
        </div>
      } @else {
        <!-- Zero Results State -->
        <div class="p-12 text-center rounded-2xl bg-cyber-surface border border-cyber-border space-y-4">
          <div class="w-12 h-12 mx-auto rounded-full bg-slate-800 text-cyber-cyan flex items-center justify-center font-mono text-lg font-bold">
            !
          </div>
          <h3 class="text-lg font-bold text-white font-mono">NO MATCHING PROJECTS FOUND</h3>
          <p class="text-xs text-slate-400 max-w-md mx-auto">
            No projects matched the search query "{{ searchQuery() }}" in category "{{ selectedCategory() }}".
          </p>
          <button 
            (click)="resetFilters()" 
            class="px-4 py-2 rounded bg-cyber-cyan/10 border border-cyber-cyan text-cyber-cyan font-mono text-xs font-bold hover:bg-cyber-cyan/20">
            RESET ALL FILTERS
          </button>
        </div>
      }

    </div>
  `
})
export class ProjectsComponent implements OnInit {
  private readonly seo = inject(SeoService);
  public readonly allProjects = PROJECTS_DATA;

  public selectedCategory = signal<string>('All');
  public searchQuery = signal<string>('');

  public readonly categories = [
    'All',
    'Distributed Systems',
    'AI & Machine Learning',
    'Full-Stack',
    'IoT & Hardware'
  ];

  public filteredProjects = computed(() => {
    const cat = this.selectedCategory();
    const query = this.searchQuery().trim().toLowerCase();

    return this.allProjects.filter(p => {
      const matchesCategory = cat === 'All' || p.category.includes(cat);
      if (!matchesCategory) return false;

      if (!query) return true;

      const inTitle = p.title.toLowerCase().includes(query);
      const inTagline = p.tagline.toLowerCase().includes(query);
      const inTech = p.technologies.some(t => t.name.toLowerCase().includes(query));
      return inTitle || inTagline || inTech;
    });
  });

  public resetFilters(): void {
    this.selectedCategory.set('All');
    this.searchQuery.set('');
  }

  ngOnInit(): void {
    this.seo.updateMetadata({
      title: 'Projects',
      description: 'Technical projects and architectures by Suprabhat Chandra Banerjee — Distributed Systems, Spring Boot, Kafka, and Agentic AI.'
    });
  }
}
