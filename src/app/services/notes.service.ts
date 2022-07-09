import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notes } from '../Notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  // Notes List 
  private text = new BehaviorSubject<string>('');
  cast = this.text.asObservable();

  constructor() { }

  private idGen (arr: any) {
    arr.forEach((item: Notes, index: number) => {
      item.id = index;
    });
  }


  getNotes () {
    if(localStorage.getItem('notes') === null) {
      const empty = JSON.stringify([]);      
      localStorage.setItem('notes', empty)
    }

    const temp: any = localStorage.getItem('notes');
    return JSON.parse(temp);
  }

  saveNote (name: string) {
    const currentNote: Notes = {
      id: -1,
      name: name,
      text: this.text.value
    }

    let notes: Notes[] = this.getNotes();
    notes.push(currentNote);
    this.idGen(notes);
    const json: string = JSON.stringify(notes);
    console.log(json);

    localStorage.setItem('notes', json);

  }

  loadNote(note: number) {
    const notes: Notes[] = this.getNotes();
    const filtered: any = notes.find(n => n.id === note);
    const text: string = filtered.text;
    this.text.next(text);
  }

  clearField() {
    this.text.next('');
  }

 

  onChange (text: string) {
    this.text.next(text)
  }
  //Note tracking

  private note = new BehaviorSubject<number>(-1);
  currentNote = this.note.asObservable();

  onNoteChose (note: number) { 
    this.note.next(note);
  }
}
