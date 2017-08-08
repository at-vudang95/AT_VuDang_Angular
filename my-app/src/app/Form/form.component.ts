import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {MyService} from '../service/MyService';
@Component({
  selector: 'app-form-register',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit, OnChanges {

  @Input() id: any;
  @Input() edited: boolean;
  member: any;
  teams: Array<any>;
  public submitted: boolean; // keep track on whether form is submitted
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: MyService) {
    this.teams = [
      'FE', 'Ruby', 'PHP'
    ];
    this.member = this.service.data[0];
    this.registerForm = this.formBuilder.group({
      personal: this.formBuilder.group({
        name: new FormControl('', [Validators.required]),
        birthday: new FormControl(['', Validators.required]),
      }),
      company: this.formBuilder.group({
        joined: new FormControl('', Validators.required),
        team: new FormControl('None', Validators.required)
      }),
      skill: new FormControl({})
    });
  }
  ngOnInit() {
    this.registerForm.controls['company'].get('team').valueChanges.subscribe(value => {
       this.registerForm.setControl('skill',
         new FormControl('', [Validators.required, this.checkSkill]));
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    (<FormGroup>this.registerForm).setValue(this.service.data[this.id]);
    this.member = this.service.data[this.id];
  }
  save(model: any) {
    // console.log(model);
    if (this.edited) {
      this.service.data[this.id] = model;
      this.edited = false;
    }else {
      this.service.data.push(model);
    }
  }
  checkSkill = (input: FormControl) => {
    let team: string;
    team = this.registerForm.controls['company'].get('team').value;
    let isValid: boolean;
    if (input.value.indexOf(team) === -1) {
      isValid = false;
    }else {
      isValid = true;
    }

    return !isValid ? { skillInvalid : true } : null;
  }
}
