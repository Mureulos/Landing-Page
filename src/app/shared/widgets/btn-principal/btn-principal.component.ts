// src/app/shared/widgets/btn-principal/btn-principal.component.ts
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

type BtnVariants = 
  'primary' 
  | 'primary-color' 
  | 'secondary' 
  | 'secondary-color' 
  | 'tertiary';

enum svgColor {
  zircon = '#F8F9FF',
  alto = '#D8D8D8',
  mineShaft = '#2D2D2D',
  observatory = '#009379',
  aquaSqueeze = '#E5F4F2',
  sweetCorn = '#F8D57E',
  mandysPink = '#F2BFAF',
  persimmon = '#FF6250',
}

export interface ButtonProperties {
  btnText: string;
  icon?: string;
  variant: BtnVariants;
  iconRight?: boolean;
}

@Component({
  selector: 'btn-principal',
  standalone: true,
  imports: [ 
    NgOptimizedImage,
    CommonModule,
  ],
  templateUrl: './btn-principal.component.html',
  styleUrl: './btn-principal.component.scss',
})
export class BtnPrincipalComponent {
  @Input() buttonProperties: ButtonProperties[] = [];
}
