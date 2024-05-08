// src/app/pages/home/home.component.ts
import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { NgOptimizedImage } from '@angular/common';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { LogobarComponent } from './components/logobar/logobar.component';
import { InfoCardsComponent } from '../../shared/widgets/info-cards/info-cards.component';
import { TestimonalCardComponent } from '../../shared/widgets/testimonal-card/testimonal-card.component';
import { PricingCardComponent } from '../../shared/widgets/pricing-card/pricing-card.component';
import { MemberCardComponent } from '../../shared/widgets/member-card/member-card.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';
import { HighlightedCtaComponent } from './components/highlighted-cta/highlighted-cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NavbarComponent,
    HeroSectionComponent,
    LogobarComponent,
    InfoCardsComponent,
    TestimonalCardComponent,
    PricingCardComponent,
    MemberCardComponent,
    ContactFormComponent,
    HighlightedCtaComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
