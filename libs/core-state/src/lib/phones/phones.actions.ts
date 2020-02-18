import { createAction, props } from '@ngrx/store';

import { Phone } from '@mdv20/core-data';

export const phoneSelected = createAction(
  '[PHONE][SELECTED]',
  props<{ selectedPhoneId: string }>()
);
export const loadPhones = createAction(
  '[PHONE][LOAD]'
);
export const phonesLoaded = createAction(
  '[PHONE][LOADED]',
  props<{ phones: Phone[] }>()
);
export const createPhone = createAction(
  '[PHONE][CREATE]',
  props<{ phone: Phone }>()
);
export const phoneCreated = createAction(
  '[PHONE][CREATED]',
  props<{ phone: Phone }>()
);
export const updatePhone = createAction(
  '[PHONE][UPDATE]',
  props<{ phone: Phone }>()
);
export const phoneUpdated = createAction(
  '[PHONE][UPDATED]',
  props<{ phone: Phone }>()
);
export const deletePhone = createAction(
  '[PHONE][DELETE]',
  props<{ phone: Phone }>()
);
export const phoneDeleted = createAction(
  '[PHONE][DELETED]',
  props<{ phone: Phone }>()
);
