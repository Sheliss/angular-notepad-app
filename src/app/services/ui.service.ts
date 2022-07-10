import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  constructor() { }

  //Save menu
  private showSaveData = new BehaviorSubject<boolean>(false);
  showSave = this.showSaveData.asObservable();


  toggleSaveMenu() {
    this.showSaveData.next(!this.showSaveData.value)
   }

  closeSaveMenu() {
    this.showSaveData.next(false)
  }

  //Load menu
  private showLoadData = new BehaviorSubject<boolean>(false);
  showLoad = this.showLoadData.asObservable();

  toggleLoadMenu() {
    this.showLoadData.next(!this.showLoadData.value)
   }

  closeLoadMenu() {
    this.showLoadData.next(false)
  }

  //Delete alert
  private showAlertData = new BehaviorSubject<boolean>(false);
  showDeleteAlert = this.showAlertData.asObservable();

  showAlert() { 
    this.showAlertData.next(true);
  }

  closeAlert() { 
    this.showAlertData.next(false);
  }

  //Close all
  closeAllPopups() {
    this.showSaveData.next(false);
    this.showLoadData.next(false);
    this.showAlertData.next(false);
  }
 }
