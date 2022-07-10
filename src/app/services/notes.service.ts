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
  private currentList = new BehaviorSubject<Notes[]>([]);
  sharedNotes = this.currentList.asObservable();

  constructor() { }

  private idGen (arr: any) {
    arr.forEach((item: Notes, index: number) => {
      item.id = index;
    });

    return arr;
  }


  getNotes () {
    if(localStorage.getItem('notes') === null) {
      const empty = JSON.stringify([]);      
      localStorage.setItem('notes', empty)
    }

    const temp: any = localStorage.getItem('notes');
    const parsed = JSON.parse(temp);
    this.currentList.next(parsed);
    return parsed
  }

  saveNote (name: string) {
    const currentNote: Notes = {
      id: -1,
      name: name,
      text: this.text.value
    }

    let notes: Notes[] = this.getNotes();
    notes.push(currentNote);
    notes = this.idGen(notes);
    const json: string = JSON.stringify(notes);
    localStorage.setItem('notes', json);

    this.currentList.next(notes);
  }

  loadNote(note: number) {
    const notes: Notes[] = this.getNotes();
    const filtered: any = notes.find(n => n.id === note);
    const text: string = filtered.text;
    this.text.next(text);
  }

  deleteNote(note: Notes) {
    let notes: Notes[] = this.getNotes();
    notes = notes.filter((n) => n.id !== note.id);
    notes = this.idGen(notes);
    const json: string = JSON.stringify(notes);
    localStorage.setItem('notes', json);
    this.currentList.next(notes);
    this.note.next(-1);
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
