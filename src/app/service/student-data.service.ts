import { Injectable } from '@angular/core';
import { Students } from '../Model/students';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  students: Students[] = [
    {
      id: 1,
      name: "Wajeeh Ul Hassan",
      fathername: "Nazir Ahmed Qadri",
      CNIC: 8120217980841,
      subject: "Computer",
      university: "FURC"
    },
    {
      id: 2,
      name: "Bilal Sheikh",
      fathername: "Usman Khan",
      CNIC: 8120217980843,
      subject: "Computer",
      university: "Bahria University"
    },
    {
      id: 3,
      name: "Nasir Khan",
      fathername: "Junaid Khan",
      CNIC: 812021798084,
      subject: "Mathematics",
      university: "Fast University"
    }
  ]

  constructor() { }

  get(){
    return this.students;
  }

  add(student:Students){
    return this.students.push(student);
  }

  delete(id: Number){
    let student = this.students.find(x => x.id === id);
    let index = this.students.indexOf(student, 0);
    this.students.splice(index, 1);
  }

  onGetEmployee(id:Number){
    return this.students.find(x => x.id === id);
  }

  update(student: Students){
    let updateStudent = this.students.find(x => x.id === student.id);
    updateStudent.id = student.id;
    updateStudent.name = student.name;
    updateStudent.fathername = student.fathername;
    updateStudent.CNIC = student.CNIC;
    updateStudent.subject = student.subject;
    updateStudent.university = student.university;
  }
}
