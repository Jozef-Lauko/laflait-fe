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

  //filterSearch?: string;
  filterSearch?: number;
  thesesTemp: Array<Theses> = [];
  thesesOrigin: Array<Theses> = [];
  switch: boolean = true;

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

  /*search() {
    this.thesesOrigin = this.theses;
    console.log(this.filterSearch);
    //this.thesesTemp = this.theses;
    //this.theses = [];
    if(this.filterSearch == undefined){
      return;
    }
    for (let i = 0; i < this.theses.length; i++) {
      if (!this.theses[i].title.indexOf(this.filterSearch,0)) {
        this.thesesTemp.push(this.theses[i]);
      }
    }
    this.theses = this.thesesTemp;
  }*/
  search() {
    if (this.switch){
      this.thesesOrigin = this.theses;
      this.switch = false;
    }
    console.log(this.filterSearch);
    //this.thesesTemp = this.theses;
    //this.theses = [];
    if (this.filterSearch == undefined) {
      return;
    }
    for (let i = 0; i < this.theses.length; i++) {
      if (this.theses[i].id == this.filterSearch) {
        this.thesesTemp.push(this.theses[i]);
      }
    }
    this.theses = this.thesesTemp;
  }

  refresh() {
    this.theses = this.thesesOrigin;
    this.thesesTemp = [];
  }
}
