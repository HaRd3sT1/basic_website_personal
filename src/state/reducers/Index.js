import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { generalDataReducer } from './general';
import { preferencesReducer } from './preferences';
import { formReducer } from './form';

export default combineReducers({
  generalDataReducer: persistReducer(
    {
      key: 'general',
      storage,
      blacklist: ['error', 'loading'],
    },
    generalDataReducer
  ),
  preferences: persistReducer(
    { key: 'preferences', storage },
    preferencesReducer
  ),
  form: persistReducer(
    { key: 'form', storage },
    formReducer
  ),
});
