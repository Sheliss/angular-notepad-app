import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notes } from '../Notes';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
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

  onChange (text: string) {
    this.text.next(text)
  }
}
