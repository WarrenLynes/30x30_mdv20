import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataPersistence } from '@nrwl/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootStoreConfig, StoreModule } from '@ngrx/store';

import { CoreDataModule } from '@mdv20/core-data';
import { reducers } from '.';
import { AuthEffects } from './auth/auth.effects';
import { PhonesEffects } from './phones/phones.effects';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true
  }
};

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([
      AuthEffects,
      PhonesEffects
    ]),
    StoreDevtoolsModule.instrument({ name: 'mdv20 Store' })
  ],
  providers: [DataPersistence]
})
export class CoreStateModule {}
