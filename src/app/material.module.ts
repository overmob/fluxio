import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
})
export class MaterialModule {}
