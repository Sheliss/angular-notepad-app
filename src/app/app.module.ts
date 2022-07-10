import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ButtonComponent } from './components/button/button.component';
import { FieldComponent } from './components/field/field.component';
import { SaveComponent } from './components/save/save.component';
import { LoadComponent } from './components/load/load.component';
import { LoadItemComponent } from './components/load-item/load-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DeleteComponent } from './components/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ButtonComponent,
    FieldComponent,
    SaveComponent,
    LoadComponent,
    LoadItemComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
