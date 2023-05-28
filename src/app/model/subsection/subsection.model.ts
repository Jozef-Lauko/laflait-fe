import {Note} from "../note/note.model";

export interface Subsection {
  id: number;
  title: string;
  text: string;
  notesid: number,
  notestext: string,
  notescode: string,
  notesimageData: Uint8Array,
}
