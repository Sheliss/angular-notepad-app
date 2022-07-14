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
  private deleteAlert = new BehaviorSubject<boolean>(false);
  showDeleteAlert = this.deleteAlert.asObservable();

  showAlert() { 
    this.deleteAlert.next(true);
  }

  closeAlert() { 
    this.deleteAlert.next(false);
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

  //Info alert

  private infoAlert = new BehaviorSubject<boolean>(false);
  showInfoAlert = this.infoAlert.asObservable();
  private infoText = new BehaviorSubject<string>('No text');
  alertInfoText = this.infoText.asObservable();

  showInfo(text: string) {
    this.infoText.next(text);
    this.infoAlert.next(true);
  }

  closeInfo() {
    this.infoAlert.next(false);
  }

  //Close all
  closeAllPopups() {
    this.showSaveData.next(false);
    this.showLoadData.next(false);
    this.deleteAlert.next(false);
    this.showBackupData.next(false);
    this.infoAlert.next(false);
  }
 }
