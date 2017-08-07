import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-form-register',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  member: any;
  teams: Array<any>;
  public submitted: boolean; // keep track on whether form is submitted
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  // registerMember (member: NgForm) {
  //   console.log(member.value.company.team);
  //   // member.value.personel.name = 'vudang';
  // }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      personal: this.formBuilder.group({
        avatar: [],
        name: ['', [Validators.required, Validators.minLength(8)]],
        birthday: ['', Validators.required],
      }),
      company: this.formBuilder.group({
        joined: ['', Validators.required],
        team: ['', Validators.required],
        skill: ['', Validators.required]
      })
    });
    this.registerForm.valueChanges.subscribe(form => {
        (this.registerForm.controls['company'].get('skill'))
          .setValue(form.company.team, { onlySelf: true });
    });
    // (<FormControl>this.registerForm.controls['name'])
    //   .setValue('John', { onlySelf: true });
  }
  save(model: any, isValid: boolean) {
    this.submitted = true; // set form submit to true

    // check if model is valid
    // if valid, call API to save customer
    console.log(model, isValid);
  }
}
