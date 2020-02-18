import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CoreStateModule } from '@mdv20/core-state';
import { CoreDataModule } from '@mdv20/core-data';
import { UiModule } from '@mdv20/ui';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@mdv20/material';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
