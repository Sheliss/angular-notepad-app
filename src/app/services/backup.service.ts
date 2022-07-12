import { Injectable } from '@angular/core';
import { Notes } from '../Notes';
import { FileSaverService } from 'ngx-filesaver';
import { NotesService } from './notes.service';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class BackupService {

  constructor(private fileSaverService: FileSaverService, private notesService: NotesService, private uiService: UiService) { }

  saveFile(notes: Notes[]) {
    const toSave: any = notes;
    const parsed = JSON.stringify(toSave);
    const blob = new Blob([parsed], { type: 'text/plain;charset=utf-8' });
    this.fileSaverService.save(blob, 'savedNotes.json')
  }

  loadFile(inputValue: any) {
    let file: File = inputValue.files[0];

    if(file.type !== 'application/json') {
      alert('Wrong file');
      return
    }

    if(file.name !== 'savedNotes.json') {
      alert('Wrong file');
      return
    }

    const reader: FileReader = new FileReader();
    reader.onloadend = () => {  
    const data: any = reader.result;
    let parsedData: any;
    try {
      parsedData = JSON.parse(data);
    } catch {
      alert('Wrong file')
      return
    }
      const toSave: Notes[] = parsedData;
      this.notesService.loadSavedNotes(toSave);
    }
    this.uiService.closeBackup();
    reader.readAsText(file);
  }

}
