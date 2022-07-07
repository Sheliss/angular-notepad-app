import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { StoreService } from 'src/app/services/store.service';
@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {
  showSave: boolean = false;
  name: string = '';

  constructor(private uiService: UiService, private storeService: StoreService) { 
    this.uiService.showSave.subscribe((showSave: boolean) => this.showSave = showSave);
  }

  ngOnInit(): void {
  }

  saveNote() { 
    if(this.name === '') {
      alert('Enter name!')
      return
    }

    this.storeService.saveNote(this.name);

    this.name = '';
    
    this.uiService.closeSaveMenu();

   }

}
