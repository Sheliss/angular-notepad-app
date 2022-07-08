import { Component, OnInit } from '@angular/core';
import { Notes } from 'src/app/Notes';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {
  notes: Notes[] = [];
  selectedNote: number = -1;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.notes = this.storeService.getNotes();
  }

  noteSelect(note: Notes) { 
    this.selectedNote = note.id;
  }

}
