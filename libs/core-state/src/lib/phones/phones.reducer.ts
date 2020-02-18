import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as phonesActions from './phones.actions';
import { Phone } from '@mdv20/core-data';

export const PHONES_FEATURE_KEY = 'phones';

export interface PhonesState extends EntityState<Phone> {
  selectedPhoneId?: string | number;
  isLoading: boolean;
}

export interface PhonesPartialState {
  readonly [PHONES_FEATURE_KEY]: PhonesState;
}

export const phonesAdapter: EntityAdapter<Phone> = createEntityAdapter<Phone>();

export const initialState: PhonesState = phonesAdapter.getInitialState({
  selectedPhoneId: null,
  isLoading: false
});

const phonesReducer = createReducer(
  initialState,
  on(phonesActions.phoneSelected, (state, { selectedPhoneId }) =>
    Object.assign({}, state, { selectedPhoneId })
  ),
  on(phonesActions.phonesLoaded, (state, { phones }) =>
    phonesAdapter.addAll(phones, { ...state, isLoading: false })
  ),
  on(phonesActions.phoneCreated, (state, { phone }) =>
    phonesAdapter.addOne(phone, { ...state, isLoading: false })
  ),
  on(phonesActions.phoneUpdated, (state, { phone }) =>
    phonesAdapter.upsertOne(phone, { ...state, isLoading: false })
  ),
  on(phonesActions.phoneDeleted, (state, { phone }) =>
    phonesAdapter.removeOne(phone.id, { ...state, isLoading: false })
  ),
  on(
    phonesActions.loadPhones,
    phonesActions.createPhone,
    phonesActions.updatePhone,
    phonesActions.deletePhone,
    (state) => ({
      ...state,
      isLoading: true
    })
  ),
);

export function reducer(state: PhonesState | undefined, action: Action) {
  return phonesReducer(state, action);
}
