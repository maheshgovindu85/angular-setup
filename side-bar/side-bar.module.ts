import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarRoutingModule } from './side-bar-routing.module';
import { SideBarComponent } from './side-bar.component';
import { UitreeComponent } from './uitree/uitree.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    SideBarComponent,
    UitreeComponent,
  ],
  imports: [
    SideBarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
  ],

  exports: [SideBarComponent],
  providers: [
      
  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class SideBarModule { }
