import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { NotesService } from 'src/app/services/notes.service';
@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {
  showSave: boolean = false;
  name: string = '';

  constructor(private uiService: UiService, private notesService: NotesService) { 

  }

  ngOnInit(): void {
    this.uiService.showSave.subscribe((showSave: boolean) => this.showSave = showSave);
  }

  saveNote() { 
    if(this.name === '') {
      this.uiService.showInfo('Enter name!');
      return
    }

    this.notesService.saveNote(this.name);

    this.name = '';
    
    this.uiService.closeSaveMenu();

   }

}
