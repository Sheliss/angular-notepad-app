import { Injectable } from '@angular/core';
import { Notes } from '../Notes';
import { FileSaverService } from 'ngx-filesaver';

@Injectable({
  providedIn: 'root'
})
export class BackupService {

  constructor(private fileSaverService: FileSaverService) { }

  saveFile(notes: Notes[]) {
    const toSave: any = notes;
    const parsed = JSON.stringify(toSave);
    const blob = new Blob([parsed], { type: 'text/plain;charset=utf-8' });
    this.fileSaverService.save(blob, 'savedNotes.json')
  }

}
