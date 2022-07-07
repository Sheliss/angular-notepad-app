import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  text: string = '';

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.cast.subscribe((text: string) => this.text = text);
  }

  onChange() {
    this.storeService.onChange(this.text);
  }

}
