package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Appointment {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer Id;
	@JoinColumn(name="doctor_id")
	@ManyToOne
	private Integer drId;
	@JoinColumn(name="patient_id")
	@ManyToOne
	private Integer patientId;
	@JoinColumn(name="timeframe_id")
	@OneToOne
	private TimeFrame id;
	private Integer status;
	
	public Appointment() {
		super();
	}
	public Appointment(Integer drId, Integer patientId, TimeFrame id, Integer status) {
		super();
		this.drId = drId;
		this.patientId = patientId;
		this.id = id;
		this.status = status;
	}
	public Integer getDrId() {
		return drId;
	}
	public void setDrId(Integer drId) {
		this.drId = drId;
	}
	public Integer getPatientId() {
		return patientId;
	}
	public void setPatientId(Integer patientId) {
		this.patientId = patientId;
	}
	public TimeFrame getId() {
		return id;
	}
	public void setId(TimeFrame id) {
		this.id = id;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "Appointment [drId=" + drId + ", patientId=" + patientId + ", id=" + id + ", status=" + status + "]";
	}
	
	
	
	
	
}
