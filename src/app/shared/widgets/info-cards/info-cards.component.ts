import { Component, Input } from '@angular/core';
import { BtnPrincipalComponent, ButtonProperties } from '../btn-principal/btn-principal.component';
import { CommonModule } from '@angular/common';

interface CardsData {
    iconSrc: string | null;
    iconBgColor?: string;
    title: string;
    paragraph: string;
    button: boolean;
}

@Component({
    selector: 'info-cards',
    standalone: true,
    imports: [
        CommonModule,
        BtnPrincipalComponent,
    ],
    templateUrl: './info-cards.component.html',
    styleUrl: './info-cards.component.scss'
})
export class InfoCardsComponent {
    @Input() cardData: CardsData[] = []
    @Input() btnData: ButtonProperties[] = []
}
