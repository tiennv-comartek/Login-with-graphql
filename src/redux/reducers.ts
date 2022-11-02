import app, { AppState } from '@modules/App/redux/reducers';
import auth, { AuthModuleState } from '@modules/Auth/redux/reducers';

import { combineReducers } from 'redux';



export interface RootState {
  app: AppState;
  auth: AuthModuleState;

 
}

export default combineReducers<RootState>({
  app,
  auth,

 
});
