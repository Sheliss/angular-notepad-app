import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  text: string = '';

  constructor(private uiService: UiService, private notesService: NotesService) { }

  ngOnInit(): void {
    this.notesService.currentText.subscribe((text: string) => this.text = text);
  }

  showSaveMenu() {
    if(this.text === '') {
      this.uiService.showInfo('Nothing to save!');
      return
    }
    this.uiService.toggleSaveMenu();
  }

  showLoadMenu() {
    this.uiService.toggleLoadMenu();
  }

  clearField() {
    this.notesService.clearField();
  }

  showBackupMenu() { 
    this.uiService.toggleBackup();
  }


}
