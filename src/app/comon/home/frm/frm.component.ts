import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-frm',
  templateUrl: './frm.component.html',
  styleUrls: ['./frm.component.css']
})
export class FrmComponent implements OnInit {

  constructor() { }

  name = new FormControl('', Validators.required);

  ngOnInit(): void {
    this.name.valueChanges.subscribe(value => {
      //console.log(this.name);
    })
  }

  logthenamer() {
    //console.log(this.name);

    console.log({
      errors: this.name.errors,
      dirty: this.name.dirty,
      pristine: this.name.pristine,
      status: this.name.status,
      value: this.name.value,
      valid: this.name.valid,
      invalid: this.name.invalid,
      touched: this.name.touched,
      untouched: this.name.untouched,
    });

  }


  updateName() {
    this.name.setValue('chaim!!!');
  }


}