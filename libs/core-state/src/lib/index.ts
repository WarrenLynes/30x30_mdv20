import { ActionReducerMap } from '@ngrx/store';

import { appReducer, IAppState } from './app/app.reducer';
import { authReducer, IAuthState } from './auth/auth.reducer';
import * as fromPhones from './phones/phones.reducer';

export interface AppState {
  app: IAppState;
  auth: IAuthState;
  phones: fromPhones.PhonesState;
}

export const reducers: ActionReducerMap<AppState> = {
  app: appReducer,
  auth: authReducer,
  phones: fromPhones.reducer
};

export const defaultState: AppState = {
  app: null,
  auth: null,
  phones: {ids: [] } as fromPhones.PhonesState
};
