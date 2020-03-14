import { 
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  TemplateRef
} from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Input()
  noImageTpl: TemplateRef<any>;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log("card component - button clicked ....");

    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    if(this.course.category == 'BEGINNER') {
      return 'beginner';
    } else {
      return '';
    }
  }

}
