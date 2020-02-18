import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonesService } from './phones/phones.service';
import { SnackbarComponent } from './snackbar/snackbar.component';

@NgModule({
  declarations: [SnackbarComponent],
  imports: [ CommonModule, HttpClientModule ],
  providers: [ PhonesService ],
  entryComponents: [SnackbarComponent],
})
export class CoreDataModule {}
