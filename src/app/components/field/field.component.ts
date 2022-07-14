import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  text: string = '';

  constructor(private notesService: NotesService, private uiService: UiService) { }

  ngOnInit(): void {
    this.notesService.currentText.subscribe((text: string) => this.text = text);
  }

  onChange() {
    this.notesService.onChange(this.text);
  }

  onFieldClick() {
    this.uiService.closeAllPopups();
  }

}
