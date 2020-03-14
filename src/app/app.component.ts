import { Component, ViewChild } from '@angular/core';
import { Course } from './model/course';
import { COURSES } from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  onCourseSelected(course: Course) {
    console.log("App component - click event bubbled...", course);
  }

}
