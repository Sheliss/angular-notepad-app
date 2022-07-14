import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  showAlert: boolean = false;
  alertText: string = 'No alert';

  constructor(private uiService: UiService) { }

  ngOnInit(): void {
    this.uiService.showInfoAlert.subscribe((showInfoAlert: boolean) => this.showAlert = showInfoAlert);
    this.uiService.alertInfoText.subscribe((alertInfoText) => this.alertText = alertInfoText);
  }

  onOk() {
    this.uiService.closeInfo();
  }

}
