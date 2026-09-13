import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);

  private readonly DEFAULT_TITLE = 'Suprabhat Chandra Banerjee | Full-Stack Systems & AI Engineer';
  private readonly DEFAULT_DESC = 'Personal portfolio of Suprabhat Chandra Banerjee — specializing in high-throughput distributed microservices, Spring Boot, Kafka, Angular, and Agentic AI workflows.';
  private readonly DEFAULT_IMAGE = 'https://suprabhatbanerjee.github.io/assets/images/og-image.svg';
  private readonly SITE_NAME = 'Suprabhat Banerjee Portfolio';

  public updateMetadata(config: Partial<SeoConfig>): void {
    const pageTitle = config.title ? `${config.title} | Suprabhat Banerjee` : this.DEFAULT_TITLE;
    const pageDesc = config.description || this.DEFAULT_DESC;
    const pageImage = config.image || this.DEFAULT_IMAGE;
    const pageType = config.type || 'website';
    const pageUrl = config.url || 'https://suprabhatbanerjee.github.io';

    this.titleService.setTitle(pageTitle);

    // Standard HTML meta
    this.metaService.updateTag({ name: 'description', content: pageDesc });
    if (config.keywords && config.keywords.length > 0) {
      this.metaService.updateTag({ name: 'keywords', content: config.keywords.join(', ') });
    }

    // Open Graph
    this.metaService.updateTag({ property: 'og:title', content: pageTitle });
    this.metaService.updateTag({ property: 'og:description', content: pageDesc });
    this.metaService.updateTag({ property: 'og:image', content: pageImage });
    this.metaService.updateTag({ property: 'og:url', content: pageUrl });
    this.metaService.updateTag({ property: 'og:type', content: pageType });
    this.metaService.updateTag({ property: 'og:site_name', content: this.SITE_NAME });

    // Twitter Card
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: pageTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: pageDesc });
    this.metaService.updateTag({ name: 'twitter:image', content: pageImage });
  }
}
