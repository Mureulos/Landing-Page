import { Component, Input } from '@angular/core';
import { BtnPrincipalComponent, ButtonProperties } from '../btn-principal/btn-principal.component';
import { CommonModule } from '@angular/common';

interface CardsData {
  plan: string;
  pricing: string;
  details: string;
  highlighted: boolean;
  features: string[];
}

@Component({
  selector: 'pricing-card',
  standalone: true,
  imports: [
    CommonModule,
    BtnPrincipalComponent,
  ],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.scss'
})
export class PricingCardComponent {
  @Input() cardData: CardsData[] = []
  @Input() btnData: ButtonProperties[] = []
}
