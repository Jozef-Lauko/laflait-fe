import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Section} from "../../model/section/section.model";
import {Router} from "@angular/router";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {filter} from "rxjs";

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent {

  constructor(private router: Router) {
  }

  @Input()
  sections: Array<Section> = [];

  @Output()
  sectionToUpdate = new EventEmitter<number>();


  updateSection(sectionId: number): void{
    this.sectionToUpdate.emit(sectionId);
  }
  getSubSectionBySection(id: number) {
    this.router.navigate(['/podkapitoly', id])
  }

  getBase64Image(imageData: Uint8Array): string {
    const byteArray = Array.from(imageData);
    const binaryString = String.fromCharCode.apply(null, byteArray);
    const base64Image = btoa(binaryString);
    return `data:image/png;base64,${base64Image}`;
  }

}
