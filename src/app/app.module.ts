import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShowComponent } from './vinyl/show.component';
import { AddComponent } from './vinyl/add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.modules';
import { RatingValidator } from './validate-rating.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    AddComponent,
    RatingValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
