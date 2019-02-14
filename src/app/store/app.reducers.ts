import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {storeFreeze} from 'ngrx-store-freeze';
import {RouterReducerState} from '@ngrx/router-store';
import * as RouterReducer from '@ngrx/router-store';
import {CurrentUserState} from './current-user/current-user.state';
import {currentUserReducer} from './current-user/current-user.reducer';
import { IndicatorsState } from './indicators/indicators.state';
import { indicatorsListReducer } from './indicators/indicators.reducer';

export interface AppState {
  route: RouterReducerState;
  currentUser: CurrentUserState;
  indicatorsList: IndicatorsState;
}

export const reducers: ActionReducerMap<AppState> = {
  route: RouterReducer.routerReducer,
  currentUser: currentUserReducer,
  indicatorsList: indicatorsListReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];
