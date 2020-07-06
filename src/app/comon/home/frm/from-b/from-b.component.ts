import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-from-b',
  templateUrl: './from-b.component.html',
  styleUrls: ['./from-b.component.css']
})
export class FromBComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  arr:any[] = []

  ngOnInit(): void {
  }


  myPersonForm = new FormGroup({
    name : new FormControl('my name', [Validators.required, Validators.minLength(4),]),
    age : new FormControl(2, [
      Validators.required, 
      Validators.min(3), 
      Validators.pattern("^[0-9]*$")]),
  })

  logthenamer(){
    console.log(this.myPersonForm);

    console.log({
      errors:this.myPersonForm.errors,
      dirty:this.myPersonForm.dirty,
      pristine:this.myPersonForm.pristine,
      status:this.myPersonForm.status,
      value:this.myPersonForm.value,
      valid:this.myPersonForm.valid,
      invalid:this.myPersonForm.invalid,
      touched:this.myPersonForm.touched,
      untouched:this.myPersonForm.untouched,
    });

  }

  onShukiSubmit(){
    this.arr.push({name:this.myPersonForm.value.name, age:this.myPersonForm.value.age, })
  }

}