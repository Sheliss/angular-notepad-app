import { Component, OnInit, Input } from '@angular/core';
import { Notes } from 'src/app/Notes';
import { UiService } from 'src/app/services/ui.service';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  @Input() note: Notes = {id: -1, name: 'No Note', text: ''};
  showDeleteAlert: boolean = false;

  constructor(private uiService: UiService, private notesService: NotesService) { } 

  ngOnInit(): void {
    this.uiService.showDeleteAlert.subscribe((showDeleteAlert: boolean) => this.showDeleteAlert = showDeleteAlert);
  }
  
  onNoClick() {
    this.uiService.closeAlert();
  }

  onYesClick() {
    this.notesService.deleteNote(this.note);
    this.uiService.closeAlert();
  }
}
