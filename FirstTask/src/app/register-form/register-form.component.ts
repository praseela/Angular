import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  model: any = {};
  constructor() { }

  ngOnInit() {
  }

  onSubmit(myform : NgForm){
  
    console.log(myform)
  }
  }


