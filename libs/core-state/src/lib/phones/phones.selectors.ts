import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  PHONES_FEATURE_KEY,
  phonesAdapter,
  PhonesState
} from './phones.reducer';
import { emptyPhone } from '@mdv20/core-data';

export const selectPhonesState =
  createFeatureSelector<PhonesState>(PHONES_FEATURE_KEY);

const { selectAll, selectEntities } = phonesAdapter.getSelectors();

export const selectPhonesLoading = createSelector(
  selectPhonesState,
  (state: PhonesState) => state.isLoading
);

export const selectAllPhones = createSelector(
  selectPhonesState,
  (state: PhonesState) => selectAll(state)
);

export const selectPhonesEntities = createSelector(
  selectPhonesState,
  (state: PhonesState) => selectEntities(state)
);

export const selectPhoneId = createSelector(
  selectPhonesState,
  (state: PhonesState) => state.selectedPhoneId
);

export const selectPhone = createSelector(
  selectPhonesEntities,
  selectPhoneId,
  (entities, selectedId) => {
    return selectedId ? entities[selectedId] : emptyPhone
  }
);
