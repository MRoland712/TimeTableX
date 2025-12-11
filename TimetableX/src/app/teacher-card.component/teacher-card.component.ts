import { Component, Input, OnInit } from '@angular/core';
import * as teacherData from '../teacherdata/teachers.json';
import { Teachers } from './teachers.model';
@Component({
  selector: 'app-teacher-card',
  imports: [],
  templateUrl: './teacher-card.component.html',
  styleUrl: './teacher-card.component.css',
})
export class TeacherCardComponent {
  @Input({ required: true }) teacher!: Teachers;
  teachers: any = (teacherData as any).default;
  get imagePath() {
    return 'assets/teachers/' + this.teacher.subject;
  }
}
