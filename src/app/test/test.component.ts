import { Component } from '@angular/core';
import { TestService } from "../service/test/test.service";
import { Test } from "../model/test/test.model";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  tests: Array<Test> = [];
  test?: Test;

  constructor(private service: TestService) {
    this.getTests();
  }

  getTests(): void{
    this.service.getTests().subscribe((tests: Test[]) => {
      this.tests = tests;
      for (let i = 0; i < this.tests.length; i++) {
        let Arr = this.tests[i].testDescription.split(';');
        let NewString = Arr.join("\n");
        this.tests[i].testDescription = NewString;
      }
      console.log(this.tests[0]);
    })
  }

  updateTest(test: Test): void{
    this.service.updateTest(test).subscribe(() =>{
      this.getTests();
    })
  }

  private replace() {
    for (let i = 0; i < this.tests.length; i++) {
      this.tests[i].testDescription.replace(';', '\n');
    }
    console.log(this.tests[0]);
  }
}
