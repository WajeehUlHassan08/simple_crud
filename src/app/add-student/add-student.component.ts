import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NumberValueAccessor, NgForm } from '@angular/forms';
import { StudentDataService } from '../service/student-data.service';
import { Students } from '../Model/students';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  
  id:number; // to store id and check whether its edit mode or add mode
  header: string; // to store add edit text based upon condition

  student: Students = {
    id: null,
    name: '',
    fathername: '',
    CNIC: null,
    subject: '',
    university: ''
  }


  constructor(private router: Router, private route: ActivatedRoute, private studentService: StudentDataService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id'); //+ sign is to convert the to number because returned value is a string
    this.header = this.id === 0? 'Add Student' : 'Edit Student';

    if(this.id != 0){
      this.student = this.studentService.onGetEmployee(this.id);
    }

  }


  onSubmit(form: NgForm){
    let studentObj: Students = {
      id: form.value.id,
      name: form.value.name,
      fathername: form.value.fathername,
      CNIC: form.value.CNIC,
      subject: form.value.subject,
      university: form.value.university
    }

    if(this.id === 0){
      this.studentService.add(studentObj);
    }
    else{
      this.studentService.update(studentObj)
    }


    this.router.navigateByUrl('');
  }



}
