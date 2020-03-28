import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { CoursesService } from './services/courses.service';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgxUnlessDirective
  ],
  exports: [
    CourseCardComponent,
    CourseImageComponent
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule { }
