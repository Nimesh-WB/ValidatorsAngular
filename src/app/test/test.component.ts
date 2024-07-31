import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']  
})
export class TestComponent {

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        postCode: ['', Validators.required]
      }),
      email:['',Validators.required],
      isSubscribed: ['',Validators.required], 
      selectedOption: ['',Validators.required],
    });
  }

  addUser() {
    if (this.userForm.invalid) {
      this.markAllAsTouched(this.userForm);
      return;
    }
    console.log(this.userForm.value);
  }

  markAllAsTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      if (control) {
        if (control instanceof FormGroup) {
          this.markAllAsTouched(control);
        } else {
          control.markAsTouched();
        }
      }
    });
  }

}
