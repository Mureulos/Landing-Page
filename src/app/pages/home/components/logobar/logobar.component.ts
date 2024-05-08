import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface logosProprieties {
    src: string;
}

@Component({
  selector: 'logobar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logobar.component.html',
  styleUrl: './logobar.component.scss'
})
export class LogobarComponent {
  @Input() logos: logosProprieties[] = []
}
