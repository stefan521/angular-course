import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {Course} from './model/course';
import {Observable} from 'rxjs';
import {AppConfig, CONFIG_TOKEN} from './config';
import {COURSES} from '../db-data';
import {CoursesService} from './courses/services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  courses = COURSES;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig) {

  }

  ngOnInit() {
  }

  save(course: Course) {
  }

  onEditCourse() {
    const course = this.courses[0];

    const newCourse = {
      ...course,
      description: 'ngOnChanges'
    };

    this.courses[0] = newCourse;
  }
}
