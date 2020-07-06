import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-from-c',
  templateUrl: './from-c.component.html',
  styleUrls: ['./from-c.component.css']
})
export class FromCComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  newRegForm = this.fb.group({
    name:   ['', Validators.required],
    age:    ['', [Validators.pattern("^[0-9]*$"), Validators.min(3), Validators.max(17)]],
    girraf: ['', [Validators.required, Validators.minLength(2)]],
    email:  ['', Validators.email],
  })


  ngOnInit(): void {
  }

  onShukiSubmit(){
    
  }
}