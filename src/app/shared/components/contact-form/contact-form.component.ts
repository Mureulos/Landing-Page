import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../widgets/input/input.component';
import { CommonModule } from '@angular/common';
import { BtnPrincipalComponent } from '../../widgets/btn-principal/btn-principal.component';

@Component({
  selector: 'contact-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    InputComponent, 
    CommonModule,
    BtnPrincipalComponent,
],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  @Input() headline: string = ''
  @Input() subhead: string = ''

  userForm: FormGroup

  constructor() {
    this.userForm = new FormGroup({
      fullName: new FormControl("", [Validators.required, Validators.minLength(4)]),
      email: new FormControl("", [Validators.required, Validators.email]),
    })
  }
}
