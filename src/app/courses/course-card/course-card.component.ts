import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy,
  Attribute,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  AfterContentChecked,
  AfterViewChecked
} from '@angular/core';
import {Course} from '../../model/course';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit, OnDestroy, OnChanges, AfterContentChecked, AfterViewChecked {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output()
    courseChanged = new EventEmitter<Course>();


    constructor(@Attribute('cardType') private cardType: string) {
      console.log('constructor');
    }

    ngOnInit() {
      console.log('ngOnInit');
    }

    ngOnDestroy(): void {
      console.log('ngOnDestroy');
    }

    onSaveClicked(description: string) {
        this.courseChanged.emit({
          ...this.course,
          description
        });
    }

    onTitleChanged(newTitle: string) {
        this.course.description = newTitle;
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }

    ngAfterContentChecked(): void {
        console.log('ngAfterContentChanged');
    }

    ngAfterViewChecked(): void {
        console.log('afterViewChecked');
    }

}
