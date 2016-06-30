//importing the Component decorator from the core Angular module. This is how we define this page as a component.
import {Component} from 'angular2/core';

// These decorators are funtions, so we have to call them:
// selector specifies a CSS selector for a host HTML element.
// template specifies the HTML that will be inserted in to the DOM when the components view is rendered.
@Component({
  selector: 'courses',
  template: '<h2>Courses</h2>'
})

export class CoursesComponent {

}
