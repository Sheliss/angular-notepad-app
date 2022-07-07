import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private storeService: StoreService, private uiService: UiService) { }

  ngOnInit(): void {
  }

  showSaveMenu() {
    this.uiService.toggleSaveMenu();
  }


}
