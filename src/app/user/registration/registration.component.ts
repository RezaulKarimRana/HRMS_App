import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styles: ``,
})
export class RegistrationComponent implements OnInit {
  isSubmitted: boolean = false;

  constructor(public fb: FormBuilder) {
    const form = this.fb.group({
      fullName: [''],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
