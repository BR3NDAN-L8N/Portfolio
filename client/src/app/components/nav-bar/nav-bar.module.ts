import { MatButtonModule } from '@angular/material/button';

  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavBarComponent } from './nav-bar.component';

@NgModule({
  declarations: [
    NavBarComponent

  ],
  imports: [
    BrowserModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [NavBarComponent]
})
export class NavBarModule { }