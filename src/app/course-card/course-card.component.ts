import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewEncapsulation,
  ChangeDetectionStrategy, Attribute
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import {CoursesService} from '../services/courses.service';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output()
    courseChanged = new EventEmitter<Course>();


    constructor(@Attribute('cardType') private cardType: string) {
      console.log(cardType);
    }

    ngOnInit() {

    }


    onSaveClicked(description: string) {

        this.courseChanged.emit({...this.course, description});

    }

    onTitleChanged(newTitle: string) {
        this.course.description = newTitle;
    }

}
