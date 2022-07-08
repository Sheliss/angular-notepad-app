import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Notes } from 'src/app/Notes';

@Component({
  selector: 'app-load-item',
  templateUrl: './load-item.component.html',
  styleUrls: ['./load-item.component.scss']
})
export class LoadItemComponent implements OnInit {
  @Input() note: Notes = { id: -1, name: 'No Name', text: 'Empty' };
  @Output() onNoteSelected: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  noteSelect(note: Notes) {
    this.onNoteSelected.emit(note.id);
  }

}
