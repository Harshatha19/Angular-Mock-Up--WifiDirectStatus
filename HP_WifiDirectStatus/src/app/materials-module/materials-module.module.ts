import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';

const materialComponents = [MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatButtonModule, MatTabsModule, MatExpansionModule, MatCardModule, MatSlideToggleModule, MatFormFieldModule, MatSelectModule,
  MatInputModule, MatDividerModule, MatDialogModule];

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents],

})
export class MaterialsModuleModule { }
