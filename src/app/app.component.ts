import { Component } from '@angular/core';
import { Course } from './model/course';
import { COURSES } from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  startDate = new Date(2000, 0, 1);

  title = COURSES[0].description

  onCourseSelected(course: Course) {
    console.log("App component - click event bubbled...", course);
  }

}
