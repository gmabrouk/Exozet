import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { phoneNumberValidator } from '../validators/phone-validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      telefon: ['', phoneNumberValidator],
      kommentar: ['', Validators.required, Validators.maxLength(10)]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
        return;
    }

    this.router.navigate(['/sent']);
  }

}
