import { Component } from '@angular/core';
import { TeacherCardComponent } from '../teacher-card.component/teacher-card.component';

@Component({
  selector: 'app-body',
  imports: [TeacherCardComponent],
  templateUrl: './timetable-body.component.html',
  styleUrl: './timetable-body.component.css',
})
export class TimetableBodyComponent {}
