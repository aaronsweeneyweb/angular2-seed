//importing the Component decorator from the core Angular module. This is how we define this page as a component.
import {Component} from 'angular2/core';

// These decorators are funtions (which take an object), so we have to call them:
// selector specifies a CSS selector for a host HTML element.
// template specifies the HTML that will be inserted in to the DOM when the components view is rendered.
@Component({
  selector: 'courses',
  template: `
    <h2>Courses</h2>
    {{ title }}
    <ul>
      <li *ngFor="#course of courses">
        {{ course }}
      </li>
    </ul>
    `
})

export class CoursesComponent {
  title = "The title of course page";
  courses = ["Course1", "Course2", "Course3"];
}
