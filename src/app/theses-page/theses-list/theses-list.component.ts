import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Theses} from "../../model/theses/theses.model";
import {SectionPageComponent} from "../../section-page/section-page.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-theses-list',
  templateUrl: './theses-list.component.html',
  styleUrls: ['./theses-list.component.css']
})
export class ThesesListComponent {

  constructor(private router: Router) {
  }

  @Input()
  theses: Array<Theses> = [];

  @Output()
  thesisToUpdate = new EventEmitter<number>();

  updateThesis(thesisId: number): void {
    this.thesisToUpdate.emit(thesisId);
  }

  getSectionByThesis(id: number) {
    this.router.navigate(['/kapitoly', id])
  }
}
