import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@mdv20/material';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { DetailComponent } from './detail/detail.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule, MaterialModule, CommonModule, RouterModule],
  declarations: [
    LoginComponent,
    NotFoundComponent,
    ToolbarComponent,
    ListComponent,
    FormComponent,
    DetailComponent,
  ],
  exports: [
    LoginComponent,
    NotFoundComponent,
    ToolbarComponent,
    ListComponent,
    FormComponent,
    DetailComponent
  ]
})
export class UiModule {}
