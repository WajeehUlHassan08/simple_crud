import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { AddStudentComponent } from './add-student/add-student.component';


const routes: Routes = [

  {
    path:'',
    component:StudentsComponent
  },
  {
    path: 'student/add/:id',
    component:AddStudentComponent
  },
  {
    path: 'student/edit/:id',
    component:AddStudentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
