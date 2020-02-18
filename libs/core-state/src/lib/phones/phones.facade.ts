import { Injectable } from '@angular/core';
import { Action, select, Store, ActionsSubject } from '@ngrx/store';
import * as fromPhones from './phones.reducer';
import * as phonesActions from './phones.actions';
import {
  selectAllPhones,
  selectPhone,
  selectPhonesLoading
} from './phones.selectors';
import { Phone } from '@mdv20/core-data';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PhonesFacade {
  allPhones$ = this.store.pipe(select(selectAllPhones));
  selectedPhone$ = this.store.pipe(select(selectPhone));
  phoneLoading$ = this.store.pipe(select(selectPhonesLoading));

  constructor(
    private store: Store<fromPhones.PhonesPartialState>,
    private actions$: ActionsSubject
  ) {}

  selectPhone(selectedPhoneId: any) {
    this.dispatch(phonesActions.phoneSelected({ selectedPhoneId }));
  }

  loadPhones() {
    this.dispatch(phonesActions.loadPhones());
  }

  createPhone(phone: Phone) {
    this.dispatch(phonesActions.createPhone({ phone }));
  }

  updatePhone(phone: Phone) {
    this.dispatch(phonesActions.updatePhone({ phone }));
  }

  deletePhone(phone: Phone) {
    this.dispatch(phonesActions.deletePhone({ phone }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
