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
    if(this.showSaveData.value === true) {
      this.closeAllPopups();
      return
    }
    this.closeAllPopups();
    this.showSaveData.next(true);
   }

  closeSaveMenu() {
    this.showSaveData.next(false)
  }

  //Load menu
  private showLoadData = new BehaviorSubject<boolean>(false);
  showLoad = this.showLoadData.asObservable();

  toggleLoadMenu() {
    if(this.showLoadData.value === true) {
      this.closeAllPopups();
      return
    }
    this.closeAllPopups();
    this.showLoadData.next(true)
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

  //Backup Menu

  private showBackupData = new BehaviorSubject<boolean>(false);
  showBackupMenu = this.showBackupData.asObservable();

  toggleBackup() {
    if(this.showBackupData.value === true) {
      this.closeAllPopups();
      return
    }
    this.closeAllPopups();
    this.showBackupData.next(true)
  }

  closeBackup() {
    this.showBackupData.next(false);
  }

  //Close all
  closeAllPopups() {
    this.showSaveData.next(false);
    this.showLoadData.next(false);
    this.showAlertData.next(false);
    this.showBackupData.next(false);
  }
 }
