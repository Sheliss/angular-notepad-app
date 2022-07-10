import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Notes } from 'src/app/Notes';
import { NotesService } from 'src/app/services/notes.service';
import { BackupService } from 'src/app/services/backup.service';

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.scss']
})
export class BackupComponent implements OnInit {
  showBackup: boolean = false;
  notes: Notes[] = [];

  constructor(private uiService: UiService, private notesService: NotesService, private backupService: BackupService) { }

  ngOnInit(): void {
    this.uiService.showBackupMenu.subscribe((showBackupMenu: boolean) => this.showBackup = showBackupMenu);
    this.notesService.sharedNotes.subscribe((sharedNotes) => this.notes = sharedNotes);
  }

  onSave() {
    this.backupService.saveFile(this.notes);
    this.uiService.closeBackup();
  }

  onLoadClick(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  onLoad(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if(fileList) {

    }
    
  }
}