import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../core/seo/seo.service';
import { PROFILE_DATA } from '../../data/profile';
import { SOCIAL_LINKS } from '../../data/social-links';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { BadgeComponent } from '../../shared/badge/badge.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SectionHeaderComponent,
    ButtonComponent,
    BadgeComponent
  ],
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      <app-section-header 
        code="// TRANSMISSION_CHANNEL"
        title="Contact & Network Link"
        subtitle="Initiate direct communication for software engineering opportunities, architectural consultations, or technical collaborations.">
      </app-section-header>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left Column: Direct Communication Ports -->
        <div class="lg:col-span-5 space-y-6">
          <div class="p-6 sm:p-8 rounded-2xl bg-cyber-surface border border-cyber-border space-y-6">
            <div>
              <span class="font-mono text-xs text-cyber-cyan font-bold uppercase tracking-widest">// SECURE_ENDPOINTS</span>
              <h3 class="text-xl font-bold text-white mt-1">Direct Coordinates</h3>
              <p class="text-xs text-slate-400 mt-1">Direct channels monitored with sub-24h turnaround.</p>
            </div>

            <div class="space-y-4 text-xs font-mono">
              
              <!-- Email Card -->
              <a [href]="'mailto:' + profile.email" class="p-4 rounded-xl bg-cyber-bg border border-cyber-border hover:border-cyber-cyan flex items-start space-x-3 transition-colors group block">
                <div class="p-2 rounded bg-cyber-cyan/10 text-cyber-cyan group-hover:bg-cyber-cyan group-hover:text-cyber-bg transition-colors">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-[11px] text-slate-400 font-bold uppercase">PRIMARY EMAIL</div>
                  <div class="text-white text-sm font-semibold mt-0.5 group-hover:text-cyber-cyan">{{ profile.email }}</div>
                  <div class="text-[10px] text-cyber-emerald mt-0.5">Encrypted communications welcomed</div>
                </div>
              </a>

              <!-- Location Card -->
              <div class="p-4 rounded-xl bg-cyber-bg border border-cyber-border flex items-start space-x-3">
                <div class="p-2 rounded bg-cyber-violet/10 text-cyber-violet">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-[11px] text-slate-400 font-bold uppercase">BASE LOCATION</div>
                  <div class="text-white text-sm font-semibold mt-0.5">{{ profile.location }}</div>
                  <div class="text-[10px] text-slate-400 mt-0.5">Timezone: IST (UTC+05:30) • Remote First</div>
                </div>
              </div>

              <!-- Social Links -->
              <div class="space-y-2 pt-2">
                <span class="text-[11px] text-slate-400 font-bold uppercase">DEVELOPER PROFILES:</span>
                <div class="flex flex-wrap gap-2">
                  @for (link of socialLinks; track link.platform) {
                    <a 
                      [href]="link.url" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="px-3 py-1.5 rounded bg-cyber-bg border border-cyber-border hover:border-cyber-cyan text-slate-300 hover:text-cyber-cyan text-xs flex items-center space-x-1.5 transition-colors">
                      <span class="text-cyber-cyan">&gt;</span>
                      <span>{{ link.platform }}</span>
                    </a>
                  }
                </div>
              </div>

            </div>

            <!-- Verification Signature -->
            <div class="pt-4 border-t border-cyber-border/60 text-[11px] font-mono text-slate-500">
              SHA256_FINGERPRINT // 7a8f9c2d1b4e5... verified
            </div>
          </div>
        </div>

        <!-- Right Column: Interactive Contact Form -->
        <div class="lg:col-span-7">
          <div class="p-6 sm:p-8 rounded-2xl bg-cyber-surface border border-cyber-border space-y-6">
            
            <div class="flex items-center justify-between border-b border-cyber-border pb-3">
              <div>
                <span class="font-mono text-xs text-cyber-cyan font-bold uppercase tracking-widest">// SEND_TRANSMISSION</span>
                <h3 class="text-xl font-bold text-white mt-1">Dispatch Message</h3>
              </div>
              <app-badge variant="cyan" [dot]="true">FORM PROTOCOL READY</app-badge>
            </div>

            @if (formSubmitted()) {
              <!-- Submission Confirmation Feedback -->
              <div class="p-8 rounded-xl bg-cyber-emerald/10 border border-cyber-emerald/40 text-center space-y-4 animate-fadeIn">
                <div class="w-12 h-12 mx-auto rounded-full bg-cyber-emerald text-cyber-bg flex items-center justify-center font-bold text-xl">
                  ✓
                </div>
                <h4 class="text-lg font-bold text-white font-mono">TRANSMISSION DISPATCHED</h4>
                <p class="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, {{ formName }}. Your message has been logged. You will receive a response at {{ formEmail }} shortly.
                </p>
                <button 
                  (click)="resetForm()"
                  class="px-4 py-2 rounded bg-cyber-surface border border-cyber-emerald text-cyber-emerald font-mono text-xs font-bold hover:bg-cyber-emerald/20">
                  DISPATCH ANOTHER MESSAGE
                </button>
              </div>
            } @else {
              <!-- Contact Form -->
              <form (ngSubmit)="submitMessage()" class="space-y-4 text-xs font-mono">
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="space-y-1">
                    <label for="contact-name" class="text-slate-300">YOUR NAME / CALLSIGN *</label>
                    <input 
                      id="contact-name"
                      type="text" 
                      required
                      [(ngModel)]="formName" 
                      name="name"
                      placeholder="e.g. Alex Mercer"
                      class="w-full bg-cyber-bg border border-cyber-border rounded-lg p-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan"
                    />
                  </div>

                  <div class="space-y-1">
                    <label for="contact-email" class="text-slate-300">RETURN EMAIL ADDRESS *</label>
                    <input 
                      id="contact-email"
                      type="email" 
                      required
                      [(ngModel)]="formEmail" 
                      name="email"
                      placeholder="e.g. alex@enterprise.com"
                      class="w-full bg-cyber-bg border border-cyber-border rounded-lg p-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan"
                    />
                  </div>
                </div>

                <div class="space-y-1">
                  <label for="contact-subject" class="text-slate-300">SUBJECT / TOPIC *</label>
                  <input 
                    id="contact-subject"
                    type="text" 
                    required
                    [(ngModel)]="formSubject" 
                    name="subject"
                    placeholder="e.g. Distributed Architecture Consulting / Role Opportunity"
                    class="w-full bg-cyber-bg border border-cyber-border rounded-lg p-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan"
                  />
                </div>

                <div class="space-y-1">
                  <label for="contact-msg" class="text-slate-300">TRANSMISSION CONTENT *</label>
                  <textarea 
                    id="contact-msg"
                    rows="5" 
                    required
                    [(ngModel)]="formMessage" 
                    name="message"
                    placeholder="Provide details about your project, timeline, or engineering challenge..."
                    class="w-full bg-cyber-bg border border-cyber-border rounded-lg p-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan"
                  ></textarea>
                </div>

                <div class="pt-2 flex items-center justify-between">
                  <span class="text-[10px] text-slate-500">* All fields required for transmission validation</span>
                  <app-button 
                    type="submit" 
                    variant="primary" 
                    size="md"
                    [disabled]="!formName || !formEmail || !formSubject || !formMessage">
                    <span>TRANSMIT MESSAGE</span>
                    <span>&rarr;</span>
                  </app-button>
                </div>

              </form>
            }

          </div>
        </div>

      </div>

    </div>
  `
})
export class ContactComponent implements OnInit {
  private readonly seo = inject(SeoService);
  public readonly profile = PROFILE_DATA;
  public readonly socialLinks = SOCIAL_LINKS;

  public formName = '';
  public formEmail = '';
  public formSubject = '';
  public formMessage = '';
  public formSubmitted = signal(false);

  public submitMessage(): void {
    if (this.formName && this.formEmail && this.formSubject && this.formMessage) {
      // In static MVP, simulate client-side submission with success confirmation
      this.formSubmitted.set(true);
    }
  }

  public resetForm(): void {
    this.formName = '';
    this.formEmail = '';
    this.formSubject = '';
    this.formMessage = '';
    this.formSubmitted.set(false);
  }

  ngOnInit(): void {
    this.seo.updateMetadata({
      title: 'Contact',
      description: 'Get in touch with Suprabhat Chandra Banerjee for software engineering, distributed systems, and AI architecture.'
    });
  }
}
