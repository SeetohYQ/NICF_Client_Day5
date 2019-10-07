import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

const MODULE = [
  MatToolbarModule, MatButtonModule, MatIconModule,
  MatFormFieldModule, MatInputModule, 
  MatCheckboxModule, MatRadioModule, FlexLayoutModule,
  MatCardModule
]

@NgModule({
  imports: MODULE,
  exports: MODULE
})
export class MaterialModule {}
