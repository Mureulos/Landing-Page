import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() idInput: string = ''
  @Input() type: string = ''
  @Input() icon: string = ''
  @Input() placeholder: string = ''
  @Input() controlName: string = ''
  @Input() form: any
}
