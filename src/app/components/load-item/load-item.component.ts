import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Notes } from 'src/app/Notes';
import { NotesService } from 'src/app/services/notes.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-load-item',
  templateUrl: './load-item.component.html',
  styleUrls: ['./load-item.component.scss']
})
export class LoadItemComponent implements OnInit {
  @Input() note: Notes = { id: -1, name: 'No Name', text: 'Empty' };
  @Output() onDeleteClick: EventEmitter<object> = new EventEmitter();
  currentNote: number = -1;
  faTimes = faTimes;
 

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.notesService.currentNote.subscribe((currentNote: number) => this.currentNote = currentNote);
  }

  onClick() {
    this.notesService.onNoteChose(this.note.id);
  }
  
  onDelete() {
    const data: object = {
      id: this.note.id,
      name: this.note.name
    }
    this.onDeleteClick.emit(data);
  }

}
