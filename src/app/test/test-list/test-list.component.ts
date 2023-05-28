import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {Test} from "../../model/test/test.model";

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent {

  constructor(private route: Router) {
    this.replace();
  }

  @Input()
  tests: Array<Test> = [];

  @Output()
  testToUpdate = new EventEmitter<number>();

  updateTest(testId: number): void {
    this.testToUpdate.emit(testId);
  }

  private replace() {
    for (let i = 0; i < this.tests.length; i++) {
      this.tests[i].testDescription.replace(';', '\n');
    }
    console.log(this.tests[0]);
  }

  getTestByTestQuestion(id: number) {
    this.route.navigate(['/otazky', id])
  }
}
