import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessRoutingModule } from './process-routing.module';
import { ProcessComponent } from './process.component';
import { ProcessHeaderComponent } from './components/process-header/process-header.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    ProcessComponent,
    ProcessHeaderComponent
  ],
  imports: [
    CommonModule,
    ProcessRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
    
  ]
})
export class ProcessModule { }
