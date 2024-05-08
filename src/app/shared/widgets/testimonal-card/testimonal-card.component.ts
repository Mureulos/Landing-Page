import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StarRatingComponent } from '../star-rating/star-rating.component';

interface CardsData {
  authPicture: string;
  authName: string;
  authOffice: string;
  text: string;
  stars: number;
}

@Component({
  selector: 'testimonal-card',
  standalone: true,
  imports: [CommonModule, StarRatingComponent],
  templateUrl: './testimonal-card.component.html',
  styleUrl: './testimonal-card.component.scss'
})
export class TestimonalCardComponent {
  @Input() cardData: CardsData[] = []
}
