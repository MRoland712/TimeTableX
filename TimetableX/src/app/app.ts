import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimetableBodyComponent } from './timetable-body/timetable-body.component';
import { TeacherCardComponent } from './teacher-card.component/teacher-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TimetableBodyComponent, TeacherCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('TimetableX');
}
