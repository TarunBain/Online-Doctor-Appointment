import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-search-doctors',
  templateUrl: './search-doctors.component.html',
  styleUrls: ['./search-doctors.component.css'],
})
export class SearchDoctorsComponent implements OnInit {
  selected;
  cities: any = [];
  state;
  city;
  states: any = [];
  spec;
  specs: any = [];
  doctors: any = [];
  
  constructor(private http: HttpClient, private route: Router) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:8080/doctor/searchState')
      .subscribe((data) => {
        this.states = data;
        console.log(this.states);
      });
  }

  selectedState() {
    this.http
      .get('http://localhost:8080/doctor/searchCity/?state=' + this.state)

      .subscribe((data) => (this.cities = data));
    console.log(this.cities);
  }

  selectedCity() {
    this.http
      .get(
        'http://localhost:8080/doctor/searchSpec/?state=' +
          this.state +
          '&city=' +
          this.city
      )
      .subscribe((data) => (this.specs = data));
  }

  onSubmit(myForm: NgForm) {
    console.log(myForm.value);
    console.log(this.selected);

    const formData = new FormData();
    formData.append('data', JSON.stringify(myForm.value));
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http
      .post('http://localhost:8080/doctor/searchDoctor', formData, {
        headers: headers,
      })
      .subscribe((data) => {
        this.doctors = data;
        console.log(data);
      });
  }

  book(doctor_id) {
    console.log(doctor_id.id);
    this.route.navigate(['bookAppointment', { doctorId: doctor_id.id }]);
  }
}
