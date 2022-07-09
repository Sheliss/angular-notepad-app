import { Component, OnInit } from '@angular/core';
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

  constructor(private notesService: NotesService, private uiService: UiService) { }

  ngOnInit(): void {
    this.notes = this.notesService.getNotes();
    this.notesService.currentNote.subscribe((currentNote: number) => this.currentNote = currentNote);
    this.uiService.showLoad.subscribe((showLoad: boolean) => this.showLoad = showLoad);
  }

  onClick() {
    this.notesService.loadNote(this.currentNote);
    this.uiService.closeLoadMenu();
  }

  onDelete(data: any) {
    console.log(data.id)
  }

}
