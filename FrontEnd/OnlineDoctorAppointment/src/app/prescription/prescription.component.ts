import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  prescriptions:any = [];
  patientId = 1;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/patient/prescriptions/?id"+this.patientId).subscribe(data => this.prescriptions = data);
  }

}