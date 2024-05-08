import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface CardsData {
  memberPicture: string;
  memberName: string;
  memberOcupation: string;
  socialLinks: [string, string, string];
}

@Component({
  selector: 'member-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.scss'
})
export class MemberCardComponent {
  @Input() cardData: CardsData[] = []
}
