import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showSaveData = new BehaviorSubject<boolean>(false);
  showSave = this.showSaveData.asObservable();

  constructor() { }

  toggleSaveMenu() {
    this.showSaveData.next(!this.showSaveData.value)
   }

  closeSaveMenu() {
    this.showSaveData.next(false)
   }
}
