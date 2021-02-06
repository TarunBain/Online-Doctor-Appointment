import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-doc-appointment',
  templateUrl: './doc-appointment.component.html',
  styleUrls: ['./doc-appointment.component.css'],
})
export class DocAppointmentComponent implements OnInit {
  appointments: any = [];
  id;

  constructor(private http: HttpClient, private router: Router,
    private spinner : NgxSpinnerService) {}

  ngOnInit(): void {
    this.id = localStorage.getItem('doctorToken');
    this.pageLoad();
    console.log(localStorage.getItem('doctorToken'));
  }
  cancelAppointment(appId) {
    this.spinner.show();
    this.http
      .get('http://localhost:8080/doctor/cancelAppointment/?appId=' + appId)
      .subscribe((data) => {
        console.log(data);
        this.spinner.hide();
        this.pageLoad();
      });
  }
  pageLoad() {
    this.http
      .get('http://localhost:8080/doctor/appointments/?doctorId=' + this.id)
      .subscribe((data) => {
        console.log(data);
        this.appointments = data;
      });
  }

  patientPrescriptions(patientId) {
    this.router.navigate([
      'doctor-profile/previous-prescription',
      { patientId: patientId },
    ]);
  }
  uploadPrescription(patientId, doctorId, event) {
    let pdf = event.target.files[0];
    console.log(patientId);
    const formdata = new FormData();
    formdata.append('patientId', patientId);
    formdata.append('doctorId', this.id);
    formdata.append('pdfFile', pdf);
    this.http
      .post('http://localhost:8080/doctor/upload', formdata)
      .subscribe((data) => console.log(data));
  }
}
