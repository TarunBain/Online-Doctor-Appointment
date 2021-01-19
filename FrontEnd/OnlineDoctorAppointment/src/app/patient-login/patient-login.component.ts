import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css'],
})
export class PatientLoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  submitHandler(data) {
    console.log(this.email);
    console.log(this.password);
  }

  redirectToRegister() {
    this.router.navigate(['patientRegister']);
  }
}
