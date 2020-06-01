import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../service/student-data.service';
import { Students } from '../Model/students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  allstudents: Students[];

  constructor(private studentservice: StudentDataService, ) { }

  ngOnInit() {
    this.allstudents = this.studentservice.get();
  }

  onDelete(id: Number){
    this.studentservice.delete(id);

    console.log(id)
  }

}
