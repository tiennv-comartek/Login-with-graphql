import { combineReducers } from 'redux';
import { GetMeState,  } from '../action-types';

import changeLanguage, { ChangeLanguageState } from './change-language';
import { getMeReducers } from './getme';

export interface AuthModuleState {
 
  changeLanguage: ChangeLanguageState;
  getMeReducers: GetMeState;

}

export default combineReducers<AuthModuleState>({

  changeLanguage,
  getMeReducers,

});
