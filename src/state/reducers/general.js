import { createReducer } from 'redux-act';

import {
    GENERAL_INIT,
} from '../actions/general';
const initialState = {};

export const generalDataReducer = createReducer(
  {
    [GENERAL_INIT]: (state, payload) => {
      return({
        ...initialState,
        loading: true
      })
    },
  },
  initialState
);
