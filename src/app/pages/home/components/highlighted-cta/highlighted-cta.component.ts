import { Component } from '@angular/core';
import { BtnPrincipalComponent } from '../../../../shared/widgets/btn-principal/btn-principal.component';

@Component({
  selector: 'highlighted-cta',
  standalone: true,
  imports: [BtnPrincipalComponent],
  templateUrl: './highlighted-cta.component.html',
  styleUrl: './highlighted-cta.component.scss'
})
export class HighlightedCtaComponent {

}
