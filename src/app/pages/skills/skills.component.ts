import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/seo/seo.service';
import { SKILLS_DATA } from '../../data/skills';
import { SkillCategory } from '../../core/models/skill.model';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { SkillBadgeComponent } from '../../shared/skill-badge/skill-badge.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, SkillBadgeComponent],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      <app-section-header 
        code="// MATRIX_M1"
        title="Technical Skills & Proficiencies"
        subtitle="A categorized inventory of backend engines, streaming platforms, frontend systems, and AI models I leverage to build scalable software.">
      </app-section-header>

      <!-- Category Filter Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        @for (tab of filterTabs; track tab.id) {
          <button 
            (click)="selectedCategory.set(tab.id)"
            [class]="selectedCategory() === tab.id 
              ? 'bg-cyber-cyan text-cyber-bg font-bold shadow-neon-cyan' 
              : 'bg-cyber-surface border border-cyber-border text-slate-300 hover:border-cyber-cyan/40 hover:text-white'"
            class="px-4 py-2 rounded-lg font-mono text-xs transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-cyber-cyan">
            {{ tab.label }}
          </button>
        }
      </div>

      <!-- Skills Display Groups -->
      <div class="space-y-12">
        @for (group of filteredSkillGroups(); track group.id) {
          <div class="space-y-4">
            <div class="border-b border-cyber-border pb-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <h3 class="text-lg font-bold text-white font-mono flex items-center space-x-2">
                  <span class="text-cyber-cyan">&gt;</span>
                  <span>{{ group.title }}</span>
                </h3>
                <p class="text-xs text-slate-400">{{ group.description }}</p>
              </div>
              <span class="text-[11px] font-mono text-cyber-cyan/70">
                {{ group.skills.length }} MODULES LOADED
              </span>
            </div>

            <!-- Skill Cards Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              @for (skill of group.skills; track skill.name) {
                <app-skill-badge [skill]="skill"></app-skill-badge>
              }
            </div>
          </div>
        }
      </div>

      <!-- Technical Architecture Highlights Box -->
      <div class="p-6 rounded-2xl bg-cyber-surface border border-cyber-border/80 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono text-slate-300">
        <div class="space-y-1.5">
          <span class="text-cyber-cyan font-bold">// CONCURRENCY & SCALING</span>
          <p class="text-slate-400">Deep familiarity with Java Concurrency primitives, thread pools, executor services, and reactive async streams.</p>
        </div>
        <div class="space-y-1.5">
          <span class="text-cyber-emerald font-bold">// STREAMING & STORAGE</span>
          <p class="text-slate-400">Expertise in Kafka topic partitions, consumer group lag mitigation, and Redis caching topologies.</p>
        </div>
        <div class="space-y-1.5">
          <span class="text-cyber-violet font-bold">// AGENTIC REASONING</span>
          <p class="text-slate-400">Self-correcting orchestration loops, deterministic tool validation schemas, and local RAG retrieval.</p>
        </div>
      </div>

    </div>
  `
})
export class SkillsComponent implements OnInit {
  private readonly seo = inject(SeoService);
  public readonly allSkillGroups = SKILLS_DATA;
  public selectedCategory = signal<string>('all');

  public readonly filterTabs = [
    { id: 'all', label: 'ALL SKILLS' },
    { id: 'backend', label: 'BACKEND & DISTRIBUTED' },
    { id: 'frontend', label: 'FRONTEND & ANGULAR' },
    { id: 'database', label: 'DATA & STREAMING' },
    { id: 'ai-ml', label: 'AGENTIC AI & ML' },
    { id: 'devops', label: 'DEVOPS & CLOUD' },
    { id: 'tools', label: 'CORE CS & TOOLS' }
  ];

  public filteredSkillGroups = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'all') {
      return this.allSkillGroups;
    }
    return this.allSkillGroups.filter(g => g.id === cat);
  });

  ngOnInit(): void {
    this.seo.updateMetadata({
      title: 'Skills',
      description: 'Technical skills and proficiencies: Spring Boot, Angular 22, Kafka, Redis, PostgreSQL, LangGraph, and Docker.'
    });
  }
}
