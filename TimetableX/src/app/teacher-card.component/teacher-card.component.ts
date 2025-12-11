import { Component, Input, OnInit } from '@angular/core';
import { Teachers } from '../teacherdata/dummyTeachers';
import { type TeachersModel } from './teachers.model';
@Component({
  selector: 'app-teacher-card',
  imports: [],
  templateUrl: './teacher-card.component.html',
  styleUrl: './teacher-card.component.css',
})
export class TeacherCardComponent {
  @Input({ required: true }) teacher!: TeachersModel;

  get imagePath() {
    return 'assets/imgs/' + this.teacher.avatar;
  }
}
