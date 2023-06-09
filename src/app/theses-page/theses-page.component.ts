import {Component, Input} from '@angular/core';
import {Theses} from "../model/theses/theses.model";
import {ThesesService} from "../service/theses/theses.service";

@Component({
  selector: 'app-theses-page',
  templateUrl: './theses-page.component.html',
  styleUrls: ['./theses-page.component.css']
})
export class ThesesPageComponent {

  theses: Array<Theses> = [];
  thesis?: Theses;

  constructor(private service: ThesesService) {
    this.getTheses();
  }

  getTheses(): void {
    this.service.getTheses().subscribe((theses: Theses[]) => {
      this.theses = theses;
    })
  }
}
