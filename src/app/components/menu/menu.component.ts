import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { NotesService } from 'src/app/services/notes.service';

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
    this.uiService.closeLoadMenu();
    this.uiService.toggleSaveMenu();
  }

  showLoadMenu() {
    this.uiService.closeSaveMenu();
    this.uiService.toggleLoadMenu();
  }

  clearField() {
    this.notesService.clearField();
  }


}
