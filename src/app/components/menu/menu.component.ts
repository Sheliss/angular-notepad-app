import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { NotesService } from 'src/app/services/notes.service';
import { Notes } from 'src/app/Notes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private uiService: UiService, private notesService: NotesService) { }

  ngOnInit(): void {
  }

  showSaveMenu() {
    this.uiService.closeAllPopups();
    this.uiService.toggleSaveMenu();
  }

  showLoadMenu() {
    this.uiService.closeAllPopups();
    this.uiService.toggleLoadMenu();
  }

  clearField() {
    this.notesService.clearField();
  }


}
