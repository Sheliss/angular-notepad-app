import { Component, OnInit, Input} from '@angular/core';
import { Notes } from 'src/app/Notes';
import { NotesService } from 'src/app/services/notes.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {
  notes: Notes[] = [];
  currentNote: number = -1;
  showLoad: boolean = false;
  forDelete: Notes = {id: -1, name: 'No note', text: ''};

  constructor(private notesService: NotesService, private uiService: UiService) { }

  ngOnInit(): void {
    this.notes = this.notesService.getNotes();
    this.notesService.sharedNotes.subscribe((sharedNotes) => this.notes = sharedNotes);
    this.notesService.currentNote.subscribe((currentNote: number) => this.currentNote = currentNote);
    this.uiService.showLoad.subscribe((showLoad: boolean) => this.showLoad = showLoad);
  }

  onLoadClick() {
    if(this.currentNote <= -1) {
      this.uiService.showInfo('Choose note to load first!');
      return
    }
    this.notesService.loadNote(this.currentNote);
    this.uiService.closeLoadMenu();
  }

  onDelete(note: Notes) {
    this.forDelete = note;
    this.uiService.showAlert();
  }

  onNoNotesClick() {
    this.uiService.closeLoadMenu();
  }

}
