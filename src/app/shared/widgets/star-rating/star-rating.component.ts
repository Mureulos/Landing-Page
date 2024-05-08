import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {
  @Input() rating: number = 0

  getStars(): { src: string }[] {
    const stars: { src: string }[] = []

    for (let i = 0; i < 5; i++) {
      stars.push({
        src: i < this.rating ? '/assets/svg/starIcon.svg' : '/assets/svg/emptyStarIcon.svg'
      })
    }

    return stars
  }
}
