// src/app/shared/components/navbar/navbar.component.ts
import { Component, Input } from '@angular/core';
import { BtnPrincipalComponent } from '../../widgets/btn-principal/btn-principal.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    BtnPrincipalComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
