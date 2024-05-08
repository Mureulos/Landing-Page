// src/app/pages/home/components/hero-section/hero-section.component.ts
import { Component, Input } from '@angular/core';
import { BtnPrincipalComponent, ButtonProperties } from '../../widgets/btn-principal/btn-principal.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    BtnPrincipalComponent,
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  @Input() title: string = ''
  @Input() paragraph: string = ''
  @Input() imgName: string = ''
  @Input() imgAlt: string = ''
  @Input() imgRight: boolean = false
  @Input() btns: ButtonProperties[] = []
}
