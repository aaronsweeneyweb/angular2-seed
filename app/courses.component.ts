//importing the Component decorator from the core Angular module. This is how we define this page as a component.
import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive';

// These decorators are funtions (which take an object), so we have to call them:
// selector specifies a CSS selector for a host HTML element.
// template specifies the HTML that will be inserted in to the DOM when the components view is rendered.
@Component({
    selector: 'courses',
    template: `
      <h2>Courses</h2>
      {{ title }}
      <input type="text" autoGrow>
      <ul>
        <li *ngFor="#course of courses">
          {{ course }}
        </li>
      </ul>
      `,
    //in this array, we specify the dependencies for the component
    providers: [CourseService],
    directives: [AutoGrowDirective]
})

// Exporting so that it will become available to other modules in the app.
export class CoursesComponent {
    title = "The title of courses page";
    courses;

    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
}
